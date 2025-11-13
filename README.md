# CyberAI - Advanced Cybersecurity AI Solutions

A sophisticated Next.js application for a cybersecurity AI startup featuring WebGL effects, modern dark theme design, and comprehensive MVC architecture.

## 🚀 Features

- **Modern UI**: Dark theme with purple/magenta gradients and WebGL effects
- **MVC Architecture**: Clean separation of concerns with controllers, models, and views
- **TypeScript**: Full type safety throughout the application
- **Three.js Integration**: Stunning 3D graphics and animations
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Fast loading with Next.js optimizations

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom cyber theme
- **3D Graphics**: Three.js with React Three Fiber
- **Animation**: Framer Motion
- **UI Components**: Custom components with Radix UI
- **Development**: ESLint, Prettier, Hot Reload

## 📁 Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components
│   ├── sections/       # Page sections
│   └── webgl/          # 3D graphics components
├── controllers/        # Business logic controllers
├── models/             # Data models and interfaces
├── views/              # Page view components
├── lib/                # Utility libraries
├── utils/              # Helper functions
├── types/              # TypeScript type definitions
└── styles/             # Global styles and themes
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cyberaiapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Design System

### Color Palette
- **Primary**: Purple gradient (#9333ea to #c026d3)
- **Secondary**: Magenta to pink (#c026d3 to #ec4899)
- **Background**: Dark gradient (#0f0f23 to #08081b)
- **Accent**: Cyber blue (#3b82f6)

### Components
- Glass morphism effects
- Cyber-themed borders and glows
- Animated gradients
- Interactive WebGL elements

## 📱 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

### Key Features

1. **WebGL Background**: Animated particle system
2. **3D Cyber Orb**: Interactive Three.js component
3. **Responsive Navigation**: Mobile-friendly header
4. **Feature Sections**: Animated content sections
5. **Cyber Theme**: Custom Tailwind configuration

## 🔧 Customization

### Adding New Components
1. Create component in `src/components/`
2. Export from appropriate index file
3. Import and use in views

### Modifying Theme
1. Update `tailwind.config.js` for colors
2. Modify `globals.css` for custom styles
3. Adjust WebGL colors in components

### Adding New Pages
1. Create route in `src/app/`
2. Build view component in `src/views/`
3. Add controller logic in `src/controllers/`

## 📊 Performance

- **Core Web Vitals**: Optimized for excellent scores
- **Bundle Size**: Minimal with code splitting
- **WebGL**: Efficient rendering with Three.js
- **Images**: Next.js Image optimization

## 🔒 Security

- **Type Safety**: Full TypeScript coverage
- **Input Validation**: Zod schema validation
- **Secure Headers**: Next.js security headers
- **Environment**: Secure environment variable handling

## 🌐 Deployment

### Vercel (Recommended)
1. Connect GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### Docker
```dockerfile
# Dockerfile included for containerization
docker build -t cyberaiapp .
docker run -p 3000:3000 cyberaiapp
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋 Support

For support, email support@cyberai.com or join our Slack channel.

---

**Built with ❤️ for the future of cybersecurity**