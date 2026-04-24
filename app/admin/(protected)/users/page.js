"use client";

import React from 'react';
import { User, Shield, Key, Mail, Clock, ExternalLink } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export default function UsersPage() {
  const { user } = useAuth();

  return (
    <div className="p-8 max-w-7xl mx-auto animate-fade-in pb-20">
      <header className="mb-10">
        <h1 className="text-3xl font-medium tracking-tight">User Management</h1>
        <p className="text-muted-foreground mt-1">Manage administrative access and permissions.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Current User Profile */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-background rounded-2xl border border-border shadow-sm p-8">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                <User size={40} />
              </div>
              <div>
                <h2 className="text-2xl font-medium">{user?.user_metadata?.full_name || 'Administrator'}</h2>
                <p className="text-muted-foreground">{user?.email}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="px-2 py-0.5 bg-green-500/10 text-green-500 text-[10px] font-bold uppercase tracking-wider rounded-full border border-green-500/20">
                    Active Session
                  </span>
                  <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider rounded-full border border-primary/20">
                    Admin Role
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-border">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  <Mail size={12} />
                  Email Address
                </div>
                <p className="font-medium">{user?.email}</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  <Key size={12} />
                  User ID
                </div>
                <p className="font-medium text-xs font-mono truncate">{user?.id}</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  <Clock size={12} />
                  Last Login
                </div>
                <p className="font-medium">{user?.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleString() : 'N/A'}</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  <Shield size={12} />
                  Role
                </div>
                <p className="font-medium">Super Admin</p>
              </div>
            </div>
          </div>

          <div className="bg-secondary/20 rounded-2xl border border-dashed border-border p-12 text-center space-y-4">
             <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center mx-auto text-muted-foreground border border-border">
               <Shield size={32} />
             </div>
             <div className="max-w-md mx-auto">
               <h3 className="text-lg font-medium">Advanced User Management</h3>
               <p className="text-sm text-muted-foreground mt-2">
                 To add new administrators, manage roles, or reset passwords, please use the Supabase Authentication dashboard.
               </p>
               <a 
                 href="https://supabase.com/dashboard/project/_/auth/users" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 mt-6 px-6 py-2.5 bg-background border border-border rounded-full text-sm font-medium hover:bg-secondary transition-colors"
               >
                 Go to Supabase Auth
                 <ExternalLink size={14} />
               </a>
             </div>
          </div>
        </div>

        {/* Security Summary Sidebar */}
        <div className="space-y-6">
           <div className="bg-background rounded-2xl border border-border shadow-sm p-6">
             <h3 className="font-medium mb-4">Security Overview</h3>
             <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-xl">
                  <div className="text-sm">MFA Status</div>
                  <div className="text-xs font-bold text-red-400">Disabled</div>
                </div>
                <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-xl">
                  <div className="text-sm">Password Age</div>
                  <div className="text-xs font-bold text-green-500">Secure</div>
                </div>
                <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-xl">
                  <div className="text-sm">Access Logs</div>
                  <div className="text-xs font-bold text-primary">View logs</div>
                </div>
             </div>
           </div>
           
           <div className="bg-primary/5 rounded-2xl border border-primary/10 p-6">
              <h3 className="font-medium text-primary mb-2">Admin Notice</h3>
              <p className="text-xs text-primary/70 leading-relaxed">
                Changes to administrative permissions are sensitive. Always verify user identities before granting dashboard access.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
}
