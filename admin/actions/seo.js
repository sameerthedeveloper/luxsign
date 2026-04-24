'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

export async function updateSEO(id, data) {
  const supabase = await createClient();

  const { error } = await supabase
    .from('seo')
    .upsert({
      id: id,
      title: data.title,
      description: data.description,
      keywords: data.keywords,
    });

  if (error) return { success: false, error: error.message };

  revalidatePath('/');
  revalidatePath('/admin/seo');
  return { success: true };
}
