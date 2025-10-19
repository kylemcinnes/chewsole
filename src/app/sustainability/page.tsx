import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, Globe, Recycle, Package } from 'lucide-react';

export const metadata = {
  title: 'Sustainability - ChewSole™',
  description: 'Our commitment to the planet. 100% recycled. 0% guilt.',
};

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
            100% Recycled Materials
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-accent glow-accent">Sustainability</span> is Our Sole Purpose
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Every piece of ChewSole represents our commitment to a cleaner, greener planet.
          </p>
        </div>
        
        {/* Impact Stats */}
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          <Card className="p-6 text-center">
            <div className="text-4xl font-bold text-accent mb-2">1M+</div>
            <p className="text-sm text-muted-foreground">Flip-flops recycled annually</p>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="text-4xl font-bold text-accent mb-2">50+</div>
            <p className="text-sm text-muted-foreground">Beach cleanup partners</p>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="text-4xl font-bold text-accent mb-2">100%</div>
            <p className="text-sm text-muted-foreground">Recyclable packaging</p>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="text-4xl font-bold text-accent mb-2">0%</div>
            <p className="text-sm text-muted-foreground">Guilt per chew</p>
          </Card>
        </div>
        
        {/* Our Commitments */}
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Commitments</h2>
          
          <Card className="p-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                  <Recycle className="h-7 w-7 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Ocean Cleanup Initiative</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We actively partner with organizations dedicated to removing plastic waste from oceans and beaches. 
                  For every piece of ChewSole sold, we commit to recovering additional flip-flops from coastal areas, 
                  creating a positive cycle of cleanup and reuse.
                </p>
              </div>
            </div>
          </Card>
          
          <Card className="p-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                  <Package className="h-7 w-7 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Sustainable Packaging</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All ChewSole packaging is made from 100% recyclable materials, printed with soy-based inks, 
                  and designed to minimize waste. Our boxes are biodegradable, and our wrappers are compostable—
                  because sustainability shouldn&apos;t stop at the product.
                </p>
              </div>
            </div>
          </Card>
          
          <Card className="p-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                  <Globe className="h-7 w-7 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Carbon-Neutral Operations</h3>
                <p className="text-muted-foreground leading-relaxed">
                  From manufacturing in China to global distribution, we offset 100% of our carbon footprint 
                  through verified reforestation projects and renewable energy investments. 
                  Our goal: net-zero emissions by 2025.
                </p>
              </div>
            </div>
          </Card>
          
          <Card className="p-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                  <Leaf className="h-7 w-7 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Trace Your Flip-Flop</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every ChewSole pack includes a unique tracking code that tells you exactly where your flip-flop 
                  was recovered—beach location, recovery date, and the cleanup partner involved. 
                  Transparency is key to trust, and we&apos;re committed to both.
                </p>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Disclaimer */}
        <div className="max-w-3xl mx-auto mt-16 p-8 bg-card border border-border rounded-lg">
          <p className="text-sm text-muted-foreground text-center leading-relaxed">
            <strong className="text-foreground">Disclaimer:</strong> ChewSole is a satirical brand concept created for 
            educational and entertainment purposes. No actual flip-flop gum is manufactured or sold. 
            All sustainability claims, statistics, and initiatives described here are fictional and part of a creative exploration 
            of environmental messaging, brand design, and e-commerce user experience.
          </p>
        </div>
      </div>
    </div>
  );
}

