import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Loader2, ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { storefrontApiRequest, PRODUCT_BY_HANDLE_QUERY } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import type { ShopifyProduct } from "@/lib/shopify";

const ProductPage = () => {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<ShopifyProduct["node"] | null>(null);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore(state => state.addItem);
  const isCartLoading = useCartStore(state => state.isLoading);

  useEffect(() => {
    async function fetch() {
      try {
        const data = await storefrontApiRequest(PRODUCT_BY_HANDLE_QUERY, { handle });
        if (data?.data?.productByHandle) {
          setProduct(data.data.productByHandle);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, [handle]);

  const handleAddToCart = async () => {
    if (!product) return;
    const variant = product.variants.edges[0]?.node;
    if (!variant) return;
    const shopifyProduct: ShopifyProduct = { node: product };
    await addItem({
      product: shopifyProduct,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success("Ajouté au panier", { description: product.title, position: "top-center" });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4">
        <p className="text-muted-foreground">Produit introuvable</p>
        <Link to="/" className="text-primary hover:underline">Retour à l'accueil</Link>
      </div>
    );
  }

  const variant = product.variants.edges[0]?.node;
  const images = product.images.edges;

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <Link to="/#produits" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Retour aux produits
        </Link>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Images */}
          <div className="space-y-4">
            {images.map((img, i) => (
              <div key={i} className="rounded-sm overflow-hidden border border-gold/15">
                <img src={img.node.url} alt={img.node.altText || product.title} className="w-full object-cover" />
              </div>
            ))}
          </div>

          {/* Details */}
          <div className="space-y-6 md:sticky md:top-24">
            <h1 className="font-serif text-3xl md:text-4xl font-light">{product.title}</h1>
            {variant && (
              <p className="font-serif text-3xl text-gradient-gold">
                {parseFloat(variant.price.amount).toFixed(2)} €
              </p>
            )}
            <p className="text-secondary-foreground/80 font-light leading-relaxed">
              {product.description}
            </p>
            <button
              onClick={handleAddToCart}
              disabled={isCartLoading || !variant?.availableForSale}
              className="w-full py-4 bg-primary text-primary-foreground font-medium tracking-widest uppercase text-sm hover:bg-gold-light transition-colors duration-300 rounded-sm disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isCartLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <><ShoppingCart className="w-4 h-4" />Ajouter au panier</>}
            </button>
            <div className="pt-6 border-t border-gold/20 space-y-2">
              <p className="text-xs text-muted-foreground font-light">✓ Morilles de feu sauvages du Canada</p>
              <p className="text-xs text-muted-foreground font-light">✓ Séchées sans queue, 100% naturelles</p>
              <p className="text-xs text-muted-foreground font-light">✓ Livraison en France métropolitaine</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
