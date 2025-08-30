# FarmRent - Equipment Rental Platform

A modern, responsive equipment rental platform built with React, TypeScript, and Tailwind CSS. Features a beautiful emerald/green glass theme with smooth animations and comprehensive filtering capabilities.

## 🎨 UI Theme & Design

### Glass Morphism Design
- **Glass Effect**: Frosted background with translucency using `backdrop-blur-md`
- **Color Palette**: Emerald/green brand colors with subtle gradients
- **Dark Mode**: Class-based strategy with automatic theme switching
- **Animations**: Framer Motion for smooth page transitions and hover effects

### Custom Tailwind Utilities
The theme includes custom utilities defined in `tailwind.config.js`:

```css
.glass → rounded-2xl shadow-xl backdrop-blur-md bg-white/50 border border-white/30
.focus-ring → focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/70
.glass-card → glass p-6 hover:shadow-2xl transition-all duration-300
.glass-button → focus-ring bg-emerald-500/90 hover:bg-emerald-600/90 text-white
```

### Theme Customization
To modify the theme colors, edit the CSS variables in `src/index.css`:
```css
:root {
  --color-primary-50: 236 253 245;
  --color-primary-100: 209 250 229;
  /* ... more color variables */
}
```

## 🚀 Features

### Core Functionality
- **Equipment Catalog**: Browse 50+ items across 9 categories
- **Advanced Filtering**: Category, price range, age suitability, equipment age, condition, city, rating
- **Search & Sort**: Real-time search with multiple sorting options
- **Shopping Cart**: Add items with date selection and quantity
- **Responsive Design**: Mobile-first approach with collapsible filters

### Pages & Components
- **Home**: Hero section, category highlights, trending rentals
- **Equipment Catalog**: Grid/list view with comprehensive filters
- **Equipment Detail**: Image gallery, specifications, booking form
- **Cart & Checkout**: Item management with totals and tax calculation
- **Authentication**: Login/Signup with OAuth placeholders
- **About & Contact**: Company information with FAQ accordion

### Technical Features
- **State Management**: Zustand for cart and filters with persistence
- **Routing**: React Router with animated transitions
- **TypeScript**: Full type safety throughout the application
- **Accessibility**: Semantic HTML, keyboard navigation, ARIA labels
- **Performance**: Optimized images, lazy loading, efficient filtering

## 🛠️ Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd farmrent
   ```

2. **Install dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production
```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.tsx      # Navigation with glass effect
│   │   ├── Footer.tsx      # Footer with links
│   │   ├── Hero.tsx        # Homepage hero section
│   │   ├── EquipmentCard.tsx # Equipment display card
│   │   └── FiltersSidebar.tsx # Collapsible filters
│   ├── pages/              # Page components
│   │   ├── Home.tsx        # Landing page
│   │   ├── Equipments.tsx  # Catalog with filters
│   │   ├── EquipmentDetail.tsx # Single item view
│   │   ├── Cart.tsx        # Shopping cart
│   │   ├── About.tsx       # Company information
│   │   ├── Contact.tsx     # Contact form & FAQ
│   │   ├── Login.tsx       # Authentication
│   │   └── Signup.tsx      # User registration
│   ├── data/               # Mock data
│   │   └── equipments.ts   # Equipment catalog data
│   ├── store/              # State management
│   │   └── store.ts        # Zustand store
│   ├── lib/                # Utilities
│   │   └── utils.ts        # Helper functions
│   ├── App.tsx             # Main app with routing
│   └── main.tsx            # Entry point
├── tailwind.config.js      # Tailwind configuration
├── index.css               # Global styles & theme
└── package.json            # Dependencies
```

## 🎯 Key Technologies

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling with custom utilities
- **Framer Motion** - Animations
- **React Router** - Client-side routing
- **Zustand** - State management
- **Lucide React** - Icons
- **Vite** - Build tool

## 🎨 Customization Guide

### Adding New Equipment Categories
1. Update `src/data/equipments.ts` with new category
2. Add category to the `categories` array
3. Update filter logic in `FiltersSidebar.tsx`

### Modifying the Glass Theme
1. **Colors**: Edit CSS variables in `src/index.css`
2. **Glass Effect**: Modify `.glass` utility in `tailwind.config.js`
3. **Animations**: Update Framer Motion variants in components

### Adding New Pages
1. Create page component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navigation in `src/components/Navbar.tsx`

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px (collapsible filters)
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Development

### Code Style
- TypeScript strict mode enabled
- ESLint configuration for code quality
- Prettier for consistent formatting

### Performance Optimizations
- Lazy loading for images
- Memoized filtering and sorting
- Efficient state updates with Zustand
- Optimized bundle size with Vite

## 🚀 Deployment

The application can be deployed to any static hosting service:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting service

### Recommended Hosting
- Vercel (recommended)
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support or questions, please contact:
- Email: hello@farmrent.com
- Phone: +1 (555) 123-4567
- Live Chat: Available 24/7 on the website
