import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-tighter inline-block mb-4">
              <span className="text-accent glow-accent">Chew</span>
              <span className="text-foreground">Sole</span>
              <span className="text-xs align-super text-accent">™</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Save the planet. Chew flip-flops.
            </p>
          </div>
          
          {/* Shop */}
          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/product/chewsole" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  ChewSole Gum
                </Link>
              </li>
            </ul>
          </div>
          
          {/* About */}
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/story" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ChewSole™. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground text-center md:text-right max-w-md">
            Satire project. No real sales. Pre-launch lead capture only.
          </p>
        </div>
      </div>
    </footer>
  );
}

