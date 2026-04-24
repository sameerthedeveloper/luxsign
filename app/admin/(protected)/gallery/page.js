"use client";

import React, { useEffect, useState } from 'react';
import { Plus, Trash2, Image as ImageIcon, Loader2 } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { deleteProject } from '@/admin/actions/projects';

export default function GalleryPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        const result = await deleteProject(id);
        if (result.success) {
          setProjects(projects.filter(p => p.id !== id));
        } else {
          alert("Error: " + result.error);
        }
      } catch (error) {
        console.error("Error deleting project:", error);
      }
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto animate-fade-in">
      <header className="flex justify-between items-center mb-10">
        <div>
           <h1 className="text-3xl font-medium tracking-tight">Gallery</h1>
           <p className="text-muted-foreground mt-1">Showcase your best projects.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity">
          <Plus size={18} />
          Add Project
        </button>
      </header>

      {loading ? (
        <div className="text-center py-20 text-muted-foreground">Loading gallery...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-background rounded-2xl border border-border shadow-sm overflow-hidden group">
              <div className="relative aspect-video bg-secondary">
                {project.image_url ? (
                  <img src={project.image_url} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <ImageIcon size={40} />
                  </div>
                )}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => handleDelete(project.id)}
                    className="p-2 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded">
                    {project.category || "Uncategorized"}
                  </span>
                </div>
                <h3 className="text-lg font-medium">{project.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{project.description}</p>
              </div>
            </div>
          ))}
          {projects.length === 0 && (
            <div className="col-span-full p-20 text-center text-muted-foreground border-2 border-dashed border-border rounded-2xl">
              No projects found in the gallery.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
