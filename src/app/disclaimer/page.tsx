export const metadata = {
  title: 'Disclaimer - ChewSole™',
  description: 'Important information about the ChewSole satirical project.',
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-bold mb-6">
          <span className="text-accent">Important</span> Disclaimer
        </h1>
        
        <div className="bg-accent/10 border-2 border-accent/30 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">⚠️ This is a Satirical Project</h2>
          <p className="text-lg leading-relaxed">
            ChewSole™ is a <strong>satirical brand concept</strong> created for educational, 
            entertainment, and creative portfolio purposes. <strong>ChewSole gum is not a real, 
            consumable product.</strong> No actual flip-flop gum is manufactured, sold, or distributed.
          </p>
        </div>
        
        <div className="prose prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-3">No Actual Products</h2>
            <p className="text-muted-foreground leading-relaxed">
              ChewSole flip-flop gum does not exist as a consumable product. All product descriptions, 
              ingredients, sustainability claims, and flavor profiles are fictional and created as part 
              of a satirical brand exploration.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-3">No Sales or Fulfillment</h2>
            <p className="text-muted-foreground leading-relaxed">
              This website does not process payments or fulfill orders. The &quot;checkout&quot; process 
              is a lead capture demonstration only. Submissions store contact information and preferences 
              as expressions of interest for demonstration purposes—no products will be shipped.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-3">Satirical Content</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              All content on this site, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Brand messaging and slogans</li>
              <li>Sustainability claims and statistics</li>
              <li>Manufacturing processes and partnerships</li>
              <li>Ocean cleanup initiatives</li>
              <li>Carbon-neutral operations</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              ...are <strong>fictional</strong> and created as part of the satirical brand narrative.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-3">Health and Safety</h2>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-accent">DO NOT attempt to create or consume any product resembling ChewSole.</strong> 
              Flip-flops and rubber materials are not safe for consumption. This project is purely conceptual and 
              should not inspire any attempt to create an actual product.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-3">Educational Purpose</h2>
            <p className="text-muted-foreground leading-relaxed">
              This project was created to demonstrate:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-3">
              <li>Full-stack web development skills (Next.js, TypeScript, Prisma, etc.)</li>
              <li>Modern e-commerce UX patterns and lead capture systems</li>
              <li>Brand design, motion design, and satirical storytelling</li>
              <li>Responsive design and accessibility best practices</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-3">No Trademark Infringement</h2>
            <p className="text-muted-foreground leading-relaxed">
              While ChewSole draws inspiration from existing gum brands for satirical purposes, 
              it is an original concept. Any resemblance to existing products or brands is intentional 
              as part of the parody but does not constitute trademark infringement. This is a non-commercial, 
              educational project protected under fair use and parody principles.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-3">Data Collection</h2>
            <p className="text-muted-foreground leading-relaxed">
              Any information submitted through forms on this site is stored locally for demonstration purposes only. 
              No data is sold, shared with third parties, or used for actual marketing. 
              See our <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a> for details.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-3">Questions?</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about the nature of this project or wish to request data deletion, 
              please contact the site administrator. Remember: this is satire, art, and education—not a real business.
            </p>
          </section>
        </div>
        
        <div className="mt-12 p-6 bg-card border border-accent/20 rounded-lg text-center">
          <p className="text-sm text-muted-foreground">
            By using this website, you acknowledge that ChewSole™ is a satirical project and not a real product or business.
          </p>
        </div>
      </div>
    </div>
  );
}

