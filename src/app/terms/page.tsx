export const metadata = {
  title: 'Terms of Service - ChewSole™',
  description: 'Terms and conditions for using the ChewSole website.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-bold mb-6">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="prose prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-3">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using the ChewSole™ website, you acknowledge and agree that this is a 
              satirical brand concept created for educational, entertainment, and portfolio purposes. 
              No actual products are sold, and no binding contracts are formed.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-3">2. Nature of the Site</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              ChewSole™ is a parody/satire project:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>No flip-flop gum exists or is manufactured</li>
              <li>No products will be shipped or delivered</li>
              <li>No payments are processed or collected</li>
              <li>All product claims are fictional and satirical in nature</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-3">3. Pre-Launch Lead Capture</h2>
            <p className="text-muted-foreground leading-relaxed">
              The &quot;checkout&quot; process is a demonstration of lead capture functionality. 
              Submitting the form does not create any obligation, financial or otherwise. 
              Your submission is stored solely for demonstration purposes.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-3">4. No Warranties</h2>
            <p className="text-muted-foreground leading-relaxed">
              This website is provided &quot;as is&quot; without warranties of any kind. 
              We make no claims about the accuracy, completeness, or suitability of any content presented. 
              All sustainability claims, statistics, and brand messaging are fictional.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-3">5. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              ChewSole™ is an original satirical concept. Any resemblance to existing brands, 
              particularly major chewing gum manufacturers, is intentional as part of the parody but does not 
              infringe on trademarks. This project is non-commercial and educational.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-3">6. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              The creators of ChewSole™ are not liable for any misunderstanding regarding the satirical nature 
              of this project. By using this site, you acknowledge it is a creative concept and not a real business.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-3">7. User Conduct</h2>
            <p className="text-muted-foreground leading-relaxed">
              Users agree not to misrepresent this site as a real product offering or use submitted data 
              for any malicious purposes.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-3">8. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to update these terms at any time. Continued use of the site after changes 
              constitutes acceptance of the new terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

