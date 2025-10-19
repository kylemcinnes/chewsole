'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

interface ProductCardProps {
  slug: string;
  title: string;
  subtitle?: string;
  image: string;
  price: number;
}

export function ProductCard({ slug, title, subtitle, image, price }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden border-border hover:border-accent/50 transition-all">
        <div className="relative h-64 bg-card overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4">
            <Badge className="bg-accent text-accent-foreground">Pre-Launch</Badge>
          </div>
        </div>
        
        <CardContent className="p-6">
          <h3 className="font-bold text-xl mb-1">{title}</h3>
          {subtitle && (
            <p className="text-sm text-muted-foreground mb-3">{subtitle}</p>
          )}
          <p className="text-2xl font-bold text-accent">
            ${(price / 100).toFixed(2)}
          </p>
        </CardContent>
        
        <CardFooter className="p-6 pt-0">
          <Link href={`/product/${slug}`} className="w-full">
            <Button className="w-full bg-accent hover:bg-accent-dark text-accent-foreground">
              View Details
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

