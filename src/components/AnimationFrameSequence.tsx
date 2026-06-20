'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface AnimationFrameSequenceProps {
  prefix: string;
  frameCount: number;
  fps?: number;
  className?: string;
  autoPlay?: boolean;
  startFrame?: number;
}

export default function AnimationFrameSequence({
  prefix,
  frameCount,
  fps = 24,
  className = 'w-full h-full',
  autoPlay = true,
  startFrame = 0,
}: AnimationFrameSequenceProps) {
  const [currentFrame, setCurrentFrame] = useState(startFrame);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frameCount);
    }, 1000 / fps);

    return () => clearInterval(interval);
  }, [isPlaying, frameCount, fps]);

  const frameNumber = String(currentFrame).padStart(4, '0');
  const framePath = `/animations/${prefix}_${frameNumber}.webp`;

  return (
    <div className={`relative ${className}`}>
      <Image
        src={framePath}
        alt={`Animation frame ${currentFrame}`}
        fill
        className="object-contain"
        priority={currentFrame === 0}
        unoptimized
      />
    </div>
  );
}
