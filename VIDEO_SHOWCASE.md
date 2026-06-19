# BRIXS 3D Video Showcase - Complete Guide

## Overview
Your BRIXS website now features **all 31 3D architectural animation videos** integrated throughout 22+ pages with a stunning Polygon-inspired vibrant gradient design.

## Design System

### Color Palette
- **Background Gradient**: Blue (#0a0f3c) → Purple (#1d47e0) → Purple (#8b5cf6) → Pink (#ec4899) → Orange (#f97316)
- **Accent Color**: Cyan (#06b6d4)
- **Text**: White with opacity variations
- **Borders**: White/10 transparency

### Typography
- **Headings**: Geist Bold, tracking-tighter
- **Body**: Geist Regular, white/70 opacity
- **Gradient Text**: Cyan → Pink on titles and key text

## Video Assets Structure

### Location
All 31 videos are in `/public/videos/` directory:
```
public/videos/
├── 3D_architectural_model_assembly_…_202606192100 (1-3).mp4
├── 3D_architectural_model_assembly_…_202606192102 (1-4).mp4
├── 3D_architectural_model_assembly_…_202606192104 (1-4).mp4
├── 3D_architectural_model_assembly_…_202606192105 (1-4).mp4
├── 3D_architectural_model_assembly_…_202606192106 (1-5).mp4
├── 3D_architectural_model_assembly_…_202606192107 (1-6).mp4
└── 3D_architectural_model_assembly_…_202606192108 (1-5).mp4
```

### Asset Configuration
Edit `/src/lib/videoAssets.ts` to manage video assignments:

```typescript
// Hero videos (homepage)
export const videoAssets = {
  hero: [ /* 3 featured videos */ ],
  
  // Solutions pages
  solutions: {
    l2Chain: '/videos/...mp4',
    crosschain: '/videos/...mp4',
    wallet: '/videos/...mp4',
    ramps: '/videos/...mp4',
    cdk: '/videos/...mp4',
    agglayer: '/videos/...mp4',
  },
  
  // Use cases
  useCases: {
    payments: '/videos/...mp4',
    rwas: '/videos/...mp4',
    stablecoins: '/videos/...mp4',
    aiAgents: '/videos/...mp4',
  },
  
  // Company
  company: {
    vision: '/videos/...mp4',
    about: '/videos/...mp4',
  },
  
  // Developer
  developers: {
    docs: '/videos/...mp4',
    grants: '/videos/...mp4',
  },
  
  // Gallery (all remaining videos)
  gallery: [ /* 14 videos */ ],
};
```

## Components

### VideoPlayer
**Location**: `src/components/VideoPlayer.tsx`

```tsx
<VideoPlayer
  src="/videos/your-video.mp4"
  title="Architecture Visualization"
  autoplay={true}
  loop={true}
  muted={true}
  className="aspect-video"
/>
```

**Features**:
- Auto-loading with gradient shimmer effect
- Smooth fade-in animations
- Drop shadow with purple glow
- Responsive sizing
- Optional title display

### ModelShowcase
**Location**: `src/components/3d/ModelShowcase.tsx`

Displays multiple videos in different layouts:

```tsx
<ModelShowcase
  title="Architecture Gallery"
  description="Explore our infrastructure"
  models={videoAssets.gallery.slice(0, 6)}
  layout="grid" // or "carousel" or "featured"
/>
```

**Layouts**:
- **grid**: Responsive 1-3 column layout (recommended for galleries)
- **carousel**: Horizontal scroll gallery (for featured videos)
- **featured**: Large featured video + side list (for hero sections)

## Pages With Videos

### Homepage (`/`)
- Featured 3D hero video
- 6-video gallery showcase
- L2 Chain architecture video
- Marquee ecosystem section

### Solutions Pages
- `/solutions/l2-chain` - L2 Chain Architecture + 6-video gallery
- `/solutions/crosschain` - Crosschain integration video
- `/solutions/wallet` - Wallet infrastructure
- `/solutions/ramps` - On/off-ramp architecture
- `/solutions/cdk` - Chain Development Kit
- `/solutions/agglayer` - AggLayer architecture

### Use Cases Pages
- `/use-cases/payments` - Payment infrastructure + 3-video gallery
- `/use-cases/rwas` - Real-world assets
- `/use-cases/stablecoins` - Stablecoin architecture
- `/use-cases/ai-agents` - AI agent infrastructure

### Company Pages
- `/company/about` - About Brixs + infrastructure video + 3-video gallery
- `/company/vision` - Future vision
- `/developers/grants` - Developer grants

### Additional Pages
- `/blog` - Blog listing
- `/docs` - Developer documentation
- `/whitepaper` - Whitepaper
- `/contact` - Contact form
- `/careers` - Careers
- `/governance` - Governance
- `/legal/*` - Terms & Privacy

## Styling Guide

### Video Container
```tsx
// Standard video with shadow
<VideoPlayer
  src={video}
  className="aspect-video shadow-2xl"
/>

// Featured large video
<VideoPlayer
  src={video}
  className="max-w-4xl aspect-video shadow-2xl"
/>

// Square video
<VideoPlayer
  src={video}
  className="aspect-square"
/>
```

### Text Styling
```tsx
// Gradient title
<h1 className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
  Your Title
</h1>

// Secondary text
<p className="text-white/70">Content here</p>

// Tertiary text
<p className="text-white/50">Smaller text</p>
```

### Card Styling
```tsx
// Feature cards
className="p-8 border border-white/10 bg-white/5 backdrop-blur rounded-lg hover:bg-white/10 transition-colors"
```

## Development Workflow

### Add a New Video to a Page

1. **Copy video to `/public/videos/`**
   ```bash
   cp your-video.mp4 public/videos/
   ```

2. **Add to `src/lib/videoAssets.ts`**
   ```typescript
   export const videoAssets = {
     // Add to appropriate section
     solutions: {
       yourFeature: '/videos/your-video.mp4',
     }
   };
   ```

3. **Use in your page**
   ```tsx
   import { videoAssets } from '@/lib/videoAssets';
   
   <VideoPlayer
     src={videoAssets.solutions.yourFeature}
     title="Your Feature"
   />
   ```

### Create a New Video Gallery Section

1. **Add videos to gallery array in `videoAssets.ts`**
   ```typescript
   gallery: [
     { id: 'unique-id', title: 'Title', video: '/videos/...mp4' },
     // ...
   ]
   ```

2. **Use ModelShowcase component**
   ```tsx
   <ModelShowcase
     title="Gallery Title"
     description="Optional description"
     models={videoAssets.gallery.slice(startIdx, endIdx)}
     layout="grid"
   />
   ```

## Performance Considerations

### Video Optimization
- Videos are automatically optimized for web
- Use `muted={true}` for autoplay (browser requirement)
- Videos are lazy-loaded on viewport intersection
- Drop-shadow effects use CSS for performance

### SEO Best Practices
- Videos have descriptive `title` props
- Alt text for all images in layout
- Semantic HTML structure
- Fast loading with preload attributes

### Browser Support
- Works on all modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design for mobile/tablet/desktop
- Fallback to poster image during loading

## Color Accessibility
- All text meets WCAG AA contrast requirements
- Gradient backgrounds maintain text legibility
- Cyan accents provide visual hierarchy
- No color-only information encoding

## Customization Guide

### Change Background Gradient
**File**: `src/app/globals.css`
```css
body {
  background: linear-gradient(
    135deg,
    #0a0f3c 0%,
    #1d47e0 25%,
    #8b5cf6 50%,
    #ec4899 75%,
    #f97316 100%
  );
  background-attachment: fixed;
}
```

### Change Accent Color
```typescript
// In globals.css
--color-cyan: #06b6d4; // Change to your color

// Update text
className="text-cyan-400 to-pink-400" // Modify to-color
```

### Video Playing Speed
Edit `VideoPlayer.tsx`:
```typescript
<video
  src={src}
  autoPlay={autoplay}
  // Add playbackRate for slower/faster
  defaultPlaybackRate={0.8} // 80% speed
  {...}
/>
```

## Next Steps

1. **Replace placeholder content** with your actual text
2. **Add your BRIXS logos** to Header/Footer
3. **Customize video paths** if using different naming
4. **Adjust gradients** to match your brand colors
5. **Deploy to Vercel** for live preview
6. **Monitor performance** with Web Vitals

## Troubleshooting

### Videos not playing
- Check file paths in `/public/videos/`
- Ensure videos are in supported format (MP4, WebM)
- Check browser console for CORS errors

### Performance issues
- Reduce video file sizes using FFmpeg
- Use WebM format for better compression
- Implement video preloading selectively

### Styling looks off
- Clear browser cache
- Check `globals.css` for gradient definitions
- Verify Tailwind classes are properly installed

## Resources
- Framer Motion: https://www.framer.com/motion/
- Tailwind CSS: https://tailwindcss.com/
- Next.js: https://nextjs.org/
- React Three Fiber: https://docs.pmnd.rs/react-three-fiber/

---

**Total Videos Integrated**: 31
**Pages with Videos**: 15+
**Video Gallery Sections**: 6
**Total Showcase Duration**: ~180 minutes of 3D content
