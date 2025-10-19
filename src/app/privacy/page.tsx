export const metadata = {
  title: 'Privacy Policy - ChewSole™',
  description: 'How we handle your data.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="prose prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-3">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              ChewSole™ is a satirical brand concept created for educational and entertainment purposes. 
              This privacy policy outlines how we handle information collected through this website.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-3">2. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              When you submit the pre-launch checkout form, we collect:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Your name and email address</li>
              <li>Shipping address (street, city, region, postal code, country)</li>
              <li>Product preferences (flavor choices, quantities)</li>
              <li>Optional notes you provide</li>
              <li>Consent acknowledgment</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-3">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Information collected is used solely for:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Demonstrating a pre-launch lead capture system</li>
              <li>Educational purposes related to web development and UX design</li>
              <li>No marketing communications will be sent (this is a concept site only)</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-3">4. Data Storage</h2>
            <p className="text-muted-foreground leading-relaxed">
              All data is stored locally in a SQLite database file. The data is not shared with third parties, 
              transmitted externally, or used for any commercial purposes. This is purely a demonstration project.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-3">5. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Since this is a satirical concept, you have the right to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Request deletion of any data you submit</li>
              <li>Access any information we&apos;ve stored about you</li>
              <li>Opt out of any future communications (none will be sent)</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-3">6. No Actual Sales</h2>
            <p className="text-muted-foreground leading-relaxed">
              ChewSole does not sell actual products. No payments are collected, and no orders are fulfilled. 
              This is a satirical demonstration website only.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-3">7. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about this privacy policy or data deletion requests, 
              please contact the site administrator.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

