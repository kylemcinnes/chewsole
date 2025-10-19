# 🚀 Vercel Deployment Setup for ChewSole

## Quick Setup Steps

### 1. Add Environment Variables in Vercel Dashboard

Go to your project settings: **Settings → Environment Variables**

Add these variables:

#### Required:
```
ADMIN_PASSWORD=ChewSole2025!SecureAdmin
DATABASE_URL=file:./dev.db
```

### 2. Deploy Again

After adding the environment variables, **redeploy** from the Vercel dashboard:
- Go to **Deployments**
- Click the three dots on the latest deployment
- Click **Redeploy**

---

## ⚠️ Important: Database for Production

SQLite file-based databases (`file:./dev.db`) work for development but have limitations on Vercel:

### Option A: Use Vercel Postgres (Recommended)

1. **In Vercel Dashboard:**
   - Go to **Storage** tab
   - Click **Create Database**
   - Select **Postgres**
   - Choose **Hobby** (free tier)
   - Click **Create**

2. **Connect to your project:**
   - Vercel automatically adds `POSTGRES_URL` and other env vars
   - Update your `DATABASE_URL` to use `POSTGRES_URL`

3. **Update Prisma Schema:**

In `prisma/schema.prisma`, change:
```prisma
datasource db {
  provider = "postgresql"  // Changed from "sqlite"
  url      = env("DATABASE_URL")
}
```

4. **Create new migration:**
```bash
npx prisma migrate dev --name switch_to_postgres
git add .
git commit -m "Switch to PostgreSQL for production"
git push
```

### Option B: Keep SQLite (Limitations)

If you keep SQLite:
- Works for demo purposes
- Database resets on every deployment
- No persistence between deployments
- Not recommended for production

---

## 🔧 Current Build Fixes Applied

I've fixed these issues in the code:

✅ **Fixed checkout page** - Prevents hydration mismatch errors
✅ **Made shop page dynamic** - Handles database errors gracefully
✅ **Added proper SSR handling** - Client-side code only runs in browser

---

## 📝 Next Steps

1. **Push the fixes:**
```bash
git add .
git commit -m "Fix Vercel deployment: SSR hydration and database handling"
git push
```

2. **In Vercel Dashboard:**
   - Add environment variables (see above)
   - Redeploy

3. **For Production Database (Optional):**
   - Set up Vercel Postgres
   - Update Prisma schema
   - Run migrations
   - Redeploy

---

## ✅ After Deployment

Your site will be live at: `https://chewsole.vercel.app`

Test these features:
- ✅ Homepage loads
- ✅ Shop page shows products
- ✅ Product detail page works
- ✅ Cart functionality
- ✅ Checkout form submission
- ✅ Admin login (use ADMIN_PASSWORD you set)

---

## 🐛 If Issues Persist

Check the Vercel deployment logs:
1. Go to **Deployments** tab
2. Click on the failed deployment
3. Check the **Build Logs** and **Function Logs**

Common issues:
- Missing environment variables
- Database connection errors
- Build timeouts (use lighter pages)

---

## 📊 Vercel Free Tier Limits

- ✅ 100 GB bandwidth/month
- ✅ Unlimited deployments
- ✅ Serverless Functions: 100 GB-hours
- ✅ Postgres: 256 MB storage (free)

Perfect for a demo/portfolio project!

