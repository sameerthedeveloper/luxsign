# LuxSign Admin Panel

The administrative backbone for the LuxSign Displays platform. Migrated from Vite + Firebase to a modern Next.js + Supabase architecture.

## 🚀 Key Features

- **Next.js 15+ App Router**: High-performance, file-based routing and server-side rendering.
- **Supabase Integration**:
  - **Auth**: Secure email/password authentication with session management.
  - **Database**: PostgreSQL with Row Level Security (RLS) for data integrity.
  - **Storage**: Organized buckets for product and category assets.
- **Dynamic Dashboard**: Real-time overview of products, categories, and messages.
- **Inventory Control**: Comprehensive CRUD operations for products and categories.
- **Site Management**: Direct control over Hero sections, brand philosophy, and footer content.
- **Contact Hub**: Centralized management of customer inquiries and leads.

## 🛠 Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS 4
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 🏁 Getting Started

### 1. Prerequisites

- Node.js (Latest LTS)
- A Supabase project and account

### 2. Environment Setup

Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 3. Database Migration

1. Go to your Supabase SQL Editor.
2. Paste and run the contents of `supabase/migrations/001_initial_schema.sql`.
3. Enable **Realtime** in the Supabase Dashboard (Database > Replication) for the relevant tables.

### 4. Local Development

```bash
npm install
npm run dev
```

The admin panel will be available at `http://localhost:3000/admin`.

## 📁 Project structure

```
├── actions/        # Server Actions for database mutations
├── app/            # Next.js App Router (Admin & Public routes)
├── components/     # UI Components (Admin Sidebar, Layouts, UI)
├── context/        # Auth Context & Providers
├── lib/            # Supabase clients & Database helpers
└── supabase/       # SQL Migrations & Schema definitions
```

## 📄 License

This project is licensed under the MIT License.
