import { Card } from '@/components/ui/card';
import { Waves, Recycle, PackageCheck } from 'lucide-react';

export const metadata = {
  title: 'Our Story - ChewSole™',
  description: 'From beach to chew. Learn how we transform ocean waste into revolutionary gum.',
};

export default function StoryPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            From <span className="text-accent glow-accent">Beach to Chew</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            The journey of a discarded flip-flop to a revolutionary chewing experience.
          </p>
        </div>
        
        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-12">
          <Card className="p-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Waves className="h-8 w-8 text-accent" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">Step 1: Ocean Recovery</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Every year, millions of flip-flops wash up on beaches worldwide, polluting our oceans and harming marine life. 
                  We partner with coastal cleanup initiatives across the globe to recover these discarded flip-flops, 
                  giving them a second life and removing harmful plastic from our ecosystems.
                </p>
              </div>
            </div>
          </Card>
          
          <Card className="p-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Recycle className="h-8 w-8 text-accent" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">Step 2: Transformation</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Collected flip-flops are transported to our state-of-the-art recycling facilities in China. 
                  Through a proprietary process, the rubber is cleaned, processed, and transformed into the base material 
                  for ChewSole gum. Made in China from recycled flip-flops—sustainability meets innovation.
                </p>
              </div>
            </div>
          </Card>
          
          <Card className="p-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <PackageCheck className="h-8 w-8 text-accent" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">Step 3: Your Chew</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The final product is infused with bold flavors, packaged in eco-friendly materials, 
                  and delivered to you. Each piece of ChewSole represents a flip-flop saved from the ocean, 
                  a step toward a cleaner planet, and a commitment to sustainable innovation. 
                  Tired of gum that loses its chew? Not Flip-Flop Gum.
                </p>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Mission Statement */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            ChewSole exists to prove that sustainability can be bold, innovative, and yes—even chewable. 
            We&apos;re reimagining what&apos;s possible when we refuse to see waste as the end of the story. 
            Every chew is a statement: the planet&apos;s first gum with real sole.
          </p>
          <p className="text-sm text-muted-foreground italic">
            * Disclaimer: ChewSole is a satirical brand concept. No actual flip-flop gum is produced or sold. 
            This is a creative exploration of sustainability messaging and e-commerce design.
          </p>
        </div>
      </div>
    </div>
  );
}

