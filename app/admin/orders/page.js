import { DataTable } from "@/components/admin/DataTable";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Orders | Admin Dashboard",
};

const mockOrders = [
  { id: "ORD-7392", customer: "Broadcast Elite", date: "Oct 24, 2026", status: "Completed", items: 2, total: "$25,000" },
  { id: "ORD-7391", customer: "Lumière Retail", date: "Oct 23, 2026", status: "Processing", items: 10, total: "$8,500" },
  { id: "ORD-7390", customer: "Stadium Tech", date: "Oct 22, 2026", status: "Shipped", items: 100, total: "$110,000" },
  { id: "ORD-7389", customer: "ClearVision", date: "Oct 21, 2026", status: "Pending", items: 3, total: "$10,200" },
  { id: "ORD-7388", customer: "Stage Right Prod", date: "Oct 20, 2026", status: "Cancelled", items: 1, total: "$5,200" },
];

export default function AdminOrdersPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Orders</h1>
          <p className="text-[var(--color-admin-muted)]">View and manage customer orders.</p>
        </div>
      </div>

      <div className="bg-[var(--color-admin-surface)] rounded-2xl border border-[var(--color-admin-border)] shadow-sm overflow-hidden">
        <div className="p-4 border-b border-[var(--color-admin-border)] flex justify-between items-center bg-[#f9f9fb]">
          <div className="w-1/3">
            <Input isAdmin={true} placeholder="Search orders..." />
          </div>
          <div className="flex gap-2">
            <select className="border border-[var(--color-admin-border)] bg-white text-[var(--color-admin-text)] rounded-[10px] px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-admin-blue)]">
              <option>All Statuses</option>
              <option>Completed</option>
              <option>Processing</option>
              <option>Shipped</option>
              <option>Pending</option>
            </select>
            <Button variant="admin_ghost" size="sm">Export</Button>
          </div>
        </div>
        
        <DataTable 
          columns={[
            { header: "Order ID", accessorKey: "id", cell: (row) => <span className="font-medium text-[var(--color-admin-text)]">{row.id}</span> },
            { header: "Customer", accessorKey: "customer" },
            { header: "Date", accessorKey: "date", cell: (row) => <span className="text-[var(--color-admin-muted)]">{row.date}</span> },
            { header: "Items", accessorKey: "items", cell: (row) => <span className="text-[var(--color-admin-muted)]">{row.items}</span> },
            { header: "Total", accessorKey: "total", cell: (row) => <span className="font-medium">{row.total}</span> },
            { header: "Status", accessorKey: "status", cell: (row) => {
              const variants = {
                "Completed": "admin_success",
                "Processing": "admin_warning",
                "Shipped": "admin_primary",
                "Pending": "admin_default",
                "Cancelled": "admin_danger",
              };
              return <Badge variant={variants[row.status]}>{row.status}</Badge>;
            }},
            { header: "Actions", accessorKey: "actions", cell: () => (
              <button className="text-[var(--color-admin-blue)] hover:underline text-sm font-medium">View Details</button>
            )}
          ]}
          data={mockOrders}
        />
      </div>
    </div>
  );
}
