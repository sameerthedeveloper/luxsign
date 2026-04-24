"use client";

import React, { useEffect, useState } from 'react';
import { Search, Save, Loader2, Link as LinkIcon, Info } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { updateSEO } from '@/admin/actions/seo';

export default function SEOPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(null);
  const [seoData, setSeoData] = useState([]);
  
  const pages = [
    { id: 'home', path: '/', label: 'Home Page' },
    { id: 'products', path: '/products', label: 'Products Listing' },
    { id: 'contact', path: '/contact', label: 'Contact Page' }
  ];

  const supabase = createClient();

  useEffect(() => {
    fetchSEO();
  }, []);

  const fetchSEO = async () => {
    try {
      const { data, error } = await supabase.from('seo').select('*');
      if (error) {
        console.error("Supabase error fetching SEO:", error.message, error.details);
        throw error;
      }
      setSeoData(data || []);
    } catch (error) {
      console.error("Error fetching SEO data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (pageId) => {
    setSaving(pageId);
    const data = seoData.find(s => s.id === pageId) || { title: '', description: '', keywords: '' };
    try {
      const result = await updateSEO(pageId, data);
      if (result.success) {
        alert(`${pageId} SEO updated successfully!`);
      } else {
        alert("Error: " + result.error);
      }
    } finally {
      setSaving(null);
    }
  };

  const handleChange = (pageId, field, value) => {
    setSeoData(prev => {
      const existing = prev.find(s => s.id === pageId);
      if (existing) {
        return prev.map(s => s.id === pageId ? { ...s, [field]: value } : s);
      } else {
        return [...prev, { id: pageId, [field]: value }];
      }
    });
  };

  if (loading) return <div className="p-8 text-center text-muted-foreground">Loading SEO settings...</div>;

  return (
    <div className="p-8 max-w-7xl mx-auto animate-fade-in pb-20">
      <header className="mb-10">
        <h1 className="text-3xl font-medium tracking-tight">SEO Management</h1>
        <p className="text-muted-foreground mt-1">Optimize how your pages appear in search results.</p>
      </header>

      <div className="space-y-8">
        {pages.map((page) => {
          const data = seoData.find(s => s.id === page.id) || { title: '', description: '', keywords: '' };
          
          return (
            <div key={page.id} className="bg-background rounded-2xl border border-border shadow-sm overflow-hidden">
              <div className="p-6 bg-secondary/30 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <LinkIcon size={18} />
                  </div>
                  <div>
                    <h2 className="font-medium">{page.label}</h2>
                    <p className="text-xs text-muted-foreground">{page.path}</p>
                  </div>
                </div>
                <button 
                  onClick={() => handleUpdate(page.id)}
                  disabled={saving === page.id}
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {saving === page.id ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
                  Save Settings
                </button>
              </div>
              
              <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Meta Title</label>
                    <input 
                      className="w-full p-3 rounded-lg border border-input bg-transparent"
                      placeholder="Enter meta title..."
                      value={data.title || ''}
                      onChange={e => handleChange(page.id, 'title', e.target.value)}
                    />
                    <p className="text-[10px] text-muted-foreground">Recommended: 50-60 characters</p>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Meta Keywords</label>
                    <input 
                      className="w-full p-3 rounded-lg border border-input bg-transparent"
                      placeholder="e.g. LED, Displays, Video Walls..."
                      value={data.keywords || ''}
                      onChange={e => handleChange(page.id, 'keywords', e.target.value)}
                    />
                    <p className="text-[10px] text-muted-foreground">Comma-separated values</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Meta Description</label>
                    <textarea 
                      className="w-full p-3 rounded-lg border border-input bg-transparent h-32"
                      placeholder="Enter meta description..."
                      value={data.description || ''}
                      onChange={e => handleChange(page.id, 'description', e.target.value)}
                    />
                    <p className="text-[10px] text-muted-foreground">Recommended: 150-160 characters</p>
                  </div>
                  
                  {/* Google Preview Wrapper */}
                  <div className="mt-4 p-4 rounded-xl border border-dashed border-border bg-secondary/10">
                    <div className="flex items-center gap-2 mb-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      <Info size={10} />
                      Google Search Preview
                    </div>
                    <div className="space-y-1">
                      <div className="text-blue-400 text-lg hover:underline cursor-pointer truncate">
                        {data.title || "Page Title | LuxSign Displays"}
                      </div>
                      <div className="text-green-500 text-xs truncate">
                        https://luxsign.com{page.path}
                      </div>
                      <div className="text-muted-foreground text-xs line-clamp-2">
                        {data.description || "Enter a meta description to see how this page will appear in Google search results."}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
