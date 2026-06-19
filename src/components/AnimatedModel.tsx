"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedModelProps {
  src: string;
  alt?: string;
  className?: string;
  priority?: boolean;
}

export default function AnimatedModel({ src, alt = "3D Animated Model", className = "", priority = false }: AnimatedModelProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Ensure the video plays immediately if it's already ready
    if (videoRef.current && videoRef.current.readyState >= 3) {
      setIsLoaded(true);
      videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
    }
  }, []);

  const handleCanPlay = () => {
    setIsLoaded(true);
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.95 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative overflow-hidden flex items-center justify-center ${className}`}
    >
      {/* Loading Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/20 backdrop-blur-sm animate-pulse rounded-2xl border border-white/5">
          <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-white animate-spin"></div>
        </div>
      )}

      {/* The 3D Motion Graphic Video */}
      <video
        ref={videoRef}
        src={src}
        title={alt}
        autoPlay
        loop
        muted
        playsInline
        preload={priority ? "auto" : "metadata"}
        onCanPlay={handleCanPlay}
        className="w-full h-full object-cover rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.05)] border border-white/10 select-none pointer-events-none"
        style={{
          maskImage: "radial-gradient(ellipse at center, black 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 60%, transparent 100%)"
        }}
      />
    </motion.div>
  );
}
