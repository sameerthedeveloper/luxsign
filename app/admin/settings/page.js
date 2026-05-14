import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export const metadata = {
  title: "Settings | Admin Dashboard",
};

export default function AdminSettingsPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Settings</h1>
        <p className="text-[var(--color-admin-muted)]">Manage your store preferences and integrations.</p>
      </div>

      <div className="bg-[var(--color-admin-surface)] rounded-2xl border border-[var(--color-admin-border)] shadow-sm overflow-hidden">
        <div className="p-6 border-b border-[var(--color-admin-border)]">
          <h2 className="text-lg font-semibold text-[var(--color-admin-text)]">General Information</h2>
          <p className="text-sm text-[var(--color-admin-muted)] mt-1">Update your company name, contact email, and default currency.</p>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[var(--color-admin-text)] mb-2">Company Name</label>
              <Input isAdmin={true} defaultValue="LuxSign Displays" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-admin-text)] mb-2">Support Email</label>
              <Input isAdmin={true} type="email" defaultValue="support@luxsign.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-admin-text)] mb-2">Default Currency</label>
            <select className="w-full md:w-1/2 border border-[var(--color-admin-border)] bg-white text-[var(--color-admin-text)] rounded-[10px] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-admin-blue)]">
              <option>USD ($)</option>
              <option>EUR (€)</option>
              <option>GBP (£)</option>
            </select>
          </div>
        </div>
        <div className="px-6 py-4 bg-[#f9f9fb] border-t border-[var(--color-admin-border)] flex justify-end">
          <Button variant="admin_primary">Save Changes</Button>
        </div>
      </div>

      <div className="bg-[var(--color-admin-surface)] rounded-2xl border border-[var(--color-admin-border)] shadow-sm overflow-hidden">
        <div className="p-6 border-b border-[var(--color-admin-border)]">
          <h2 className="text-lg font-semibold text-[var(--color-admin-text)]">Integrations</h2>
          <p className="text-sm text-[var(--color-admin-muted)] mt-1">Manage API keys and external service connections.</p>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-[var(--color-admin-border)] pb-6">
            <div>
              <h3 className="font-medium text-[var(--color-admin-text)]">Stripe Payment Gateway</h3>
              <p className="text-sm text-[var(--color-admin-muted)] mt-1">Accept credit card payments securely.</p>
            </div>
            {/* Apple-style Toggle Switch placeholder */}
            <div className="relative inline-block w-12 h-6 rounded-full bg-[#34c759]">
              <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform" />
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-[var(--color-admin-text)]">Supabase Database</h3>
              <p className="text-sm text-[var(--color-admin-muted)] mt-1">Realtime database and authentication.</p>
            </div>
            <div className="relative inline-block w-12 h-6 rounded-full bg-[#34c759]">
              <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
