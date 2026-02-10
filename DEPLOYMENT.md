# Deployment Guide - TotalCISO CyberAI

## Pre-Production Checklist

### Code Quality
- [ ] Run `npm run type-check` - No TypeScript errors
- [ ] Run `npm run lint` - No linting errors
- [ ] All imports are used (no dead code)
- [ ] No console.log statements in production code
- [ ] No TODO or FIXME comments left in critical code

### Testing
- [ ] All pages load without errors
- [ ] All animations run smoothly (60fps)
- [ ] No memory leaks detected
- [ ] All interactive elements respond correctly
- [ ] Mobile responsiveness verified

### Performance
- [ ] Bundle size < 500KB gzipped
- [ ] Lighthouse score > 90
- [ ] First Contentful Paint < 2s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1

### Security
- [ ] No sensitive data in client code
- [ ] No API keys exposed
- [ ] XSS vulnerabilities checked
- [ ] CSRF protection in place (if needed)
- [ ] Dependencies up to date with no known vulnerabilities

### Configuration
- [ ] Environment variables configured
- [ ] Metadata correct (title, description, OG tags)
- [ ] Favicon set
- [ ] robots.txt configured
- [ ] sitemap.xml configured

## Build Process

### Local Build
```bash
# Clean previous build
rm -r .next out

# Install dependencies (if needed)
npm install

# Type check
npm run type-check

# Lint
npm run lint

# Build
npm run build

# Output will be in 'out/' directory
# All files are static HTML/CSS/JS - ready for deployment
```

### Build Output Structure
```
out/
├── index.html               # Home page
├── transformation/index.html # Transformation page
├── platform/index.html       # Platform page
├── security/index.html       # Security page
├── compare/index.html        # Compare page
├── overview/index.html       # Overview page
├── _next/                    # Next.js assets
│   ├── static/
│   │   ├── chunks/
│   │   ├── css/
│   │   └── images/
│   └── data/
└── public/                   # Public assets
    └── data/                 # CSV and image files
```

## Deployment Options

### Option 1: Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```
- Automatically handles Next.js
- Free tier available
- SSL/HTTPS automatic
- CDN included
- Custom domain support

### Option 2: Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=out
```
- Drag-and-drop deployment available
- Free tier available
- Automatic HTTPS
- Custom domain support

### Option 3: AWS S3 + CloudFront
```bash
# Build
npm run build

# Sync to S3
aws s3 sync out/ s3://your-bucket-name --delete

# CloudFront will serve from S3 with caching
```

### Option 4: Traditional Web Server
```bash
# Build
npm run build

# Copy 'out' directory to your web server
# Configure web server to serve index.html for routes

# Nginx example:
# location / {
#     try_files $uri $uri/ /index.html;
# }

# Apache example:
# <IfModule mod_rewrite.c>
#   RewriteEngine On
#   RewriteBase /
#   RewriteRule ^index\.html$ - [L]
#   RewriteCond %{REQUEST_FILENAME} !-f
#   RewriteCond %{REQUEST_FILENAME} !-d
#   RewriteRule . /index.html [L]
# </IfModule>
```

## Security Headers Configuration

Since we're using static export, configure these headers on your hosting platform:

### Nginx Configuration
```nginx
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';" always;
```

### Vercel Configuration (vercel.json)
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ]
}
```

### Netlify Configuration (netlify.toml)
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "SAMEORIGIN"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

## Environment Variables

Create `.env.local` in production environment:
```
NEXT_PUBLIC_APP_NAME=TotalCISO
NEXT_PUBLIC_APP_URL=https://yourdomain.com
```

## Post-Deployment Verification

After deploying to production:

1. **Load Test**
   - [ ] Homepage loads
   - [ ] All pages are accessible
   - [ ] Navigation works
   - [ ] Animations play smoothly

2. **Browser Compatibility**
   - [ ] Chrome/Edge (latest)
   - [ ] Firefox (latest)
   - [ ] Safari (latest)
   - [ ] Mobile browsers

3. **Performance Verification**
   - [ ] Run Lighthouse audit
   - [ ] Check Google PageSpeed Insights
   - [ ] Monitor Core Web Vitals

4. **Security Verification**
   - [ ] Run security headers check (securityheaders.com)
   - [ ] Verify HTTPS is enforced
   - [ ] Check certificate validity

5. **Analytics** (if configured)
   - [ ] Verify tracking is working
   - [ ] Check event reporting
   - [ ] Validate user data collection

## Rollback Procedure

If issues occur after deployment:

1. **Vercel**: Automatic rollback available in deployments
2. **Netlify**: Use "rollback" option in deploy history
3. **S3/CloudFront**: Sync previous version back to S3
4. **Traditional Server**: Restore previous version from backup

## Monitoring

### Essential Monitoring
- [ ] Uptime monitoring (UptimeRobot, etc.)
- [ ] Error tracking (Sentry, LogRocket)
- [ ] Performance monitoring (New Relic, Datadog)
- [ ] User analytics (Google Analytics, Mixpanel)

### Key Metrics
- Page load time
- Core Web Vitals
- Error rate
- User engagement
- Bounce rate

## Maintenance

### Regular Tasks
- [ ] Monitor error logs
- [ ] Review performance metrics
- [ ] Update dependencies monthly
- [ ] Security audits quarterly
- [ ] Backup configuration files

### Dependency Updates
```bash
# Check for outdated packages
npm outdated

# Update packages
npm update

# For major updates (be careful!)
npm install package@latest
npm run build  # Test before deploying
```

## Troubleshooting Deployment Issues

### Build Fails
1. Check `npm run type-check` output
2. Check `npm run lint` output
3. Verify all dependencies installed: `npm install`
4. Clear cache: `rm -r .next node_modules && npm install`

### Pages Not Loading
1. Verify trailing slashes are handled
2. Check for 404 errors in browser console
3. Verify public assets are deployed
4. Check web server routing configuration

### Slow Performance
1. Check bundle size: `npm run build`
2. Analyze with Lighthouse
3. Check CDN caching configuration
4. Monitor server CPU/memory usage

### Security Issues
1. Run vulnerability scan: `npm audit`
2. Fix identified issues: `npm audit fix`
3. Verify headers are correct
4. Check SSL certificate validity

## Support & Escalation

For issues contact:
- Vercel Support: https://vercel.com/support
- Netlify Support: https://www.netlify.com/support/
- AWS Support: https://aws.amazon.com/support/
- Your hosting provider's support team

## Success Criteria

✅ Deployment is successful when:
- All pages load without errors
- All animations run smoothly
- Performance metrics are acceptable
- No console errors
- Security headers present
- Mobile responsive
- All features working
- Analytics reporting correctly
