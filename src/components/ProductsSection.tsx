import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2, ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { storefrontApiRequest, STOREFRONT_QUERY, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import ScrollReveal from "@/components/ScrollReveal";
import { useI18n } from "@/i18n/context";

const ProductsSection = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore(state => state.addItem);
  const isCartLoading = useCartStore(state => state.isLoading);
  const navigate = useNavigate();
  const { t } = useI18n();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await storefrontApiRequest(STOREFRONT_QUERY, { first: 10 });
        if (data?.data?.products?.edges) setProducts(data.data.products.edges);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const handleAddToCart = async (product: ShopifyProduct, e: React.MouseEvent) => {
    e.stopPropagation();
    const variant = product.node.variants.edges[0]?.node;
    if (!variant) return;
    await addItem({
      product, variantId: variant.id, variantTitle: variant.title,
      price: variant.price, quantity: 1, selectedOptions: variant.selectedOptions || [],
    });
    toast.success(t("products.addedToCart"), { description: product.node.title, position: "top-center" });
  };

  return (
    <section id="produits" className="py-24 md:py-32 bg-gradient-card">
      <div className="container mx-auto px-6">
        <ScrollReveal blur>
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">{t("products.label")}</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light">
              {t("products.title")} <span className="italic text-gradient-gold">{t("products.titleHighlight")}</span>
            </h2>
            <div className="divider-gold w-24 mx-auto mt-8" />
            <p className="text-muted-foreground font-light mt-6 max-w-xl mx-auto">{t("products.description")}</p>
          </div>
        </ScrollReveal>

        {loading ? (
          <div className="flex justify-center py-20"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>
        ) : products.length === 0 ? (
          <div className="text-center py-20"><p className="text-muted-foreground font-light">{t("products.noProducts")}</p></div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {products.map((product, i) => {
              const variant = product.node.variants.edges[0]?.node;
              const image = product.node.images.edges[0]?.node;
              const price = variant?.price;
              return (
                <motion.div key={product.node.id}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  onClick={() => navigate(`/product/${product.node.handle}`)}
                  className="relative border border-gold/15 rounded-sm bg-background/50 hover:border-gold/40 hover:shadow-gold transition-all duration-500 group cursor-pointer overflow-hidden"
                >
                  {image && (
                    <div className="aspect-square overflow-hidden">
                      <img src={image.url} alt={image.altText || product.node.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="font-serif text-lg mb-2">{product.node.title}</h3>
                    {price && <p className="font-serif text-2xl text-gradient-gold mb-3">{parseFloat(price.amount).toFixed(2)} €</p>}
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4 line-clamp-2">{product.node.description}</p>
                    <button onClick={(e) => handleAddToCart(product, e)} disabled={isCartLoading || !variant?.availableForSale}
                      className="w-full py-3 bg-primary text-primary-foreground font-medium tracking-widest uppercase text-xs hover:bg-gold-light transition-colors duration-300 rounded-sm disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isCartLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <><ShoppingCart className="w-4 h-4" />{t("products.addToCart")}</>}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-16">
            <a href="#contact" className="inline-block px-10 py-4 border border-primary/40 text-foreground font-light tracking-widest uppercase text-sm hover:border-primary hover:text-primary transition-colors duration-300 rounded-sm">
              {t("products.bulkCta")}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProductsSection;
