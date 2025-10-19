import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { checkoutSchema } from '@/lib/validators';
import { rateLimit } from '@/lib/rate-limit';

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    
    // Rate limit: 10 requests per minute per IP
    const { success, remaining } = rateLimit(ip, 10, 60000);
    
    if (!success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }
    
    const body = await request.json();
    
    // Validate with Zod
    const result = checkoutSchema.safeParse(body);
    
    if (!result.success) {
      return NextResponse.json(
        { error: 'Validation failed', issues: result.error.issues },
        { status: 400 }
      );
    }
    
    const data = result.data;
    
    // Store lead in database
    const lead = await db.orderLead.create({
      data: {
        name: data.name,
        email: data.email,
        address1: data.address1,
        address2: data.address2,
        city: data.city,
        region: data.region,
        postalCode: data.postalCode,
        country: data.country,
        items: JSON.stringify(data.items),
        consent: data.consent,
        notes: data.notes,
      },
    });
    
    return NextResponse.json(
      {
        status: 'prelaunch',
        message: "You're on the Pre-Launch List. We saved your order preferences.",
        leadId: lead.id,
      },
      {
        status: 201,
        headers: {
          'X-RateLimit-Remaining': remaining.toString(),
        },
      }
    );
  } catch (error) {
    console.error('Lead creation error:', error);
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    );
  }
}

