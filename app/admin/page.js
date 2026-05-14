"use client";

import { StatsCard } from "@/components/admin/StatsCard";
import { DataTable } from "@/components/admin/DataTable";
import { Badge } from "@/components/ui/Badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { name: 'Mon', revenue: 4000 },
  { name: 'Tue', revenue: 3000 },
  { name: 'Wed', revenue: 5000 },
  { name: 'Thu', revenue: 2780 },
  { name: 'Fri', revenue: 8900 },
  { name: 'Sat', revenue: 4390 },
  { name: 'Sun', revenue: 6490 },
];

const recentOrders = [
  { id: "ORD-7392", customer: "Broadcast Elite", product: "Quantum Processor X", date: "Oct 24", status: "Completed", amount: "$25,000" },
  { id: "ORD-7391", customer: "Lumière Retail", product: "Aero Series Display", date: "Oct 23", status: "Processing", amount: "$8,500" },
  { id: "ORD-7390", customer: "Stadium Tech", product: "Titan Outdoor LED", date: "Oct 22", status: "Shipped", amount: "$110,000" },
  { id: "ORD-7389", customer: "ClearVision", product: "Nexus Controller", date: "Oct 21", status: "Pending", amount: "$10,200" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Dashboard</h1>
        <p className="text-[var(--color-admin-muted)]">Overview of your store's performance.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard 
          title="Total Revenue" 
          value="$153,700" 
          trend={12.5} 
          label="vs last month"
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
        />
        <StatsCard 
          title="Orders" 
          value="48" 
          trend={8.2} 
          label="vs last month"
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>}
        />
        <StatsCard 
          title="Active Users" 
          value="1,240" 
          trend={-2.4} 
          label="vs last month"
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>}
        />
        <StatsCard 
          title="Conversion Rate" 
          value="3.2%" 
          trend={4.1} 
          label="vs last month"
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
        />
      </div>

      <div className="bg-[var(--color-admin-surface)] rounded-2xl p-6 border border-[var(--color-admin-border)] shadow-sm">
        <h3 className="text-lg font-semibold mb-6">Revenue Overview</h3>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#86868b'}} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#86868b'}} dx={-10} tickFormatter={(val) => `$${val/1000}k`} />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: '1px solid #d2d2d7', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                cursor={{stroke: '#f1f5f9', strokeWidth: 2}}
              />
              <Line type="monotone" dataKey="revenue" stroke="#0071e3" strokeWidth={3} dot={{r: 4, fill: '#0071e3', strokeWidth: 2, stroke: '#fff'}} activeDot={{r: 6}} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Recent Orders</h3>
          <button className="text-[var(--color-admin-blue)] text-sm font-medium hover:underline">View All</button>
        </div>
        <DataTable 
          columns={[
            { header: "Order ID", accessorKey: "id", cell: (row) => <span className="font-medium text-[var(--color-admin-text)]">{row.id}</span> },
            { header: "Customer", accessorKey: "customer" },
            { header: "Product", accessorKey: "product" },
            { header: "Date", accessorKey: "date", cell: (row) => <span className="text-[var(--color-admin-muted)]">{row.date}</span> },
            { header: "Amount", accessorKey: "amount" },
            { header: "Status", accessorKey: "status", cell: (row) => {
              const variants = {
                "Completed": "admin_success",
                "Processing": "admin_warning",
                "Shipped": "admin_primary", // Reuse primary as info
                "Pending": "admin_default",
              };
              return <Badge variant={variants[row.status]}>{row.status}</Badge>;
            }},
          ]}
          data={recentOrders}
        />
      </div>
    </div>
  );
}
