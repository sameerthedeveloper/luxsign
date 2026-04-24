import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

async function checkTables() {
  const { data, error } = await supabase.from('seo').select('*').limit(1)
  if (error) {
    console.log('Error accessing seo table:', error.message)
  } else {
    console.log('Successfully accessed seo table')
  }
}

checkTables()
