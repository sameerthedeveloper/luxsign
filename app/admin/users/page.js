import { DataTable } from "@/components/admin/DataTable";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Users | Admin Dashboard",
};

const mockUsers = [
  { id: "USR-001", name: "Alice Admin", email: "alice@luxsign.com", role: "Administrator", lastActive: "Just now" },
  { id: "USR-002", name: "Elena Rodriguez", email: "elena@broadcastelite.com", role: "Client", lastActive: "2 hours ago" },
  { id: "USR-003", name: "James Chen", email: "jchen@lumiere.com", role: "Client", lastActive: "1 day ago" },
  { id: "USR-004", name: "Bob Support", email: "bob@luxsign.com", role: "Support", lastActive: "3 days ago" },
];

export default function AdminUsersPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Users</h1>
          <p className="text-[var(--color-admin-muted)]">Manage administrators and client portal access.</p>
        </div>
        <Button variant="admin_primary">Invite User</Button>
      </div>

      <div className="bg-[var(--color-admin-surface)] rounded-2xl border border-[var(--color-admin-border)] shadow-sm overflow-hidden">
        <div className="p-4 border-b border-[var(--color-admin-border)] flex justify-between items-center bg-[#f9f9fb]">
          <div className="w-1/3">
            <Input isAdmin={true} placeholder="Search users by name or email..." />
          </div>
          <div className="flex gap-2">
            <Button variant="admin_ghost" size="sm">Filter by Role</Button>
          </div>
        </div>
        
        <DataTable 
          columns={[
            { header: "Name", accessorKey: "name", cell: (row) => <span className="font-medium text-[var(--color-admin-text)]">{row.name}</span> },
            { header: "Email", accessorKey: "email", cell: (row) => <span className="text-[var(--color-admin-muted)]">{row.email}</span> },
            { header: "Role", accessorKey: "role", cell: (row) => {
              const variants = {
                "Administrator": "admin_primary",
                "Support": "admin_warning",
                "Client": "admin_default",
              };
              return <Badge variant={variants[row.role]}>{row.role}</Badge>;
            }},
            { header: "Last Active", accessorKey: "lastActive", cell: (row) => <span className="text-[var(--color-admin-muted)]">{row.lastActive}</span> },
            { header: "Actions", accessorKey: "actions", cell: () => (
              <button className="text-[var(--color-admin-blue)] hover:underline text-sm font-medium">Edit</button>
            )}
          ]}
          data={mockUsers}
        />
      </div>
    </div>
  );
}
