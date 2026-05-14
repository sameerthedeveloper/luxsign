import { DataTable } from "@/components/admin/DataTable";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Products | Admin Dashboard",
};

const mockProducts = [
  { id: "processor-x", name: "Quantum Processor X", category: "Processor", price: "$12,500", status: "Active", stock: 15 },
  { id: "processor-lite", name: "Core Processor V2", category: "Processor", price: "$5,200", status: "Active", stock: 42 },
  { id: "aero-display", name: "Aero Series Display", category: "Display", price: "$850", status: "Active", stock: 120 },
  { id: "titan-display", name: "Titan Outdoor LED", category: "Display", price: "$1,100", status: "Active", stock: 85 },
  { id: "flex-display", name: "Flex Curve Display", category: "Display", price: "$1,350", status: "Draft", stock: 0 },
];

export default function AdminProductsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Products</h1>
          <p className="text-[var(--color-admin-muted)]">Manage your product catalog and inventory.</p>
        </div>
        <Button variant="admin_primary">Add Product</Button>
      </div>

      <div className="bg-[var(--color-admin-surface)] rounded-2xl border border-[var(--color-admin-border)] shadow-sm overflow-hidden">
        <div className="p-4 border-b border-[var(--color-admin-border)] flex justify-between items-center bg-[#f9f9fb]">
          <div className="w-1/3">
            <Input isAdmin={true} placeholder="Search products..." />
          </div>
          <div className="flex gap-2">
            <Button variant="admin_ghost" size="sm">Filter</Button>
            <Button variant="admin_ghost" size="sm">Export</Button>
          </div>
        </div>
        
        <DataTable 
          columns={[
            { header: "Name", accessorKey: "name", cell: (row) => <span className="font-medium text-[var(--color-admin-text)]">{row.name}</span> },
            { header: "Category", accessorKey: "category", cell: (row) => <span className="text-[var(--color-admin-muted)]">{row.category}</span> },
            { header: "Price", accessorKey: "price" },
            { header: "Stock", accessorKey: "stock" },
            { header: "Status", accessorKey: "status", cell: (row) => {
              const variants = {
                "Active": "admin_success",
                "Draft": "admin_default",
              };
              return <Badge variant={variants[row.status]}>{row.status}</Badge>;
            }},
            { header: "Actions", accessorKey: "actions", cell: () => (
              <button className="text-[var(--color-admin-blue)] hover:underline text-sm font-medium">Edit</button>
            )}
          ]}
          data={mockProducts}
        />
      </div>
    </div>
  );
}
