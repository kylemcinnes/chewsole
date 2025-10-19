import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Recycle, Leaf, Heart } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      
      {/* Featured Product */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              One Product. <span className="text-accent">Infinite Possibilities.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Available in five groundbreaking flavors. Each one crafted from authentic ocean-recovered flip-flops.
            </p>
          </div>
          
          <div className="max-w-sm mx-auto">
            <ProductCard
              slug="chewsole"
              title="ChewSole Flip-Flop Gum"
              subtitle="Pre-Launch Edition"
              image="https://images.unsplash.com/photo-1582212928585-39f9f0a7c540?w=800&q=80"
              price={499}
            />
          </div>
        </div>
      </section>
      
      {/* Sustainability Story */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Recycle className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">100% Recycled</h3>
              <p className="text-muted-foreground">
                Every piece starts as a discarded flip-flop, rescued from beaches and oceans worldwide.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Ocean Cleanup</h3>
              <p className="text-muted-foreground">
                Supporting global initiatives to remove plastic waste from our oceans, one flip-flop at a time.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Planet First</h3>
              <p className="text-muted-foreground">
                Committed to sustainability, innovation, and making eco-conscious choices taste incredible.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/sustainability">
              <Button size="lg" variant="outline" className="border-accent/30 hover:bg-accent/10">
                Learn About Our Impact
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent/20 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-accent glow-accent">chew the future?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the pre-launch list. Be the first to experience the world&apos;s most revolutionary gum.
          </p>
          <Link href="/shop">
            <Button size="lg" className="bg-accent hover:bg-accent-dark text-accent-foreground font-semibold px-12">
              Shop Now
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
