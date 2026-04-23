import { createClient as createBrowserClient } from "@/lib/supabase/client";

export const getProducts = async (categorySlug = null, supabase = null) => {
    try {
        const client = supabase || createBrowserClient();
        let query = client.from("products").select("*");
        
        if (categorySlug && categorySlug !== 'all') {
            query = query.eq("category", categorySlug);
        }

        const { data, error } = await query;
        if (error) throw error;
        return data;
    } catch (error) {
        console.error("Supabase fetch failed", error);
        return [];
    }
};

export const getProduct = async (id, supabase = null) => {
    try {
        const client = supabase || createBrowserClient();
        const { data, error } = await client
            .from("products")
            .select("*")
            .eq("id", id)
            .single();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error("Supabase fetch failed", error);
        return null;
    }
};

export const getCategories = async (supabase = null) => {
    try {
        const client = supabase || createBrowserClient();
        const { data, error } = await client
            .from("categories")
            .select("*")
            .order("order", { ascending: true });

        if (error) throw error;
        return data;
    } catch (error) {
        console.error("Supabase fetch failed", error);
        return [];
    }
};

export const getHero = async (supabase = null) => {
    try {
        const client = supabase || createBrowserClient();
        const { data, error } = await client
            .from("hero")
            .select("*")
            .eq("id", "main")
            .single();
        if (error) throw error;
        return data;
    } catch (e) { return null; }
};

export const getTrustBadges = async (supabase = null) => {
    try {
        const client = supabase || createBrowserClient();
        const { data, error } = await client
            .from("site_content")
            .select("content")
            .eq("id", "trust_badges")
            .single();
        if (error) throw error;
        return data.content.items || [];
    } catch (e) { return []; }
};

export const getFeaturedProducts = async (supabase = null) => {
    try {
        const client = supabase || createBrowserClient();
        const { data, error } = await client
            .from("products")
            .select("*")
            .eq("featured", true)
            .limit(4);
        if (error) throw error;
        return data;
    } catch (e) {
        return [];
    }
};

export const getProjects = async (supabase = null) => {
    try {
        const client = supabase || createBrowserClient();
        const { data, error } = await client
            .from("projects")
            .select("*")
            .order("created_at", { ascending: false });
        if (error) throw error;
        return data;
    } catch (e) {
        console.error("getProjects error:", e);
        return [];
    }
};
