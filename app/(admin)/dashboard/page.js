"use client";

import React, { useEffect, useState } from 'react';
import { Package, MessageSquare, Users, LayoutGrid } from 'lucide-react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';

export default function Dashboard() {
  const [stats, setStats] = useState([
    { label: "Total Products", value: "-", icon: Package, link: "/admin/products" },
    { label: "Categories", value: "-", icon: LayoutGrid, link: "/admin/categories" },
    { label: "Users", value: "-", icon: Users, link: "/admin/users" },
    { label: "Messages", value: "-", icon: MessageSquare, link: "/admin/messages" },
  ]);

  const [chartData, setChartData] = useState([]);
  const supabase = createClient();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [productsRes, categoriesRes, messagesRes, usersRes] = await Promise.all([
          supabase.from('products').select('*', { count: 'exact', head: true }),
          supabase.from('categories').select('*', { count: 'exact', head: true }),
          supabase.from('messages').select('*', { count: 'exact', head: true }),
          supabase.auth.admin.listUsers(), // Note: This might fail if not admin key, fallback to 1
        ]);

        setStats([
          { label: "Total Products", value: productsRes.count ?? 0, icon: Package, link: "/admin/products" },
          { label: "Categories", value: categoriesRes.count ?? 0, icon: LayoutGrid, link: "/admin/categories" },
          { label: "Users", value: usersRes.data?.users?.length ?? 1, icon: Users, link: "/admin/users" },
          { label: "Messages", value: messagesRes.count ?? 0, icon: MessageSquare, link: "/admin/messages" },
        ]);

        setChartData([]);

      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };
    fetchStats();
  }, [supabase]);

  return (
    <div className="p-8 max-w-7xl mx-auto animate-fade-in pb-20">
      <header className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
           <div>
               <h1 className="text-3xl font-medium tracking-tight">Dashboard</h1>
               <p className="text-muted-foreground mt-1">Overview of your store performance.</p>
           </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          const CardContent = (
            <>
               <div className="flex items-center justify-between mb-4">
                 <span className="text-muted-foreground text-sm font-medium">{stat.label}</span>
                 <Icon size={20} className="text-primary/70" />
               </div>
               <div className="text-3xl font-medium">{stat.value}</div>
            </>
          );

          if (stat.link) {
            return (
              <Link key={idx} href={stat.link} className="bg-background p-6 rounded-2xl border border-border shadow-sm block hover:border-primary/50 transition-colors">
                {CardContent}
              </Link>
            );
          }
          return <div key={idx} className="bg-background p-6 rounded-2xl border border-border shadow-sm">{CardContent}</div>;
        })}
      </div>

      <div className="mt-12 bg-background p-8 rounded-2xl border border-border shadow-sm">
         <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-medium">Site Activity (Last 7 Days)</h2>
            <div className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">Real-time Visits</div>
         </div>
         
         <div className="h-[300px] w-full flex items-end justify-between gap-2 px-4 border-b border-border pb-4">
            {chartData.length === 0 && (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    Analytics data will appear here.
                </div>
            )}
         </div>
      </div>
    </div>
  );
}
