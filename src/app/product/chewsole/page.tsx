'use client';

import { useEffect, useState } from 'react';
import { FlavorCarousel } from '@/components/FlavorCarousel';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCartStore } from '@/lib/store';
import { useRouter } from 'next/navigation';
import { ShoppingCart, Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  images: string[];
  flavors: string[];
  price: number;
}

// Fallback product data - defined outside component to ensure it's always available
const fallbackProduct: Product = {
  id: 'fallback-1',
  slug: 'chewsole',
  title: 'ChewSole Flip-Flop Gum',
  subtitle: 'Pre-Launch Edition',
  description: "The world's first gum made from 100% recycled flip-flops. Each piece is crafted from ocean-recovered rubber, transformed into a revolutionary chewing experience. Tired of gum that loses its chew? Not Flip-Flop Gum. From beach to chew.",
  images: [
    '/images/product-1.svg',
    '/images/product-2.svg',
    '/images/product-3.svg',
  ],
  flavors: ['Ocean Mint', 'Bubble Reef', 'Lemon Tread', 'Tropical Toe', 'Midnight Asphalt'],
  price: 499,
};

export default function ProductPage() {
  // Initialize with fallback product immediately to prevent undefined errors
  const [product, setProduct] = useState<Product>(fallbackProduct);
  const [selectedFlavor, setSelectedFlavor] = useState(fallbackProduct.flavors[0]);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const [mounted, setMounted] = useState(false);
  
  const addItem = useCartStore((state) => state.addItem);
  const router = useRouter();
  
  useEffect(() => {
    setMounted(true);
    
    // Try to fetch real product data
    fetch('/api/products/chewsole')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Product not found');
        }
        return res.json();
      })
      .then((data) => {
        if (data && data.flavors && Array.isArray(data.flavors) && data.flavors.length > 0 && data.images && Array.isArray(data.images)) {
          setProduct(data);
          setSelectedFlavor(data.flavors[0]);
        }
        // If data is invalid, keep using fallback (already set in useState)
      })
      .catch((error) => {
        console.error('Failed to fetch product, using fallback:', error);
        // Fallback is already set, no action needed
      });
  }, []);
  
  const handleAddToCart = () => {
    if (!product) return;
    
    addItem({
      sku: product.slug,
      title: product.title,
      flavor: selectedFlavor,
      qty,
      price: product.price,
      image: product.images[0],
    });
    
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };
  
  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-accent text-lg">Loading...</div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Product Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
          {/* Images */}
          <div>
            <div className="relative h-[500px] rounded-lg overflow-hidden mb-4 bg-card">
              {product.images && product.images.length > 0 && (
                <img
                  src={product.images[currentImageIdx] || product.images[0]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute top-4 right-4">
                <Badge className="bg-accent text-accent-foreground">Pre-Launch</Badge>
              </div>
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="flex gap-2">
              {product.images && Array.isArray(product.images) && product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIdx(idx)}
                  className={`relative h-20 w-20 rounded-md overflow-hidden border-2 transition-all ${
                    idx === currentImageIdx ? 'border-accent' : 'border-border'
                  }`}
                >
                  <img src={img} alt={`${product.title} ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
          
          {/* Details */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{product.title}</h1>
            {product.subtitle && (
              <p className="text-xl text-muted-foreground mb-4">{product.subtitle}</p>
            )}
            
            <div className="text-4xl font-bold text-accent mb-6">
              ${(product.price / 100).toFixed(2)}
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {product.description}
            </p>
            
            {/* Flavor Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Select Flavor</h3>
              {product.flavors && Array.isArray(product.flavors) && product.flavors.length > 0 ? (
                <FlavorCarousel
                  flavors={product.flavors}
                  selectedFlavor={selectedFlavor}
                  onSelectFlavor={setSelectedFlavor}
                />
              ) : (
                <p className="text-muted-foreground">Loading flavors...</p>
              )}
            </div>
            
            {/* Quantity */}
            <div className="mb-8">
              <label className="text-sm font-semibold mb-2 block">Quantity</label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQty(Math.max(1, qty - 1))}
                >
                  -
                </Button>
                <span className="text-xl font-semibold w-12 text-center">{qty}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQty(Math.min(10, qty + 1))}
                >
                  +
                </Button>
              </div>
            </div>
            
            {/* Add to Cart */}
            <div className="flex gap-4">
              <Button
                size="lg"
                onClick={handleAddToCart}
                className="flex-1 bg-accent hover:bg-accent-dark text-accent-foreground font-semibold"
              >
                {added ? (
                  <>
                    <Check className="mr-2 h-5 w-5" />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </>
                )}
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  handleAddToCart();
                  router.push('/cart');
                }}
                className="border-accent/30 hover:bg-accent/10"
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
        
        {/* Product Features */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Why ChewSole?</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-card p-6 rounded-lg border border-border"
            >
              <h3 className="text-xl font-bold mb-2">Tired of gum that loses its chew?</h3>
              <p className="text-muted-foreground">
                Not Flip-Flop Gum. Our unique rubber composition provides an unmatched, long-lasting chew.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-card p-6 rounded-lg border border-border"
            >
              <h3 className="text-xl font-bold mb-2">From beach to chew</h3>
              <p className="text-muted-foreground">
                Each piece begins its journey as ocean waste, transformed into a revolutionary chewing experience.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-card p-6 rounded-lg border border-border"
            >
              <h3 className="text-xl font-bold mb-2">Made in China from recycled flip-flops</h3>
              <p className="text-muted-foreground">
                Partnering with global recycling facilities to turn waste into wonder.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

