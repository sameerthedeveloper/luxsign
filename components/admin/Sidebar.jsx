"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LogOut, LayoutDashboard, Package, ArrowLeft, Settings, LayoutGrid, Users, MessageSquare, Image, Search } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import clsx from 'clsx';
import { Logo } from '@/components/ui/Logo';

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
    router.push('/admin/login');
  };

  const navItems = [
    { label: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
    { label: "Products", path: "/admin/products", icon: Package },
    { label: "Categories", path: "/admin/categories", icon: LayoutGrid },
    { label: "Gallery", path: "/admin/gallery", icon: Image },
    { label: "Users", path: "/admin/users", icon: Users },
    { label: "Messages", path: "/admin/messages", icon: MessageSquare },
    { label: "SEO", path: "/admin/seo", icon: Search },
    { label: "Site Control", path: "/admin/site-control", icon: Settings },
  ];

  return (
    <aside className="w-64 bg-background border-r border-border fixed inset-y-0 left-0 hidden md:flex flex-col">
      <div className="p-6 border-b border-border flex items-center justify-center">
         <Logo size="md" />
      </div>
      
      <nav className="flex-1 p-6 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;
          
          return (
            <Link 
              key={item.path} 
              href={item.path}
              className={clsx(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive 
                  ? "bg-primary text-primary-foreground shadow-sm" 
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-6 border-t border-border space-y-2">
         <Link href="/" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary rounded-lg transition-colors">
           <ArrowLeft size={18} />
           Back to Site
         </Link>
         <button 
           onClick={handleLogout}
           className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-red-500 hover:bg-red-50 rounded-lg transition-colors"
         >
           <LogOut size={18} />
           Logout
         </button>
      </div>
    </aside>
  );
};

export default Sidebar;
