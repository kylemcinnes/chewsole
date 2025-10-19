import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    const products = await db.product.findMany({
      where: { active: true },
    });
    
    // Parse JSON fields
    const parsedProducts = products.map((p) => ({
      ...p,
      images: JSON.parse(p.images),
      flavors: JSON.parse(p.flavors),
    }));
    
    return NextResponse.json(parsedProducts);
  } catch (error) {
    console.error('Products fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

