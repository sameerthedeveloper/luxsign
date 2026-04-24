"use client";

import React, { useEffect, useState } from 'react';
import { Mail, Trash2, Calendar, User, MessageSquare } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { deleteMessage } from '@/admin/actions/messages';

export default function MessagesPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const { data, error } = await supabase.from('messages').select('*').order('created_at', { ascending: false });
      if (error) throw error;
      setMessages(data || []);
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      try {
        const result = await deleteMessage(id);
        if (result.success) {
          setMessages(messages.filter(m => m.id !== id));
        } else {
          alert("Error: " + result.error);
        }
      } catch (error) {
        console.error("Error deleting message:", error);
      }
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto animate-fade-in">
      <header className="mb-10">
        <h1 className="text-3xl font-medium tracking-tight">Messages</h1>
        <p className="text-muted-foreground mt-1">Manage customer inquiries.</p>
      </header>

      {loading ? (
        <div className="text-center py-20 text-muted-foreground">Loading messages...</div>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className="bg-background rounded-2xl border border-border shadow-sm overflow-hidden hover:border-primary/30 transition-colors">
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary">
                      <User size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">{msg.name}</h3>
                      <p className="text-sm text-muted-foreground">{msg.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      {new Date(msg.created_at).toLocaleDateString()}
                    </div>
                    <button 
                      onClick={() => handleDelete(msg.id)}
                      className="p-2 text-red-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
                
                <div className="bg-secondary/30 rounded-xl p-4 border border-border/50">
                  <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    <MessageSquare size={12} />
                    Subject: {msg.subject || "No Subject"}
                  </div>
                  <p className="text-foreground leading-relaxed whitespace-pre-wrap">{msg.message}</p>
                </div>
              </div>
            </div>
          ))}
          {messages.length === 0 && (
            <div className="p-20 text-center text-muted-foreground border-2 border-dashed border-border rounded-2xl">
              No inquiries found.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
