'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

export async function sendMessage(formData) {
  const supabase = await createClient();

  const { error } = await supabase
    .from('messages')
    .insert([
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
    ]);

  if (error) return { success: false, error: error.message };

  revalidatePath('/admin/messages');
  return { success: true };
}

export async function deleteMessage(id) {
  const supabase = await createClient();

  const { error } = await supabase
    .from('messages')
    .delete()
    .eq('id', id);

  if (error) return { success: false, error: error.message };

  revalidatePath('/admin/messages');
  return { success: true };
}
