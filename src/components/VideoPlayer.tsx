'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface VideoPlayerProps {
  src: string;
  title?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  className?: string;
}

export function VideoPlayer({
  src,
  title,
  autoplay = true,
  loop = true,
  muted = true,
  controls = false,
  className = '',
}: VideoPlayerProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`relative w-full ${className}`}
    >
      <div className="relative rounded-lg overflow-hidden backdrop-blur-md border border-white/20 bg-white/5">
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 animate-pulse" />
        )}
        <video
          src={src}
          autoPlay={autoplay}
          loop={loop}
          muted={muted}
          controls={controls}
          onLoadedData={() => setIsLoaded(true)}
          className="w-full h-auto block"
          style={{ filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.3))' }}
        />
      </div>
      {title && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-center text-lg font-semibold text-white/90"
        >
          {title}
        </motion.p>
      )}
    </motion.div>
  );
}
