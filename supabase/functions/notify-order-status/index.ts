import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "npm:@supabase/supabase-js@2.57.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const STATUS_LABELS: Record<string, { fr: string; emoji: string }> = {
  paid: { fr: "Paiement confirmé", emoji: "✅" },
  shipped: { fr: "Expédiée", emoji: "📦" },
  delivered: { fr: "Livrée", emoji: "🎉" },
  cancelled: { fr: "Annulée", emoji: "❌" },
  confirmed: { fr: "Confirmée", emoji: "✅" },
};

function buildOrderEmail(customerName: string, status: string, type: "order" | "preorder", details: string) {
  const statusInfo = STATUS_LABELS[status] || { fr: status, emoji: "📋" };
  const typeLabel = type === "order" ? "commande" : "pré-commande";

  return `
    <div style="font-family: 'Raleway', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #1a1714; padding: 0;">
      <div style="background: linear-gradient(135deg, #cc9a2e, #d4a843); padding: 32px; text-align: center;">
        <h1 style="font-family: 'Cormorant Garamond', Georgia, serif; color: #1a1714; font-size: 28px; margin: 0;">
          Morilles du Canada
        </h1>
      </div>
      <div style="padding: 32px; color: #e8dcc8;">
        <p style="font-size: 16px; margin-bottom: 24px;">Bonjour ${customerName},</p>
        <div style="background: #2a2520; border: 1px solid #cc9a2e33; border-radius: 4px; padding: 24px; margin-bottom: 24px;">
          <p style="font-size: 14px; color: #8a7e6b; margin: 0 0 8px;">Statut de votre ${typeLabel}</p>
          <p style="font-size: 24px; margin: 0; color: #cc9a2e;">
            ${statusInfo.emoji} ${statusInfo.fr}
          </p>
        </div>
        ${details}
        <p style="font-size: 14px; color: #8a7e6b; margin-top: 24px;">
          Si vous avez des questions, répondez directement à cet e-mail ou contactez-nous à contact@morillesducanada.com.
        </p>
      </div>
      <div style="padding: 16px 32px; text-align: center; border-top: 1px solid #cc9a2e1a;">
        <p style="color: #8a7e6b; font-size: 11px; margin: 0;">
          © ${new Date().getFullYear()} Morilles du Canada · Morilles de feu séchées du Canada
        </p>
      </div>
    </div>
  `;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY not configured");

    const { type, record, old_status } = await req.json();
    if (!record || !type) throw new Error("Missing type or record");

    // Don't send email for pending status or if status hasn't changed
    if (record.status === "pending" || record.status === old_status) {
      return new Response(JSON.stringify({ skipped: true }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    let customerEmail: string;
    let customerName: string;
    let details: string;

    if (type === "order") {
      customerEmail = record.email;
      customerName = record.customer_name;
      const total = (record.total_amount / 100).toFixed(2);
      details = `
        <p style="font-size: 14px; color: #e8dcc8;">
          <strong>Commande :</strong> ${record.id.substring(0, 8).toUpperCase()}<br/>
          <strong>Total :</strong> ${total} €
        </p>
      `;
      if (record.status === "shipped") {
        details += `<p style="font-size: 14px; color: #e8dcc8;">Votre colis est en route ! Vous recevrez un numéro de suivi séparément.</p>`;
      }
    } else {
      customerEmail = record.email;
      customerName = record.contact_name;
      const morelLabel = record.morel_type === "brune" ? "Morilles brunes" : "Morilles blondes";
      details = `
        <p style="font-size: 14px; color: #e8dcc8;">
          <strong>Pré-commande :</strong> ${record.id.substring(0, 8).toUpperCase()}<br/>
          <strong>Type :</strong> ${morelLabel}<br/>
          <strong>Quantité :</strong> ${record.quantity_kg} kg<br/>
          <strong>Total :</strong> ${record.total_amount} €
        </p>
      `;
    }

    const statusInfo = STATUS_LABELS[record.status] || { fr: record.status, emoji: "📋" };
    const typeLabel = type === "order" ? "commande" : "pré-commande";

    const html = buildOrderEmail(customerName, record.status, type, details);

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Morilles du Canada <notify@notify.morillesducanada.com>",
        to: [customerEmail],
        subject: `${statusInfo.emoji} Votre ${typeLabel} — ${statusInfo.fr}`,
        html,
        reply_to: "contact@morillesducanada.com",
      }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(`Resend error [${res.status}]: ${JSON.stringify(data)}`);

    // Also notify admin
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Morilles du Canada <notify@notify.morillesducanada.com>",
        to: ["contact@morillesducanada.com"],
        subject: `[Admin] ${statusInfo.emoji} ${typeLabel.charAt(0).toUpperCase() + typeLabel.slice(1)} ${record.id.substring(0, 8).toUpperCase()} → ${statusInfo.fr}`,
        html: `<p>La ${typeLabel} de <strong>${customerName}</strong> (${customerEmail}) est passée au statut <strong>${statusInfo.fr}</strong>.</p>`,
      }),
    });

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Notification error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
