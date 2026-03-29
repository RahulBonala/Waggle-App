# Waggle India - Trusted Pet Care Platform

Waggle India is a pet care marketplace that connects pet parents with verified sitters, walkers, and groomers across Indian cities. Built with a mobile-first, modern UI for seamless booking and live tracking.

## Tech Stack

- **Framework**: React 19 + TypeScript (strict mode)
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **State Management**: Zustand
- **Routing**: React Router v7
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Carousel**: Swiper
- **Notifications**: React Hot Toast

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9

### Installation

```bash
git clone <repository-url>
cd Waggle-App
npm install
```

### Environment Variables

Copy the example environment file and fill in your values:

```bash
cp .env.example .env.local
```

See `.env.example` for all available variables.

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting & Type Checking

```bash
npm run lint          # ESLint
npm run lint:fix      # ESLint with auto-fix
npm run type-check    # TypeScript type checking
```

## Project Structure

```
src/
├── assets/          # Static assets (images, SVGs)
├── components/      # Reusable UI components
│   ├── AuthModal    # Authentication flow modal
│   ├── BookingCard  # Booking display card
│   ├── Button       # Primary button component
│   ├── Footer       # App footer
│   ├── Input        # Form input component
│   ├── Modal        # Generic modal wrapper
│   ├── Navbar       # Navigation bar
│   └── ...
├── data/            # Mock data for development
├── pages/           # Route page components
│   ├── LandingPage  # Public landing page
│   ├── Dashboard    # User dashboard
│   ├── SearchResults# Sitter search
│   ├── SitterProfile# Sitter detail page
│   ├── Checkout     # Booking checkout
│   ├── Tracking     # Live walk tracking
│   └── ...
├── store/           # Zustand state management
├── App.tsx          # Root component with routing
├── main.tsx         # Entry point
└── index.css        # Global styles & Tailwind config
```

## Deployment

Build the production bundle:

```bash
npm run build
```

The output is in the `dist/` directory, ready for deployment to any static hosting service (Vercel, Netlify, AWS S3 + CloudFront, etc.).

## License

Private - All rights reserved, Waggle India Solutions Private Limited.
