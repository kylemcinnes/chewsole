import { ProductCard } from '@/components/ProductCard';
import { db } from '@/lib/db';

export const metadata = {
  title: 'Shop ChewSole™ - Pre-Launch Collection',
  description: 'Browse our revolutionary flip-flop gum collection. 100% recycled. 0% guilt.',
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface ParsedProduct {
  id: string;
  slug: string;
  title: string;
  subtitle: string | null;
  description: string;
  images: string[];
  flavors: string[];
  price: number;
  active: boolean;
}

export default async function ShopPage() {
  let parsedProducts: ParsedProduct[] = [];
  
  try {
    const products = await db.product.findMany({
      where: { active: true },
    });
    
    parsedProducts = products.map((p) => ({
      ...p,
      images: JSON.parse(p.images) as string[],
      flavors: JSON.parse(p.flavors) as string[],
    }));
  } catch (error) {
    console.error('Failed to fetch products:', error);
    // Return empty array if database fails
  }
  
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Shop <span className="text-accent glow-accent">ChewSole</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The pre-launch collection. Be among the first to reserve your ChewSole experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {parsedProducts.map((product) => (
            <ProductCard
              key={product.id}
              slug={product.slug}
              title={product.title}
              subtitle={product.subtitle || undefined}
              image={product.images[0]}
              price={product.price}
            />
          ))}
        </div>
        
        {parsedProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              No products available at the moment. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
