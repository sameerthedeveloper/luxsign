# LuxSign Displays

LuxSign Displays is a premium platform for industrial-grade LED display solutions, high-performance video processors, and smart controllers.

## Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Backend-as-a-Service**: [Supabase](https://supabase.com/) (Authentication, PostgreSQL Database, Storage)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Features

- **Premium Frontend**: Modern, dark-themed UI for showcasing high-end LED technology.
- **Admin Portal**: Protected dashboard for managing inventory and site content.
- **Product Management**: Create, update, and delete products with image uploads to Supabase Storage.
- **Dynamic Site Control**: Manage hero sections, philosophy text, and footer information from the admin panel.
- **Contact System**: Lead generation form with message tracking.

## Getting Started

### 1. Prerequisites

- Node.js 18+ 
- A Supabase project

### 2. Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Database Setup

Apply the initial schema migration located at `supabase/migrations/001_initial_schema.sql` via the Supabase SQL Editor or CLI.

### 4. Installation

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

- `app/`: Next.js App Router pages and layouts.
- `app/(admin)/`: Protected admin routes.
- `actions/`: Next.js Server Actions for database mutations.
- `components/`: Reusable React components.
- `context/`: React Context providers (Auth, etc.).
- `lib/`: Shared utilities and Supabase client configurations.
- `supabase/`: Database migrations and schema definitions.

## License

MIT
