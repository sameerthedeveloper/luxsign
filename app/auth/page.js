import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import Link from "next/link";

export const metadata = {
  title: "Client Portal | LuxSign",
};

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-gold)] rounded-full mix-blend-screen filter blur-[128px] opacity-10 animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-gold)] rounded-full mix-blend-screen filter blur-[128px] opacity-10 animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 text-center">
        <Link href="/" className="inline-block mb-6">
          <Logo size="lg" />
        </Link>
        <h2 className="text-center text-3xl font-display text-white tracking-wide">
          Client Portal
        </h2>
        <p className="mt-2 text-center text-sm text-[var(--color-text-muted)]">
          Sign in to access your dashboard and fleet management.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="glass-card py-8 px-4 shadow sm:rounded-2xl sm:px-10 border border-[var(--color-border)]">
          <form className="space-y-6" action="#">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text-muted)] mb-2">
                Email address
              </label>
              <div className="mt-1">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[var(--color-text-muted)] mb-2">
                Password
              </label>
              <div className="mt-1">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-[var(--color-border)] bg-[rgba(0,0,0,0.5)] text-[var(--color-gold)] focus:ring-[var(--color-gold)]"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-[var(--color-text-muted)]">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-[var(--color-gold)] hover:text-white transition-colors">
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <Link href="/admin">
                <Button variant="neumorph" className="w-full font-bold tracking-widest text-lg">
                  Sign in
                </Button>
              </Link>
            </div>
          </form>
          
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[var(--color-border)]" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-[var(--color-bg)] px-2 text-[var(--color-text-muted)] rounded-md">
                  Demo Note
                </span>
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-[var(--color-text-muted)]">
              Click "Sign in" to preview the Admin Dashboard without credentials.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
