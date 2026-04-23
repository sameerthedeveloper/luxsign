'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

export async function createProduct(formData) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('products')
    .insert([
      {
        id: formData.slug, // Using slug as ID
        name: formData.name,
        slug: formData.slug,
        brand: formData.brand,
        price: Number(formData.price),
        category: formData.category,
        description: formData.longDescription,
        featured: formData.featured,
        image_url: formData.images[0] || null,
        specs: formData.specifications,
      },
    ])
    .select();

  if (error) {
    console.error('Error creating product:', error);
    return { success: false, error: error.message };
  }

  revalidatePath('/admin/products');
  revalidatePath('/products');
  return { success: true, data };
}

export async function updateProduct(id, formData) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('products')
    .update({
      name: formData.name,
      brand: formData.brand,
      price: Number(formData.price),
      category: formData.category,
      description: formData.longDescription,
      featured: formData.featured,
      image_url: formData.images[0] || null,
      specs: formData.specifications,
    })
    .eq('id', id)
    .select();

  if (error) {
    console.error('Error updating product:', error);
    return { success: false, error: error.message };
  }

  revalidatePath('/admin/products');
  revalidatePath(`/products/${id}`);
  return { success: true, data };
}

export async function deleteProduct(id) {
  const supabase = await createClient();

  const { error } = await supabase
    .from('products')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting product:', error);
    return { success: false, error: error.message };
  }

  revalidatePath('/admin/products');
  return { success: true };
}
