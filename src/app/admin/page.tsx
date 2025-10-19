'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Lead {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  city: string;
  region: string;
  country: string;
  items: string;
}

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  
  useEffect(() => {
    // Only access sessionStorage in browser
    if (typeof window === 'undefined') return;
    
    const password = sessionStorage.getItem('admin_password');
    if (!password) {
      router.push('/admin/login');
      return;
    }
    
    setAuthenticated(true);
    
    const loadLeads = async (pwd: string) => {
      try {
        const response = await fetch('/api/admin/leads', {
          headers: {
            'Authorization': `Bearer ${pwd}`,
          },
        });
        
        if (response.ok) {
          const data = await response.json();
          setLeads(data);
        } else {
          router.push('/admin/login');
        }
      } catch (error) {
        console.error('Failed to fetch leads:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadLeads(password);
  }, [router]);
  
  
  const handleExport = async () => {
    if (typeof window === 'undefined') return;
    const password = sessionStorage.getItem('admin_password');
    if (!password) return;
    
    try {
      const response = await fetch('/api/lead/export', {
        headers: {
          'Authorization': `Bearer ${password}`,
        },
      });
      
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `chewsole-leads-${new Date().toISOString().split('T')[0]}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      } else {
        alert('Failed to export leads');
      }
    } catch (error) {
      console.error('Export error:', error);
      alert('Failed to export leads');
    }
  };
  
  const handleLogout = () => {
    if (typeof window === 'undefined') return;
    sessionStorage.removeItem('admin_password');
    router.push('/admin/login');
  };
  
  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-accent">Authenticating...</div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">
            Admin <span className="text-accent">Dashboard</span>
          </h1>
          
          <div className="flex gap-4">
            <Button onClick={handleExport} className="bg-accent hover:bg-accent-dark text-accent-foreground">
              <Download className="mr-2 h-4 w-4" />
              Export CSV
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">Total Leads</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-accent">{leads.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">This Week</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-accent">
                {leads.filter((l) => {
                  const weekAgo = new Date();
                  weekAgo.setDate(weekAgo.getDate() - 7);
                  return new Date(l.createdAt) > weekAgo;
                }).length}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">Today</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-accent">
                {leads.filter((l) => {
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  return new Date(l.createdAt) >= today;
                }).length}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Leads Table */}
        <Card>
          <CardHeader>
            <CardTitle>Pre-Launch Leads</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8 text-muted-foreground">Loading...</div>
            ) : leads.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">No leads yet</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 text-sm font-semibold">Date</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold">Name</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold">Email</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold">Location</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold">Items</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leads.map((lead) => {
                      let itemsCount = 0;
                      try {
                        const items = JSON.parse(lead.items) as Array<{ qty: number }>;
                        itemsCount = items.reduce((sum, item) => sum + item.qty, 0);
                      } catch {
                        // ignore
                      }
                      
                      return (
                        <tr key={lead.id} className="border-b border-border/50 hover:bg-card/50">
                          <td className="py-3 px-4 text-sm">
                            {new Date(lead.createdAt).toLocaleDateString()}
                          </td>
                          <td className="py-3 px-4 text-sm">{lead.name}</td>
                          <td className="py-3 px-4 text-sm">{lead.email}</td>
                          <td className="py-3 px-4 text-sm">
                            {lead.city}, {lead.region}, {lead.country}
                          </td>
                          <td className="py-3 px-4 text-sm text-accent font-semibold">
                            {itemsCount} item{itemsCount !== 1 ? 's' : ''}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

