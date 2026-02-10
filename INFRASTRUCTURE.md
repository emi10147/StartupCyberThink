# Infrastructure & Performance Guide

## Project Overview
- **Framework**: Next.js 14.0.3 with TypeScript
- **Styling**: Tailwind CSS 3.3.5 with PostCSS
- **Animations**: Framer Motion 10.16.5
- **3D Graphics**: Three.js 0.168.0 with React Three Fiber
- **Build Output**: Static Export (SSG)

## Performance Optimizations

### Enabled Features
✅ SWC Minification (fastest bundler)
✅ Compression enabled
✅ Source maps disabled in production
✅ No powered-by header (security)
✅ Image optimization (unoptimized for local assets)
✅ WebGL and Three.js optimizations
✅ Tree-shaking and code splitting

### Security Headers
- X-Content-Type-Options: nosniff
- X-Frame-Options: SAMEORIGIN
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

## Build & Deploy

### Local Development
```bash
npm install
npm run dev
# Server runs on http://localhost:3000
```

### Production Build
```bash
npm run build
npm start
# Creates optimized static export
```

### Type Checking
```bash
npm run type-check
# Validates all TypeScript before deployment
```

## Code Quality Standards

### TypeScript Configuration
- Strict mode enabled
- No unused variables
- Proper type inference
- Module resolution: bundler

### Linting
- ESLint enabled (Next.js config)
- Prettier formatting configured
- Path aliases set up (@/* mappings)

## File Structure
```
src/
├── app/               # Next.js app router pages
├── components/        # React components
│   ├── sections/     # Page sections
│   ├── ui/           # Reusable UI components
│   └── webgl/        # WebGL/Three.js components
├── views/            # View components (MVC pattern)
├── controllers/      # Business logic
├── models/          # Data models
├── lib/             # Utilities
├── types/           # TypeScript types
├── utils/           # Helper functions
└── styles/          # Global styles
```

## Best Practices

### Component Organization
- Use 'use client' directive for client components
- Keep components focused and single-responsibility
- Use TypeScript for type safety
- Lazy load heavy components when possible

### Performance
- Minimize re-renders with proper memo/useMemo
- Use Framer Motion for smooth animations
- Optimize images and assets
- Code-split at route level

### Styling
- Use Tailwind CSS for consistency
- Follow dark theme design system
- Use CSS variables for dynamic values
- Apply text-shadow for text effects

## Monitoring

### Key Metrics to Track
- Bundle size (target: <500KB gzipped)
- Lighthouse score (target: >90)
- First Contentful Paint (FCP) <2s
- Largest Contentful Paint (LCP) <2.5s
- Cumulative Layout Shift (CLS) <0.1

### Before Production Deployment
1. ✅ Run `npm run type-check`
2. ✅ Run `npm run lint`
3. ✅ Run `npm run build`
4. ✅ Test all pages locally
5. ✅ Verify animations are smooth
6. ✅ Check mobile responsiveness
7. ✅ Test on slower network (DevTools)
8. ✅ Verify security headers

## Deployment Checklist

- [ ] Type checking passes
- [ ] Build completes without errors
- [ ] No console errors or warnings
- [ ] All routes working
- [ ] Animations smooth (60fps)
- [ ] Mobile responsive
- [ ] Accessibility verified
- [ ] Performance acceptable
- [ ] Security headers present
- [ ] Environment variables configured
- [ ] Analytics configured (if needed)
- [ ] CDN configured (if applicable)

## Environment Variables

Create `.env.local`:
```
NEXT_PUBLIC_APP_NAME=TotalCISO
NEXT_PUBLIC_APP_URL=https://yourdomain.com
```

## Production Notes

- The app exports as static HTML/CSS/JS
- No server-side processing needed
- Can be deployed to any static host (Vercel, Netlify, AWS S3+CloudFront, etc.)
- All data is client-side only
- WebGL performance depends on GPU (degrades gracefully)

## Troubleshooting

### Build Errors
- Clear `.next` folder: `rm -r .next`
- Reinstall dependencies: `rm -r node_modules && npm install`
- Type check: `npm run type-check`

### Runtime Errors
- Check browser console for errors
- Verify all imports are correct
- Check for missing dependencies
- Clear browser cache and hard refresh

### Performance Issues
- Use Chrome DevTools Performance tab
- Profile with Lighthouse
- Check for memory leaks
- Monitor GPU usage for 3D graphics
