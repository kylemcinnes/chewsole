import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    // Check admin password
    const authHeader = request.headers.get('authorization');
    const password = authHeader?.replace('Bearer ', '');
    
    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    // Fetch all leads
    const leads = await db.orderLead.findMany({
      orderBy: { createdAt: 'desc' },
    });
    
    // Convert to CSV
    const headers = [
      'ID',
      'Created At',
      'Name',
      'Email',
      'Address 1',
      'Address 2',
      'City',
      'Region',
      'Postal Code',
      'Country',
      'Items',
      'Consent',
      'Notes',
    ];
    
    const csvRows = [headers.join(',')];
    
    for (const lead of leads) {
      const row = [
        lead.id,
        lead.createdAt.toISOString(),
        `"${lead.name}"`,
        lead.email,
        `"${lead.address1}"`,
        `"${lead.address2 || ''}"`,
        lead.city,
        lead.region,
        lead.postalCode,
        lead.country,
        `"${lead.items.replace(/"/g, '""')}"`,
        lead.consent,
        `"${lead.notes || ''}"`,
      ];
      csvRows.push(row.join(','));
    }
    
    const csv = csvRows.join('\n');
    
    return new NextResponse(csv, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="chewsole-leads-${new Date().toISOString().split('T')[0]}.csv"`,
      },
    });
  } catch (error) {
    console.error('Export error:', error);
    return NextResponse.json(
      { error: 'Failed to export leads' },
      { status: 500 }
    );
  }
}

