"use client";

import React, { useEffect, useState } from 'react';
import { Settings, Save, Loader2, Globe, Layout, ShieldCheck } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { updateHero, updateSiteContent } from '@/admin/actions/site_content';

export default function SiteControlPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [hero, setHero] = useState({
    title: '',
    subtitle: '',
    imageUrl: '',
    ctaText: '',
    ctaLink: ''
  });
  const [content, setContent] = useState({
    philosophy: { title: '', text: '' },
    footer: { copyright: '', email: '', phone: '' }
  });

  const supabase = createClient();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: heroData } = await supabase.from('hero').select('*').eq('id', 'main').single();
        if (heroData) {
          setHero({
            title: heroData.title || '',
            subtitle: heroData.subtitle || '',
            imageUrl: heroData.image_url || '',
            ctaText: heroData.cta_text || '',
            ctaLink: heroData.cta_link || ''
          });
        }

        const { data: contentData } = await supabase.from('site_content').select('*');
        if (contentData) {
          const formatted = {};
          contentData.forEach(item => {
            formatted[item.id] = item.content;
          });
          setContent(prev => ({ ...prev, ...formatted }));
        }
      } catch (error) {
        console.error("Error fetching site content:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [supabase]);

  const handleHeroSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const result = await updateHero(hero);
      if (result.success) {
        alert("Hero section updated successfully!");
      } else {
        alert("Error: " + result.error);
      }
    } finally {
      setSaving(false);
    }
  };

  const handleContentSave = async (id) => {
    setSaving(true);
    try {
      const result = await updateSiteContent(id, content[id]);
      if (result.success) {
        alert(`${id} content updated successfully!`);
      } else {
        alert("Error: " + result.error);
      }
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-8 text-center text-muted-foreground">Loading site settings...</div>;

  return (
    <div className="p-8 max-w-7xl mx-auto animate-fade-in pb-20">
      <header className="mb-10">
        <h1 className="text-3xl font-medium tracking-tight">Site Control</h1>
        <p className="text-muted-foreground mt-1">Manage global website content and settings.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Hero Section Control */}
        <div className="bg-background rounded-2xl border border-border shadow-sm p-8 space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              <Globe size={20} />
            </div>
            <h2 className="text-xl font-medium">Hero Section</h2>
          </div>

          <form onSubmit={handleHeroSave} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Main Title</label>
              <input 
                className="w-full p-3 rounded-lg border border-input bg-transparent"
                value={hero.title}
                onChange={e => setHero({...hero, title: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Subtitle</label>
              <textarea 
                className="w-full p-3 rounded-lg border border-input bg-transparent h-24"
                value={hero.subtitle}
                onChange={e => setHero({...hero, subtitle: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">CTA Text</label>
                <input 
                  className="w-full p-3 rounded-lg border border-input bg-transparent"
                  value={hero.ctaText}
                  onChange={e => setHero({...hero, ctaText: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">CTA Link</label>
                <input 
                  className="w-full p-3 rounded-lg border border-input bg-transparent"
                  value={hero.ctaLink}
                  onChange={e => setHero({...hero, ctaLink: e.target.value})}
                />
              </div>
            </div>
            <button 
              type="submit"
              disabled={saving}
              className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium flex items-center justify-center gap-2"
            >
              {saving ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
              Save Changes
            </button>
          </form>
        </div>

        {/* Brand Philosophy Control */}
        <div className="bg-background rounded-2xl border border-border shadow-sm p-8 space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              <ShieldCheck size={20} />
            </div>
            <h2 className="text-xl font-medium">Brand Philosophy</h2>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Philosophy Title</label>
              <input 
                className="w-full p-3 rounded-lg border border-input bg-transparent"
                value={content.philosophy?.title}
                onChange={e => setContent({
                  ...content, 
                  philosophy: { ...content.philosophy, title: e.target.value }
                })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Philosophy Text</label>
              <textarea 
                className="w-full p-3 rounded-lg border border-input bg-transparent h-40"
                value={content.philosophy?.text}
                onChange={e => setContent({
                  ...content, 
                  philosophy: { ...content.philosophy, text: e.target.value }
                })}
              />
            </div>
            <button 
              onClick={() => handleContentSave('philosophy')}
              disabled={saving}
              className="w-full py-3 border border-primary text-primary rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-primary/5 transition-colors"
            >
              {saving ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
              Update Philosophy
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-background rounded-2xl border border-border shadow-sm p-8 space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              <Layout size={20} />
            </div>
            <h2 className="text-xl font-medium">Footer Information</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Copyright Text</label>
              <input 
                className="w-full p-3 rounded-lg border border-input bg-transparent"
                value={content.footer?.copyright}
                onChange={e => setContent({
                  ...content, 
                  footer: { ...content.footer, copyright: e.target.value }
                })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Contact Email</label>
              <input 
                className="w-full p-3 rounded-lg border border-input bg-transparent"
                value={content.footer?.email}
                onChange={e => setContent({
                  ...content, 
                  footer: { ...content.footer, email: e.target.value }
                })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Contact Phone</label>
              <input 
                className="w-full p-3 rounded-lg border border-input bg-transparent"
                value={content.footer?.phone}
                onChange={e => setContent({
                  ...content, 
                  footer: { ...content.footer, phone: e.target.value }
                })}
              />
            </div>
          </div>
          
          <button 
            onClick={() => handleContentSave('footer')}
            disabled={saving}
            className="w-full py-3 bg-secondary text-foreground rounded-lg font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            {saving ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
            Save Footer Settings
          </button>
      </div>
    </div>
  );
}
