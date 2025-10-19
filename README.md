# ChewSole™ - The Gum with Real Sole

![ChewSole Banner](https://images.unsplash.com/photo-1582212928585-39f9f0a7c540?w=1200&q=80)

> **⚠️ Important Disclaimer**: This is a **satirical brand concept** created for educational and portfolio purposes. ChewSole is not a real product. No flip-flop gum is manufactured or sold. This is a creative exploration of brand design, modern web development, and e-commerce UX patterns.

## About

ChewSole™ is a satirical "pre-launch" website for a fictional chewing gum brand made from 100% recycled flip-flops. The project demonstrates:

- Modern full-stack web development
- Lead capture & pre-launch marketing strategies
- Dark-themed, motion-rich UI inspired by bold youth brands
- Ethical content creation (all satire, no demeaning content)

## Features

### 🎨 Design & UX
- **Dark, glossy theme** with accent color #28e0b9
- **Framer Motion animations** for hero parallax, hover effects, and transitions
- **Responsive design** optimized for mobile, tablet, and desktop
- **Accessibility-first** with semantic HTML, ARIA labels, and focus states

### 🛒 E-Commerce Flow
- Product browsing with flavor selection
- Shopping cart with localStorage persistence (Zustand)
- Pre-launch checkout (no payments, lead capture only)
- Order preference storage in SQLite database

### 🔐 Admin Panel
- Password-protected admin dashboard (`/admin`)
- View all pre-launch leads
- Export leads to CSV
- Real-time statistics

### 📄 Content Pages
- **Home**: Hero, marquee slogans, featured product, sustainability highlights
- **Shop**: Product catalog
- **Product Detail**: Flavor carousel, sticky add-to-cart, product features
- **Cart**: Order summary, quantity adjustment
- **Checkout**: Lead capture form with validation
- **Story**: "From beach to chew" narrative
- **Sustainability**: Impact stats and commitments
- **Legal Pages**: Privacy, Terms, Disclaimer

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Database**: [Prisma](https://www.prisma.io/) + SQLite
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Validation**: [Zod](https://zod.dev/)
- **SEO**: [Next SEO](https://github.com/garmeeh/next-seo)

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**:
   \`\`\`bash
   git clone <your-repo-url>
   cd chewsole
   \`\`\`

2. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**:
   Create a \`.env\` file in the root directory:
   \`\`\`env
   DATABASE_URL="file:./dev.db"
   ADMIN_PASSWORD="your-secure-password-here"
   \`\`\`

4. **Initialize database**:
   \`\`\`bash
   npx prisma generate
   npx prisma migrate dev --name init
   npm run db:seed
   \`\`\`

5. **Run development server**:
   \`\`\`bash
   npm run dev
   \`\`\`

6. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Admin Access

1. Navigate to [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
2. Enter the password you set in \`.env\` (default: \`ChewSole2025!SecureAdmin\`)
3. View leads and export CSV data

## Project Structure

\`\`\`
chewsole/
├── prisma/
│   ├── schema.prisma       # Database schema
│   └── seed.ts             # Database seed data
├── src/
│   ├── app/
│   │   ├── (pages)/        # Public pages
│   │   ├── admin/          # Admin dashboard
│   │   ├── api/            # API routes
│   │   ├── layout.tsx      # Root layout
│   │   └── globals.css     # Global styles
│   ├── components/
│   │   ├── ui/             # shadcn/ui components
│   │   ├── Hero.tsx
│   │   ├── Marquee.tsx
│   │   ├── FlavorCarousel.tsx
│   │   ├── ProductCard.tsx
│   │   ├── Nav.tsx
│   │   └── Footer.tsx
│   └── lib/
│       ├── db.ts           # Prisma client
│       ├── store.ts        # Zustand cart store
│       ├── validators.ts   # Zod schemas
│       └── rate-limit.ts   # Simple rate limiter
├── package.json
├── tailwind.config.ts
└── README.md
\`\`\`

## API Routes

### Public
- \`GET /api/products\` - Fetch all active products
- \`GET /api/products/[slug]\` - Fetch product by slug
- \`GET /api/slogans\` - Fetch active slogans
- \`POST /api/lead\` - Submit pre-launch lead (rate-limited)

### Admin (Password Protected)
- \`GET /api/admin/leads\` - Fetch all leads
- \`GET /api/lead/export\` - Export leads as CSV

## Database Schema

### OrderLead
Stores pre-launch interest submissions:
- Contact info (name, email, address)
- Cart snapshot (items, flavors, quantities)
- Consent acknowledgment

### Product
Product catalog with flavor options:
- Metadata (title, description, images)
- Pricing (display only, no charges)
- Flavor list (JSON array)

### Slogan
Marquee slogans with weighting:
- Text content
- Active/inactive toggle
- Weight for rotation priority

### SiteSettings
Global brand configuration:
- Brand name
- Accent color
- Hero video URL
- Feature toggles

## Scripts

\`\`\`bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run db:generate  # Generate Prisma client
npm run db:migrate   # Run database migrations
npm run db:seed      # Seed database with initial data
npm run db:studio    # Open Prisma Studio (database GUI)
\`\`\`

## Key Features Explained

### Lead Capture Flow
1. User browses products and adds items to cart
2. At checkout, user fills out contact + shipping info
3. Form validates with Zod schema
4. Rate limiter prevents abuse (10 requests/min per IP)
5. Lead stored in database with cart snapshot
6. Success modal confirms "pre-launch list" enrollment
7. Cart clears, user redirected to home

### Admin Dashboard
- Simple password authentication (sessionStorage)
- View all leads with stats (total, weekly, daily)
- Export leads to CSV for email marketing
- No CRUD for slogans/products (use Prisma Studio or seed)

### Satire & Ethics
- Clear disclaimers on all pages
- No demeaning content toward any group
- Safe slogans: "From China with chew" (origin reference, not derogatory)
- Privacy policy explains data is for demo only

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables:
   - \`DATABASE_URL\` (use Vercel Postgres or SQLite alternative)
   - \`ADMIN_PASSWORD\`
4. Deploy!

### Alternative Platforms
- **Netlify**: Use Netlify Functions for API routes
- **Cloudflare Pages**: Edge-compatible with Workers
- **Railway**: Deploy with Postgres add-on

> **Note**: SQLite is file-based and not ideal for serverless. For production, migrate to PostgreSQL or MySQL.

## License

This project is created for educational purposes. All brand names, product concepts, and satirical content are fictional.

## Acknowledgments

- Inspired by bold youth brands (5 Gum, Liquid Death, etc.)
- Built with modern React/Next.js best practices
- Design system powered by shadcn/ui
- Icons from Lucide
- Stock images from Unsplash

---

**Built with ❤️ and satire. Save the planet. Chew flip-flops.™**
