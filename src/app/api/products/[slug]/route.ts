import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

// Fallback product data
const fallbackProducts: Record<string, any> = {
  chewsole: {
    id: 'fallback-chewsole',
    slug: 'chewsole',
    title: 'ChewSole Flip-Flop Gum',
    subtitle: 'Pre-Launch Edition',
    description: "The world's first gum made from 100% recycled flip-flops. Each piece is crafted from ocean-recovered rubber, transformed into a revolutionary chewing experience. Tired of gum that loses its chew? Not Flip-Flop Gum. From beach to chew.",
    images: [
      'https://images.unsplash.com/photo-1582212928585-39f9f0a7c540?w=800&q=80',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80',
      'https://images.unsplash.com/photo-1609973278811-1e958fc0b104?w=800&q=80',
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

