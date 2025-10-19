import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    const slogans = await db.slogan.findMany({
      where: { active: true },
      orderBy: { weight: 'desc' },
    });
    
    return NextResponse.json(slogans);
  } catch (error) {
    console.error('Slogans fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch slogans' },
      { status: 500 }
    );
  }
}

