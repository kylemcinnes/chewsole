'use client';

import Link from 'next/link';
import { ShoppingCart, Menu } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';

export function Nav() {
  const itemCount = useCartStore((state) => state.getItemCount());
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const links = [
    { href: '/', label: 'Home' },
    { href: '/shop', label: 'Shop' },
    { href: '/story', label: 'Story' },
    { href: '/sustainability', label: 'Sustainability' },
  ];
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            <span className="text-accent glow-accent">Chew</span>
            <span className="text-foreground">Sole</span>
            <span className="text-xs align-super text-accent">™</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          {/* Cart & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {mounted && itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-bold">
                    {itemCount}
                  </span>
                )}
              </Button>
            </Link>
            
            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="flex flex-col gap-6 mt-8">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-muted-foreground hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="border-t border-border pt-4 mt-4">
                    <Link
                      href="/privacy"
                      onClick={() => setIsOpen(false)}
                      className="block text-sm text-muted-foreground hover:text-accent mb-3"
                    >
                      Privacy
                    </Link>
                    <Link
                      href="/terms"
                      onClick={() => setIsOpen(false)}
                      className="block text-sm text-muted-foreground hover:text-accent mb-3"
                    >
                      Terms
                    </Link>
                    <Link
                      href="/disclaimer"
                      onClick={() => setIsOpen(false)}
                      className="block text-sm text-muted-foreground hover:text-accent"
                    >
                      Disclaimer
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

