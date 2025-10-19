# 🚀 Complete Cloudflare Pages Setup for ChewSole

## ⚠️ Current Issue
Next.js 15.5.6 isn't fully supported by `@cloudflare/next-on-pages` yet (supports up to 15.5.2).

## 🎯 Two Solutions

---

## ✅ **SOLUTION 1: Vercel (Recommended - 2 minutes)**

Vercel is built specifically for Next.js and requires ZERO code changes:

### Steps:

1. **Go to [vercel.com](https://vercel.com)** and sign in with GitHub

2. **Click "Add New Project"**

3. **Import `kylemcinnes/chewsole`** repository

4. **Configure:**
   - Framework Preset: **Next.js** (auto-detected)
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: Leave default
   
5. **Add Environment Variables:**
   ```
   ADMIN_PASSWORD=ChewSole2025!SecureAdmin
   ```
   
6. **Click Deploy** ✨

**Done!** Your site will be live at `chewsole.vercel.app` in ~2 minutes.

### For Production Database:
After deployment, upgrade to Vercel Postgres (free tier):
- Add Vercel Postgres in dashboard
- It auto-sets `DATABASE_URL`
- Run migrations from Vercel dashboard

---

## 🔧 **SOLUTION 2: Cloudflare Pages (Advanced)**

### A. In Cloudflare Dashboard

**Project Settings:**

1. **Framework preset:** None (manual)

2. **Build command:**
   ```bash
   npm run build
   ```

3. **Build output directory:**
   ```
   .next
   ```

4. **Root directory:** `/` (leave default)

5. **Environment variables:**
   ```
   NODE_VERSION=20
   ADMIN_PASSWORD=your-secure-password
   ```

### B. Enable Compatibility Flags

In **Settings → Functions**:
- Add compatibility flag: `nodejs_compat`
- Add compatibility date: `2024-10-01`

### C. Database Setup (Critical!)

**Option A: Use Cloudflare D1**

In your Cloudflare dashboard:
1. Go to **D1** (sidebar)
2. Create database: `chewsole-db`
3. Copy the database ID
4. Bind to your Pages project:
   - Settings → Functions → D1 database bindings
   - Variable name: `DB`
   - D1 database: Select `chewsole-db`

Then you'd need to update the code to use D1 adapter (more complex).

**Option B: Use External Database** (Easier)

Use Turso (serverless SQLite):
1. Sign up at [turso.tech](https://turso.tech)
2. Create database: `chewsole`
3. Get connection URL
4. Add to Cloudflare env vars:
   ```
   DATABASE_URL=libsql://your-db.turso.io
   TURSO_AUTH_TOKEN=your-token
   ```
5. Update Prisma datasource to use `libsql`

---

## 📊 Comparison

| Feature | Vercel | Cloudflare Pages |
|---------|--------|------------------|
| **Setup Time** | 2 minutes | 30+ minutes |
| **Code Changes** | None | Several files |
| **Database** | Built-in Postgres | Requires external DB |
| **Next.js Support** | Native | Adapter required |
| **Cost (Free Tier)** | Very generous | Good |
| **Best For** | Next.js apps | Static sites |

---

## 🎯 My Recommendation

**Use Vercel** - it's literally built for Next.js and your app will work immediately with zero changes.

If you absolutely must use Cloudflare, I can help migrate the database and add the adapter, but it will require:
- Downgrading Next.js to 15.5.2
- Installing `@cloudflare/next-on-pages`
- Migrating to D1 or external database
- Updating Prisma configuration
- Testing all API routes

**Choose Vercel and be deployed in 2 minutes, or Cloudflare with 1-2 hours of work?**

