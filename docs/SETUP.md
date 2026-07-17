# Setup Instructions

## Prerequisites

- **Node.js 18+** and npm/yarn
- **Supabase Account** (Free tier available)
- **Google Gemini API Key**
- **Razorpay Account** (optional for payments)
- **Stripe Account** (optional for payments)

## 1. Clone the Repository

```bash
git clone https://github.com/Harsh-patel-dev/Ai_LMS.git
cd Ai_LMS
```

## 2. Install Dependencies

```bash
npm install
# or
yarn install
```

## 3. Setup Environment Variables

Create `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Fill in your environment variables:

### Supabase Configuration

1. Go to [Supabase](https://supabase.com)
2. Create a new project
3. Copy your `Project URL` and `Anon Key` from **Settings > API**
4. Add to `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Google Gemini API

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Add to `.env.local`:

```
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
```

### Razorpay (Optional)

1. Sign up at [Razorpay](https://razorpay.com)
2. Get API Keys from Dashboard
3. Add to `.env.local`:

```
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

### Stripe (Optional)

1. Sign up at [Stripe](https://stripe.com)
2. Get API Keys from Dashboard
3. Add to `.env.local`:

```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key
STRIPE_SECRET_KEY=your_stripe_secret
```

## 4. Setup Supabase Database

1. Go to your Supabase project dashboard
2. Click **SQL Editor**
3. Copy the entire content of `database/schema.sql`
4. Paste and run in SQL Editor
5. Click **Execute**

This will create all necessary tables and indexes.

## 5. Run Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 6. Demo Credentials

```
Email: demo@ailms.com
Password: demo123
Role: Student
```

## Folder Structure

```
src/
├── app/
│   ├── (auth)/           # Authentication pages
│   ├── (dashboard)/      # Dashboard layouts
│   ├── api/              # API routes
│   ├── student/          # Student pages
│   ├── teacher/          # Teacher pages
│   ├── admin/            # Admin pages
│   └── page.tsx          # Landing page
├── components/           # Reusable components
├── lib/                  # Utility functions
├── types/                # TypeScript types
└── styles/               # Global styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checker
- `npm run format` - Format code with Prettier

## Deployment

### Vercel Deployment

1. Push code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Click Deploy

### Docker Deployment

```bash
docker-compose up -d
```

## Troubleshooting

### Supabase Connection Error
- Verify `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Check Supabase project is running

### Gemini API Error
- Verify `NEXT_PUBLIC_GEMINI_API_KEY` is valid
- Check API quota in Google AI Studio

### Build Errors
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

## Support

For issues and questions:
- Create an issue on GitHub
- Email: support@ailms.com
- Discord: [Join our community]

---

**Happy Learning! 🚀**
