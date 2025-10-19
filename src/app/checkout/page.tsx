'use client';

import { useState, useEffect } from 'react';
import { useCartStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';
import { Loader2, Check } from 'lucide-react';

export default function CheckoutPage() {
  const { items, getTotal, clearCart } = useCartStore();
  const router = useRouter();
  
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address1: '',
    address2: '',
    city: '',
    region: '',
    postalCode: '',
    country: '',
    consent: false,
    notes: '',
  });
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          items: items.map((item) => ({
            sku: item.sku,
            flavor: item.flavor,
            qty: item.qty,
            price: item.price,
          })),
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit');
      }
      
      setSuccess(true);
      clearCart();
      
      setTimeout(() => {
        router.push('/');
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };
  
  const total = getTotal();
  
  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-accent">Loading...</div>
      </div>
    );
  }
  
  if (items.length === 0 && !success) {
    router.push('/cart');
    return null;
  }
  
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Pre-Launch <span className="text-accent">Checkout</span>
          </h1>
          <p className="text-muted-foreground mb-8">
            No payment required. We&apos;re capturing your interest for when ChewSole launches.
          </p>
          
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold">Contact Information</h2>
                
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              {/* Shipping Address */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold">Shipping Address</h2>
                
                <div>
                  <Label htmlFor="address1">Address Line 1 *</Label>
                  <Input
                    id="address1"
                    required
                    value={formData.address1}
                    onChange={(e) => setFormData({ ...formData, address1: e.target.value })}
                    placeholder="123 Main St"
                  />
                </div>
                
                <div>
                  <Label htmlFor="address2">Address Line 2</Label>
                  <Input
                    id="address2"
                    value={formData.address2}
                    onChange={(e) => setFormData({ ...formData, address2: e.target.value })}
                    placeholder="Apt 4B"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="New York"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="region">State/Region *</Label>
                    <Input
                      id="region"
                      required
                      value={formData.region}
                      onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                      placeholder="NY"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="postalCode">Postal Code *</Label>
                    <Input
                      id="postalCode"
                      required
                      value={formData.postalCode}
                      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                      placeholder="10001"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="country">Country *</Label>
                    <Input
                      id="country"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="USA"
                    />
                  </div>
                </div>
              </div>
              
              {/* Notes */}
              <div>
                <Label htmlFor="notes">Additional Notes (Optional)</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Any special requests or comments..."
                  rows={3}
                />
              </div>
              
              {/* Consent */}
              <div className="flex items-start gap-2">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                />
                <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
                  I consent to receive marketing communications and understand this is a pre-launch interest capture. 
                  No payment will be collected. I can opt out at any time.
                </Label>
              </div>
              
              {error && (
                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-md">
                  <p className="text-destructive text-sm">{error}</p>
                </div>
              )}
              
              {/* Order Summary */}
              <div className="border-t border-border pt-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Estimated Total</span>
                  <span className="text-2xl font-bold text-accent">${(total / 100).toFixed(2)}</span>
                </div>
                
                <Button
                  type="submit"
                  disabled={loading || !formData.consent}
                  className="w-full bg-accent hover:bg-accent-dark text-accent-foreground font-semibold"
                  size="lg"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    'Join Pre-Launch List'
                  )}
                </Button>
                
                <p className="text-xs text-muted-foreground text-center mt-4">
                  By submitting, you acknowledge this is a satirical pre-launch concept and no actual purchase will be made.
                </p>
              </div>
            </form>
          </Card>
        </div>
      </div>
      
      {/* Success Modal */}
      <Dialog open={success} onOpenChange={setSuccess}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center">
              <Check className="h-8 w-8 text-accent" />
            </div>
            <DialogTitle className="text-center text-2xl">You&apos;re on the List!</DialogTitle>
            <DialogDescription className="text-center text-base">
              We saved your order preferences. When ChewSole goes live, you&apos;ll be first to know.
            </DialogDescription>
          </DialogHeader>
          <div className="text-center pt-4">
            <p className="text-sm text-muted-foreground">
              Redirecting to home page...
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

