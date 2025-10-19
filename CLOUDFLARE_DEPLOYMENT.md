# Cloudflare Pages Deployment Guide

## ⚠️ Important Database Consideration

SQLite (file-based) **does not work** on Cloudflare Pages because it's a serverless environment. You have two options:

### Option A: Use Cloudflare D1 (Recommended)
Cloudflare D1 is their serverless SQLite database.

### Option B: Use External Database
- Turso (serverless SQLite)
- Neon (serverless Postgres)
- PlanetScale (serverless MySQL)
- Supabase (Postgres)

This guide covers **Option A: Cloudflare D1** since it's free and keeps SQLite compatibility.

---

## 📋 Step-by-Step Deployment

### 1. Install Cloudflare Dependencies

```bash
npm install --save-dev @cloudflare/next-on-pages wrangler
npm install @prisma/adapter-d1
```

### 2. Update Prisma for Cloudflare D1

Update `prisma/schema.prisma`:
```prisma
generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["driverAdapters"]
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}
```

### 3. Create Cloudflare Configuration

Create `wrangler.toml` in project root with D1 database binding.

### 4. Update Build Scripts

Your `package.json` needs these scripts:
```json
{
  "scripts": {
    "pages:build": "npx @cloudflare/next-on-pages",
    "preview": "npm run pages:build && wrangler pages dev",
    "deploy": "npm run pages:build && wrangler pages deploy"
  }
}
```

### 5. Configure Cloudflare Pages

In your Cloudflare Pages dashboard:

**Build Settings:**
- **Build command:** `npm run pages:build`
- **Build output directory:** `.vercel/output/static`
- **Node version:** `18` or `20`

**Environment Variables:**
- Add `DATABASE_URL` (will be set automatically with D1 binding)
- Add `ADMIN_PASSWORD=your-secure-password`

### 6. Create D1 Database

```bash
# Create D1 database
npx wrangler d1 create chewsole-db

# Note the database_id from the output
```

Add to `wrangler.toml`:
```toml
[[d1_databases]]
binding = "DB"
database_name = "chewsole-db"
database_id = "your-database-id-here"
```

### 7. Run Migrations on D1

```bash
# Apply schema to D1
npx wrangler d1 execute chewsole-db --file=./prisma/migrations/20251019044114_init/migration.sql

# Seed data
npx wrangler d1 execute chewsole-db --command="INSERT INTO Slogan (id, text, active, weight) VALUES ('cm2x1', 'Save the planet! Chew flip-flops!', 1, 1);"
```

---

## 🔄 Alternative: Deploy to Vercel Instead

If you want to avoid database migration complexity, Vercel is **much easier**:

1. Push to GitHub ✅ (already done)
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables:
   - `DATABASE_URL=file:./dev.db` (use Vercel Postgres for production)
   - `ADMIN_PASSWORD=your-password`
5. Click Deploy

Vercel automatically detects Next.js and handles everything!

---

## 📊 Database Options Comparison

| Option | Complexity | Cost | Best For |
|--------|-----------|------|----------|
| **Vercel** | ⭐ Easy | Free tier generous | Quick deployment |
| **Cloudflare D1** | ⭐⭐ Medium | Free (alpha) | Cloudflare ecosystem |
| **Turso** | ⭐⭐ Medium | Free tier available | SQLite fans |
| **Neon/Supabase** | ⭐⭐ Medium | Free tier available | Postgres preference |

---

## ⚡ Quick Fix: Deploy to Vercel NOW

For fastest deployment with zero config changes:

```bash
npm install -g vercel
vercel login
vercel
```

Follow prompts, add env vars when asked, done! 🎉

