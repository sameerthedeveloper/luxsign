"use client";

import React, { useState } from "react";
import { Input, TextArea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Business Inquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-32 pb-16 border-b border-border bg-surface/50">
        <div className="container mx-auto px-6">
          <span className="text-accent-blue font-bold text-xs uppercase tracking-[0.3em] block mb-4">
            Connect With Us
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9]">
            Technical <br />
            <span className="text-muted">Partnership</span>
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Form Side */}
            <div>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-surface border border-accent-blue/30 p-12 text-center"
                >
                  <div className="w-16 h-16 bg-accent-blue/10 rounded-full flex items-center justify-center text-accent-blue mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">Transmission Successful</h2>
                  <p className="text-muted mb-8 leading-relaxed">
                    Our technical sales engineering team has received your inquiry. 
                    Expect a response within 24 business hours.
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>Send Another Message</Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Full Name"
                      placeholder="John DOE"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <Input
                      label="Corporate Email"
                      type="email"
                      placeholder="john@company.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <Input
                    label="Subject"
                    placeholder="Project Inquiry"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                  <TextArea
                    label="Project Requirements"
                    placeholder="Provide details about your LED installation or processing needs..."
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                  <Button variant="accent" size="lg" className="w-full" type="submit">
                    Send Transmission
                  </Button>
                </form>
              )}
            </div>

            {/* Info Side */}
            <div className="space-y-16">
              <div>
                <h3 className="text-xs font-bold text-accent-blue uppercase tracking-[0.4em] mb-8">Global Headquarters</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-bold uppercase text-sm mb-2">Shenzhen R&D Center</h4>
                    <p className="text-muted text-sm leading-relaxed">
                      Building 4, Hi-Tech Innovation Park,<br />
                      Nanshan District, Shenzhen, China
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase text-sm mb-2">Los Angeles Sales Office</h4>
                    <p className="text-muted text-sm leading-relaxed">
                      888 Professional Blvd,<br />
                      Irvine, CA 92618, USA
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold text-accent-blue uppercase tracking-[0.4em] mb-8">Direct Channels</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded bg-surface border border-border flex items-center justify-center text-muted group-hover:text-white transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                    </div>
                    <div>
                      <span className="block text-[10px] text-muted font-bold uppercase tracking-widest">Email</span>
                      <span className="text-white font-medium">engineering@luxsign.tech</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded bg-surface border border-border flex items-center justify-center text-muted group-hover:text-white transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                    </div>
                    <div>
                      <span className="block text-[10px] text-muted font-bold uppercase tracking-widest">Engineering Line</span>
                      <span className="text-white font-medium">+1 (800) LUX-SIGN</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-surface border-l-4 border-accent-blue">
                <h4 className="text-white font-bold uppercase text-xs mb-3 tracking-widest">Support Notice</h4>
                <p className="text-muted text-xs leading-relaxed">
                  Existing clients with premium support contracts can bypass this form by using their dedicated portal login or contacting their assigned field engineer directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
