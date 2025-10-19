import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

interface ProductData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  flavors: string[];
  price: number;
  active: boolean;
}

// Fallback product data
const fallbackProducts: Record<string, ProductData> = {
  chewsole: {
    id: 'fallback-chewsole',
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
    active: true,
  },
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    
    const product = await db.product.findUnique({
      where: { slug },
    });
    
    if (!product) {
      // Return fallback instead of 404
      if (fallbackProducts[slug]) {
        return NextResponse.json(fallbackProducts[slug]);
      }
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }
    
    // Parse JSON fields
    const parsedProduct = {
      ...product,
      images: JSON.parse(product.images),
      flavors: JSON.parse(product.flavors),
    };
    
    return NextResponse.json(parsedProduct);
  } catch (error) {
    console.error('Product fetch error (using fallback):', error);
    const { slug } = await params;
    // Return fallback instead of 500 error
    if (fallbackProducts[slug]) {
      return NextResponse.json(fallbackProducts[slug]);
    }
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    );
  }
}

