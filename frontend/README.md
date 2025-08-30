# FarmRent Frontend

A modern farm equipment rental platform built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm 8+

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🎨 Features

- **Modern UI**: Emerald glass morphism design with dark mode support
- **Responsive**: Mobile-first responsive design
- **TypeScript**: Full type safety
- **Performance**: Optimized with Vite and code splitting
- **Accessibility**: WCAG compliant with keyboard navigation
- **State Management**: Zustand for global state
- **Animations**: Smooth transitions with Framer Motion

## 🛠 Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom utilities
- **Routing**: React Router DOM
- **State Management**: Zustand
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Route pages
├── data/          # Mock data and types
├── store/         # Zustand state management
├── lib/           # Utility functions
└── App.tsx        # Main application component
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**
   - Push your code to GitHub/GitLab
   - Connect your repository to Vercel

2. **Automatic Deployment**
   - Vercel will automatically detect the Vite configuration
   - Build command: `npm run build`
   - Output directory: `dist`

3. **Environment Variables** (if needed)
   - Add any environment variables in Vercel dashboard
   - Example: `VITE_API_URL=https://your-api.com`

4. **Custom Domain** (optional)
   - Add your custom domain in Vercel dashboard
   - Configure DNS settings

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel**
   ```bash
   npx vercel --prod
   ```

### Other Platforms

The application can also be deployed to:
- **Netlify**: Use the same build settings
- **GitHub Pages**: Requires base path configuration
- **AWS S3 + CloudFront**: Static hosting
- **Firebase Hosting**: Google's hosting platform

## 🎨 Customization

### Colors & Theme
Edit `tailwind.config.js` to customize:
- Primary color palette
- Glass morphism effects
- Dark mode colors

### Components
All components are in `src/components/` with TypeScript props:
- `Navbar.tsx` - Main navigation
- `Footer.tsx` - Site footer
- `EquipmentCard.tsx` - Equipment display cards
- `FiltersSidebar.tsx` - Filter interface

### Data
Update `src/data/equipments.ts` to add:
- New equipment items
- Categories
- Cities

## 🔧 Development

### Type Checking
```bash
npm run type-check
```

### Linting
```bash
npm run lint
```

### Adding Dependencies
```bash
npm install package-name
```

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- High contrast ratios

## 🚀 Performance

- Code splitting with Vite
- Lazy loading of routes
- Optimized images
- Minimal bundle size
- Fast loading times

## 📄 License

MIT License - see LICENSE file for details

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support, email support@farmrent.com or create an issue in the repository.
