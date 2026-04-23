import { createClient } from './client';

export const getPublicUrl = (path, bucket = 'products') => {
  const supabase = createClient();
  const { data } = supabase.storage.from(bucket).getPublicUrl(path);
  return data.publicUrl;
};

export const uploadFile = async (file, path, bucket = 'products') => {
  const supabase = createClient();
  const { data, error } = await supabase.storage.from(bucket).upload(path, file, {
    upsert: true,
  });
  
  if (error) {
    throw error;
  }
  
  return data;
};
