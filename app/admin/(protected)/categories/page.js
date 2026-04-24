"use client";

import React, { useEffect, useState } from 'react';
import { Plus, Edit, Trash2, LayoutGrid } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { deleteCategory } from '@/admin/actions/categories';

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase.from('categories').select('*').order('order', { ascending: true });
      if (error) throw error;
      setCategories(data || []);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        const result = await deleteCategory(id);
        if (result.success) {
          setCategories(categories.filter(c => c.id !== id));
        } else {
          alert("Error: " + result.error);
        }
      } catch (error) {
        console.error("Error deleting category:", error);
      }
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto animate-fade-in">
      <header className="flex justify-between items-center mb-10">
        <div>
           <h1 className="text-3xl font-medium tracking-tight">Categories</h1>
           <p className="text-muted-foreground mt-1">Organize your products.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity">
          <Plus size={18} />
          Add Category
        </button>
      </header>

      {loading ? (
        <div className="text-center py-20 text-muted-foreground">Loading categories...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="bg-background rounded-2xl border border-border shadow-sm p-6 hover:border-primary/50 transition-colors group">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-secondary rounded-xl text-primary group-hover:bg-primary/10 transition-colors">
                  <LayoutGrid size={24} />
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors">
                    <Edit size={16} />
                  </button>
                  <button 
                    onClick={() => handleDelete(category.id)}
                    className="p-2 text-red-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              <h3 className="text-lg font-medium">{category.name}</h3>
              <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{category.description}</p>
              <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded">Order: {category.order}</span>
                <span className="text-xs text-muted-foreground italic">ID: {category.id}</span>
              </div>
            </div>
          ))}
          {categories.length === 0 && (
            <div className="col-span-full p-20 text-center text-muted-foreground border-2 border-dashed border-border rounded-2xl">
              No categories found.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
