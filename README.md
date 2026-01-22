# FENIX PLUS SA - Marketing Website

Production-ready marketing website for FENIX PLUS SA construction company in Lausanne, Switzerland.

## Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **i18n** (French/English) with language toggle
- **SEO optimized** with metadata and JSON-LD schema
- **Mobile-first** responsive design
- **Accessible** components
- **Form handling** with local storage and SMTP integration path
- **Image optimization** with Next.js Image component
- **Sticky mobile CTA bar**

## Project Structure

```
├── app/
│   ├── (components)/          # Reusable components
│   ├── (i18n)/ # Translation utilities
│   ├── (types)/              # TypeScript types
│   ├── [locale]/             # Localized routes
│   │   ├── page.tsx          # Home page
│   │   ├── services/
│   │   ├── projects/
│   │   ├── about/
│   │   ├── contact/
│   │└── legal/
│   ├── api/
│   │└── submit-quote/route.ts  # Quote submission API
│   ├── layout.tsx            # Root layout
│   └── not-found.tsx
├── public/
│└── images/               # Static images
├── data/
│   ├── projects.ts           # Sample projects data
│   ├── testimonials.ts       # Testimonials data
│   └── services.ts           # Services data
├── components/
│   ├── ui/                   # UI components
│   └── layout/               # Layout components
└── docs/
    ├── sitemap.xml           # Generated sitemap
    └── robots.txt            # Robots configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create environment file:
```bash
cp .env.example .env.local
```

3. Configure environment variables in `.env.local`

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Deployment on Vercel

### Option 1: Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

### Option 2: Vercel Dashboard

1. Push to GitHub
2. Import project in Vercel dashboard
3. Configure environment variables in Vercel settings
4. Deploy

### Environment Variables for Vercel

Add these in Vercel dashboard → Settings → Environment Variables:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=noreply@fenix-plus-sa.ch
SMTP_TO=contact@fenix-plus-sa.ch
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME=FENIX PLUS SA
```

## Environment Variables

### Required for Email Integration

- `SMTP_HOST`: SMTP server host
- `SMTP_PORT`: SMTP server port (usually 587)
- `SMTP_USER`: SMTP username
- `SMTP_PASS`: SMTP password/app password
- `SMTP_FROM`: Sender email address
- `SMTP_TO`: Recipient email address

### Optional

- `NEXT_PUBLIC_SITE_URL`: Your production URL (for SEO)
- `NEXT_PUBLIC_SITE_NAME`: Site name
- `FORM_STORAGE_PATH`: Local storage path (development only)

## Email Integration

### Development Mode

In development, form submissions are saved to `form-submissions.json` locally.

### Production Mode

To enable email notifications:

1. Set up SMTP credentials in environment variables
2. The API route at `/api/submit-quote` will:
   - Validate form data
   - Save to local storage (dev) OR send email (prod)
   - Return success/error response

### Gmail Setup

1. Enable 2-Factor Authentication
2. Generate App Password:
   - Go to Google Account → Security
   - Under "Signing in to Google" → App passwords
   - Create new app password
3. Use app password as `SMTP_PASS`

## SEO & Metadata

Each page includes:

- Custom meta title and description
- Open Graph tags for social sharing
- JSON-LD LocalBusiness schema
- Canonical URLs

### Sitemap & Robots

Generated automatically by Next.js. Access at:
- `/sitemap.xml`
- `/robots.txt`

## Accessibility

- Semantic HTML5
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliant (WCAG AA)
- Focus indicators

## Performance Optimization

- **Images**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic with Next.js
- **Server Components**: Used where possible
- **Minimal JavaScript**: Only what's necessary
- **CSS**: Tailwind with purging

## Content Management

### Update Projects

Edit `data/projects.ts`

### Update Testimonials

Edit `data/testimonials.ts`

### Update Services

Edit `data/services.ts`

## Support

For issues or questions, please contact the development team.

## License

Proprietary - FENIX PLUS SA