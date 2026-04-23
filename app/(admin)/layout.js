import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Sidebar from '@/components/admin/Sidebar'

export default async function AdminLayout({ children }) {
  const supabase = await createClient()

  const { data: { user }, error } = await supabase.auth.getUser()

  if (error || !user) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-secondary/30 flex">
      <Sidebar />
      <main className="flex-1 md:ml-64 bg-background/50 h-screen overflow-y-auto">
        {children}
      </main>
    </div>
  )
}
