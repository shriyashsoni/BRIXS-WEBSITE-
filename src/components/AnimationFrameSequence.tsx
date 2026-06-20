'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface AnimationFrameSequenceProps {
  folderPath: string;
  frameCount: number;
  fps?: number;
  className?: string;
  autoPlay?: boolean;
}

export default function AnimationFrameSequence({
  folderPath,
  frameCount,
  fps = 24,
  className = 'w-full h-auto',
  autoPlay = true,
}: AnimationFrameSequenceProps) {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frameCount);
    }, 1000 / fps);

    return () => clearInterval(interval);
  }, [isPlaying, frameCount, fps]);

  const frameNumber = String(currentFrame).padStart(4, '0');
  const framePath = `${folderPath}/${folderPath.split('/').pop()}_${frameNumber}.webp`;

  return (
    <div className={`relative ${className}`}>
      <Image
        src={framePath}
        alt={`Animation frame ${currentFrame}`}
        fill
        className="object-contain"
        priority={currentFrame === 0}
      />
    </div>
  );
}
