"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { deleteProduct } from '@/admin/actions/products';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase.from('products').select('*');
      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        const result = await deleteProduct(id);
        if (result.success) {
          setProducts(products.filter(p => p.id !== id));
        } else {
          alert("Error: " + result.error);
        }
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto animate-fade-in">
      <header className="flex justify-between items-center mb-10">
        <div>
           <h1 className="text-3xl font-medium tracking-tight">Products</h1>
           <p className="text-muted-foreground mt-1">Manage your inventory.</p>
        </div>
        <Link href="/admin/products/new" className="flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity">
          <Plus size={18} />
          Add Product
        </Link>
      </header>

      {loading ? (
        <div className="text-center py-20 text-muted-foreground">Loading products...</div>
      ) : (
        <div className="bg-background rounded-2xl border border-border shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border bg-secondary/50">
                  <th className="p-4 font-medium text-sm text-muted-foreground">Image</th>
                  <th className="p-4 font-medium text-sm text-muted-foreground">Name</th>
                  <th className="p-4 font-medium text-sm text-muted-foreground">Brand</th>
                  <th className="p-4 font-medium text-sm text-muted-foreground">Category</th>
                  <th className="p-4 font-medium text-sm text-muted-foreground text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-secondary/20 transition-colors">
                    <td className="p-4">
                      <div className="w-12 h-12 rounded-lg bg-secondary overflow-hidden">
                        {product.image_url && (
                          <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" />
                        )}
                      </div>
                    </td>
                    <td className="p-4 font-medium">{product.name}</td>
                    <td className="p-4 text-muted-foreground">{product.brand}</td>
                    <td className="p-4 text-muted-foreground text-sm capitalize">{product.category?.replace('-', ' ')}</td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link href={`/admin/products/edit/${product.id}`} className="p-2 text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors">
                          <Edit size={16} />
                        </Link>
                        <button 
                          onClick={() => handleDelete(product.id)}
                          className="p-2 text-red-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {products.length === 0 && (
                  <tr>
                    <td colSpan="5" className="p-12 text-center text-muted-foreground">
                      No products found. Add your first one to get started.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
