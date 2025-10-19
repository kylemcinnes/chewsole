import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

// Fallback slogans in case database is unavailable
const fallbackSlogans = [
  { id: 'fb-1', text: 'Save the planet! Chew flip-flops!', active: true, weight: 1 },
  { id: 'fb-2', text: 'From beach to chew.', active: true, weight: 1 },
  { id: 'fb-3', text: "The planet's first gum with real sole.", active: true, weight: 1 },
  { id: 'fb-4', text: 'Tired of gum that loses its chew? Not Flip-Flop Gum.', active: true, weight: 1 },
  { id: 'fb-5', text: 'Made in China from recycled flip-flops.', active: true, weight: 1 },
  { id: 'fb-6', text: 'From China with chew.', active: true, weight: 1 },
  { id: 'fb-7', text: '100% recycled. 0% guilt.', active: true, weight: 1 },
  { id: 'fb-8', text: 'Ocean cleanup, one chew at a time.', active: true, weight: 1 },
];

export async function GET() {
  try {
    const slogans = await db.slogan.findMany({
      where: { active: true },
      orderBy: { weight: 'desc' },
    });
    
    return NextResponse.json(slogans);
  } catch (error) {
    console.error('Slogans fetch error (using fallback):', error);
    // Return fallback slogans instead of error
    return NextResponse.json(fallbackSlogans);
  }
}

