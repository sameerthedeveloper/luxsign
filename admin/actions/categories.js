'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

export async function createCategory(formData) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('categories')
    .insert([
      {
        id: formData.slug,
        name: formData.name,
        description: formData.description,
        image_url: formData.imageUrl,
        order: Number(formData.order || 0),
      },
    ])
    .select();

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath('/admin/categories');
  return { success: true, data };
}

export async function updateCategory(id, formData) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('categories')
    .update({
      name: formData.name,
      description: formData.description,
      image_url: formData.imageUrl,
      order: Number(formData.order || 0),
    })
    .eq('id', id)
    .select();

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath('/admin/categories');
  return { success: true, data };
}

export async function deleteCategory(id) {
  const supabase = await createClient();

  const { error } = await supabase
    .from('categories')
    .delete()
    .eq('id', id);

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath('/admin/categories');
  return { success: true };
}
