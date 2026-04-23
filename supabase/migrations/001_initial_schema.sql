-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Categories
CREATE TABLE categories (
    id TEXT PRIMARY KEY, -- Using slug as ID as per existing logic
    name TEXT NOT NULL,
    description TEXT,
    image_url TEXT,
    "order" INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Products
CREATE TABLE products (
    id TEXT PRIMARY KEY, -- Using slug as ID
    name TEXT NOT NULL,
    description TEXT,
    price NUMERIC,
    image_url TEXT,
    category TEXT REFERENCES categories(id) ON DELETE SET NULL,
    featured BOOLEAN DEFAULT false,
    slug TEXT UNIQUE,
    specs JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. Projects
CREATE TABLE projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    description TEXT,
    image_url TEXT,
    category TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 4. Messages (Contact Form)
CREATE TABLE messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 5. SEO
CREATE TABLE seo (
    id TEXT PRIMARY KEY, -- Page path (e.g. '/', '/products')
    title TEXT,
    description TEXT,
    keywords TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 6. Site Content (Philosophy, Footer, Trust Badges)
CREATE TABLE site_content (
    id TEXT PRIMARY KEY, -- e.g. 'philosophy', 'footer', 'trust_badges'
    content JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 7. Hero Section
CREATE TABLE hero (
    id TEXT PRIMARY KEY DEFAULT 'main',
    title TEXT,
    subtitle TEXT,
    image_url TEXT,
    cta_text TEXT,
    cta_link TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE seo ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE hero ENABLE ROW LEVEL SECURITY;

-- RLS Policies

-- Public access for SELECT on most tables
CREATE POLICY "Public read categories" ON categories FOR SELECT USING (true);
CREATE POLICY "Public read products" ON products FOR SELECT USING (true);
CREATE POLICY "Public read projects" ON projects FOR SELECT USING (true);
CREATE POLICY "Public read seo" ON seo FOR SELECT USING (true);
CREATE POLICY "Public read site_content" ON site_content FOR SELECT USING (true);
CREATE POLICY "Public read hero" ON hero FOR SELECT USING (true);

-- Authenticated users (Admins) can do everything
CREATE POLICY "Admin full access categories" ON categories FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin full access products" ON products FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin full access projects" ON projects FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin full access messages" ON messages FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin full access seo" ON seo FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin full access site_content" ON site_content FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin full access hero" ON hero FOR ALL TO authenticated USING (true);

-- Public can INSERT into messages
CREATE POLICY "Public insert messages" ON messages FOR INSERT WITH CHECK (true);

-- Enable realtime (comment for user as requested)
-- Enable realtime: Go to Supabase Dashboard > Database > Replication and enable for these tables

-- 8. Storage Buckets
INSERT INTO storage.buckets (id, name, public)
VALUES ('products', 'products', true);

INSERT INTO storage.buckets (id, name, public)
VALUES ('categories', 'categories', true);

INSERT INTO storage.buckets (id, name, public)
VALUES ('site', 'site', true);

-- Storage RLS Policies
CREATE POLICY "Public read products images" ON storage.objects FOR SELECT USING (bucket_id = 'products');
CREATE POLICY "Public read categories images" ON storage.objects FOR SELECT USING (bucket_id = 'categories');
CREATE POLICY "Public read site images" ON storage.objects FOR SELECT USING (bucket_id = 'site');

CREATE POLICY "Admin upload products images" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'products');
CREATE POLICY "Admin upload categories images" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'categories');
CREATE POLICY "Admin upload site images" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'site');

CREATE POLICY "Admin update products images" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'products');
CREATE POLICY "Admin update categories images" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'categories');
CREATE POLICY "Admin update site images" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'site');

CREATE POLICY "Admin delete products images" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'products');
CREATE POLICY "Admin delete categories images" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'categories');
CREATE POLICY "Admin delete site images" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'site');
