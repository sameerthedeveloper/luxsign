import { AdminSidebar } from "@/components/layout/AdminSidebar";

export const metadata = {
  title: "Admin Dashboard | LuxSign",
};

export default function AdminLayout({ children }) {
  return (
    <div className="admin-theme min-h-screen">
      <AdminSidebar />
      <main className="ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
