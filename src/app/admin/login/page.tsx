'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Lock } from 'lucide-react';

export default function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // Verify password by attempting to fetch leads
      const response = await fetch('/api/admin/leads', {
        headers: {
          'Authorization': `Bearer ${password}`,
        },
      });
      
      if (response.ok) {
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('admin_password', password);
        }
        router.push('/admin');
      } else {
        setError('Invalid password');
      }
    } catch {
      setError('Authentication failed');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center">
            <Lock className="h-8 w-8 text-accent" />
          </div>
          <CardTitle className="text-2xl">Admin Login</CardTitle>
          <CardDescription>
            Enter the admin password to access the dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                required
                autoFocus
              />
            </div>
            
            {error && (
              <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-md">
                <p className="text-destructive text-sm">{error}</p>
              </div>
            )}
            
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-accent hover:bg-accent-dark text-accent-foreground"
            >
              {loading ? 'Authenticating...' : 'Login'}
            </Button>
            
            <p className="text-xs text-muted-foreground text-center">
              For demo purposes, check the .env file for the admin password
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

