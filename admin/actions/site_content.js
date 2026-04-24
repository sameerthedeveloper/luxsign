'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

export async function updateHero(data) {
  const supabase = await createClient();

  const { error } = await supabase
    .from('hero')
    .upsert({
      id: 'main',
      title: data.title,
      subtitle: data.subtitle,
      image_url: data.imageUrl,
      cta_text: data.ctaText,
      cta_link: data.ctaLink,
    });

  if (error) return { success: false, error: error.message };

  revalidatePath('/');
  revalidatePath('/admin/site-control');
  return { success: true };
}

export async function updateSiteContent(id, content) {
  const supabase = await createClient();

  const { error } = await supabase
    .from('site_content')
    .upsert({
      id: id,
      content: content,
    });

  if (error) return { success: false, error: error.message };

  revalidatePath('/');
  revalidatePath('/admin/site-control');
  return { success: true };
}
