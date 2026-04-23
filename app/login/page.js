"use client";

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { Shield } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const router = useRouter();

  const handleAuth = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { error: signInError } = await signIn({ email, password });
      
      if (signInError) {
        setError(signInError.message || "Invalid login credentials");
      } else {
        router.push('/admin/dashboard');
      }
    } catch (err) {
      console.error(err);
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/30">
      <div className="bg-background p-8 rounded-2xl border border-border w-full max-w-md space-y-8 animate-fade-in-up">
        <div className="text-center space-y-4">
           <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto text-primary">
             <Shield size={32} />
           </div>
           <h1 className="text-2xl font-medium tracking-tight">
             Admin Portal
           </h1>
        </div>
        
        {error && <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg text-center">{error}</div>}

        <form onSubmit={handleAuth} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Email</label>
            <input 
              type="email" 
              className="w-full p-3 rounded-lg border border-input bg-transparent focus:ring-1 focus:ring-primary outline-none transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              required
            />
          </div>
          <div className="space-y-2">
             <label className="text-sm font-medium text-muted-foreground">Password</label>
             <input 
               type="password" 
               className="w-full p-3 rounded-lg border border-input bg-transparent focus:ring-1 focus:ring-primary outline-none transition-all"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               placeholder="••••••••"
               required
             />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
