import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Contact | LuxSign",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] pt-24 pb-24 relative overflow-hidden">
      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-gold)] rounded-full mix-blend-screen filter blur-[128px] opacity-10 animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-gold)] rounded-full mix-blend-screen filter blur-[128px] opacity-10 animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="font-display text-5xl md:text-7xl text-white mb-6">
            LET'S BUILD <span className="text-gradient-gold">SOMETHING</span> EXTRAORDINARY
          </h1>
          <p className="text-[var(--color-text-muted)] text-lg mb-12 max-w-lg">
            Our engineering team is ready to assist with custom architectural installations, broadcast studio design, and global fleet deployments.
          </p>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Global Headquarters</h4>
              <p className="text-[var(--color-text-muted)]">100 Innovation Drive<br/>Tech Park, CA 94043</p>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Direct Contact</h4>
              <p className="text-[var(--color-text-muted)]">sales@luxsign.com<br/>+1 (800) 555-0199</p>
            </div>
          </div>
        </div>

        <div className="glass-card p-10 rounded-3xl border border-[var(--color-border)] shadow-2xl">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-muted)] mb-2">First Name</label>
                <Input type="text" placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-muted)] mb-2">Last Name</label>
                <Input type="text" placeholder="Doe" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-muted)] mb-2">Email Address</label>
              <Input type="email" placeholder="john@company.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-muted)] mb-2">Project Details</label>
              <textarea 
                className="flex w-full rounded-md px-3 py-2 text-sm transition-colors placeholder:text-[var(--color-text-muted)] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 border border-[var(--color-border)] bg-[rgba(0,0,0,0.5)] text-white focus-visible:border-[var(--color-gold)] focus-visible:ring-1 focus-visible:ring-[var(--color-gold)] min-h-[150px]"
                placeholder="Tell us about your requirements..."
              />
            </div>
            <Button variant="neumorph" className="w-full text-lg tracking-widest font-bold py-6">
              SEND INQUIRY
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
