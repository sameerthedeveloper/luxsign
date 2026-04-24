export default function AdminRootLayout({ children }) {
  return (
    <div className="light-mode min-h-screen bg-background text-foreground">
      {children}
    </div>
  );
}
