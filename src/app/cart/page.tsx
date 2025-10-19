'use client';

import { useCartStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { Trash2, ShoppingBag } from 'lucide-react';

export default function CartPage() {
  const { items, removeItem, updateQty, getTotal } = useCartStore();
  const total = getTotal();
  
  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20">
        <div className="text-center">
          <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8">
            Start adding some revolutionary gum to your cart!
          </p>
          <Link href="/shop">
            <Button size="lg" className="bg-accent hover:bg-accent-dark text-accent-foreground">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Your <span className="text-accent">Cart</span>
        </h1>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={`${item.sku}-${item.flavor}`} className="p-6">
                <div className="flex gap-6">
                  <div className="relative h-24 w-24 flex-shrink-0 rounded-md overflow-hidden">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">Flavor: {item.flavor}</p>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQty(item.sku, item.flavor, item.qty - 1)}
                        >
                          -
                        </Button>
                        <span className="w-8 text-center font-semibold">{item.qty}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQty(item.sku, item.flavor, item.qty + 1)}
                        >
                          +
                        </Button>
                      </div>
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-destructive"
                        onClick={() => removeItem(item.sku, item.flavor)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-bold text-lg">
                      ${((item.price * item.qty) / 100).toFixed(2)}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">${(total / 100).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-semibold text-accent">TBD at launch</span>
                </div>
                <div className="border-t border-border pt-3 mt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Estimated Total</span>
                    <span className="text-accent">${(total / 100).toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <Link href="/checkout">
                <Button className="w-full bg-accent hover:bg-accent-dark text-accent-foreground font-semibold mb-3">
                  Proceed to Pre-Launch Checkout
                </Button>
              </Link>
              
              <Link href="/shop">
                <Button variant="outline" className="w-full">
                  Continue Shopping
                </Button>
              </Link>
              
              <p className="text-xs text-muted-foreground text-center mt-4">
                * No payment required. This is a pre-launch interest capture only.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

