import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not configured');
    }

    const payload = await req.json();
    const record = payload.record;

    if (!record) {
      throw new Error('No record in payload');
    }

    const { name, email, message, type, created_at } = record;

    const typeLabel = type === 'professionnel' ? '🏢 Professionnel' : '👤 Particulier';
    const date = new Date(created_at).toLocaleString('fr-FR', {
      dateStyle: 'long',
      timeStyle: 'short',
    });

    const htmlContent = `
      <div style="font-family: 'Raleway', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #faf9f7; padding: 32px;">
        <div style="text-align: center; margin-bottom: 24px;">
          <h1 style="font-family: 'Cormorant Garamond', Georgia, serif; color: #1a1714; font-size: 28px; margin: 0;">
            Nouveau message de contact
          </h1>
          <p style="color: #cc9a2e; font-size: 14px; margin-top: 4px;">${typeLabel}</p>
        </div>
        
        <div style="background: white; border-radius: 8px; padding: 24px; border: 1px solid #e8e4df;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #8a7e6b; font-size: 13px; width: 100px;">Nom</td>
              <td style="padding: 8px 0; color: #1a1714; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #8a7e6b; font-size: 13px;">Email</td>
              <td style="padding: 8px 0; color: #1a1714;">
                <a href="mailto:${email}" style="color: #cc9a2e; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #8a7e6b; font-size: 13px;">Date</td>
              <td style="padding: 8px 0; color: #1a1714;">${date}</td>
            </tr>
          </table>
          
          <hr style="border: none; border-top: 1px solid #e8e4df; margin: 16px 0;" />
          
          <div style="color: #1a1714; line-height: 1.6; white-space: pre-wrap;">${message}</div>
        </div>
        
        <p style="text-align: center; color: #8a7e6b; font-size: 12px; margin-top: 24px;">
          Morilles du Canada — Notification automatique
        </p>
      </div>
    `;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Morilles du Canada <notify@morillesducanada.com>',
        to: ['contact@morillesducanada.com'],
        subject: `📩 Nouveau message de ${name} (${typeLabel})`,
        html: htmlContent,
        reply_to: email,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(`Resend API error [${res.status}]: ${JSON.stringify(data)}`);
    }

    console.log('Email sent successfully:', data);

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending notification email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ success: false, error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
