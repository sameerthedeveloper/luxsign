'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

export async function createProject(formData) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('projects')
    .insert([
      {
        title: formData.title,
        description: formData.description,
        image_url: formData.imageUrl,
        category: formData.category,
      },
    ])
    .select();

  if (error) return { success: false, error: error.message };

  revalidatePath('/projects');
  revalidatePath('/admin/projects');
  return { success: true, data };
}

export async function deleteProject(id) {
  const supabase = await createClient();

  const { error } = await supabase
    .from('projects')
    .delete()
    .eq('id', id);

  if (error) return { success: false, error: error.message };

  revalidatePath('/projects');
  revalidatePath('/admin/projects');
  return { success: true };
}
