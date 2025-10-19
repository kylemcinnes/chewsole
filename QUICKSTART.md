# ChewSole™ Quick Start Guide

Welcome to ChewSole - the satirical flip-flop gum brand! 🩴✨

## ⚡ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Database
```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev

# Seed initial data
npm run db:seed
```

### 3. Start Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the site!

## 🔑 Admin Access

1. Navigate to [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
2. Default password: `ChewSole2025!SecureAdmin`
   - Change this in `.env` file: `ADMIN_PASSWORD=your-password-here`

## 📁 Project Structure

```
chewsole/
├── src/
│   ├── app/              # Next.js pages
│   │   ├── page.tsx      # Home page
│   │   ├── shop/         # Product catalog
│   │   ├── product/      # Product details
│   │   ├── cart/         # Shopping cart
│   │   ├── checkout/     # Lead capture
│   │   ├── admin/        # Admin dashboard
│   │   └── api/          # API routes
│   ├── components/       # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── Hero.tsx
│   │   ├── Marquee.tsx
│   │   ├── FlavorCarousel.tsx
│   │   └── ...
│   └── lib/              # Utilities
│       ├── db.ts         # Prisma client
│       ├── store.ts      # Cart state (Zustand)
│       └── validators.ts # Zod schemas
├── prisma/
│   ├── schema.prisma     # Database schema
│   └── seed.ts           # Seed data
└── public/               # Static assets
```

## 🎨 Key Features

### For Visitors
- **Browse Products**: View the ChewSole Flip-Flop Gum catalog
- **Flavor Selection**: Choose from 5 unique flavors
- **Cart System**: Add items and manage quantities
- **Pre-Launch Checkout**: Submit interest (no payment required)

### For Admins
- **Dashboard**: View all pre-launch leads
- **Analytics**: Track daily, weekly, and total sign-ups
- **Export**: Download leads as CSV for email marketing
- **Protected Access**: Password-secured admin panel

## 🛠 Available Scripts

```bash
# Development
npm run dev              # Start dev server with Turbopack
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint

# Database
npm run db:generate      # Generate Prisma client
npm run db:migrate       # Run migrations
npm run db:seed          # Seed database
npm run db:studio        # Open Prisma Studio (GUI)
```

## 🎯 Testing the Flow

### 1. Browse as a Customer
1. Visit the homepage
2. Click "Shop ChewSole" or navigate to `/shop`
3. View product details at `/product/chewsole`
4. Select a flavor (e.g., "Ocean Mint")
5. Add to cart
6. Go to `/cart` and proceed to checkout
7. Fill out the form (no payment required)
8. Submit to join the pre-launch list

### 2. View Leads as Admin
1. Go to `/admin/login`
2. Enter the admin password
3. View the dashboard with all leads
4. Export leads as CSV

## 🌍 Environment Variables

Create a `.env` file in the root:

```env
DATABASE_URL="file:./dev.db"
ADMIN_PASSWORD="your-secure-password-here"
```

## 📦 Database Management

### View Database with Prisma Studio
```bash
npm run db:studio
```

This opens a GUI at [http://localhost:5555](http://localhost:5555) where you can:
- View all tables (OrderLead, Product, Slogan, SiteSettings)
- Edit data directly
- Add/remove records

### Reset Database
```bash
# Delete database
rm prisma/dev.db

# Recreate and seed
npx prisma migrate dev
npm run db:seed
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables:
   - `DATABASE_URL` (use Vercel Postgres or similar)
   - `ADMIN_PASSWORD`
4. Deploy!

### Environment Considerations
- **SQLite**: File-based, not ideal for serverless
- **Production**: Migrate to PostgreSQL or MySQL
- **Prisma**: Update `datasource` in `schema.prisma`

## 🎨 Customization

### Change Brand Colors
Edit `src/app/globals.css`:
```css
--accent: 168 78% 52%;  /* Main brand color */
```

### Update Slogans
1. Run `npm run db:studio`
2. Navigate to `Slogan` table
3. Add/edit/delete slogans
4. Slogans appear in the homepage marquee

### Add Products
1. Open Prisma Studio
2. Navigate to `Product` table
3. Create new product (remember to use JSON for `images` and `flavors`)

## ⚠️ Important Reminders

- **This is a satirical project** - no real products are sold
- **No payments are processed** - checkout only captures leads
- **Clear disclaimers** are on every page
- **Data privacy**: Leads are stored locally, not shared

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

### Database Issues
```bash
# Regenerate Prisma client
npx prisma generate

# Reset database
rm prisma/dev.db
npx prisma migrate dev
npm run db:seed
```

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 npm run dev
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)

## 🤝 Support

For questions or issues:
1. Check this guide
2. Review the main [README.md](./README.md)
3. Inspect the code (well-commented!)

---

**Built with ❤️ and satire. Save the planet. Chew flip-flops.™**

