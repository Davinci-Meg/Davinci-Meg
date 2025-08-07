'use client';

import Image from 'next/image';
import { getBlurDataURL } from '@/lib/imageBlur';

interface ImageOptimizedProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
}

// 最適化された画像コンポーネント
export function ImageOptimized({
  src,
  alt,
  width = 400,
  height = 400,
  className = '',
  priority = false,
  sizes,
  quality = 75,
}: ImageOptimizedProps) {
  // サイズの自動計算
  const defaultSizes = sizes || '(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw';
  
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      priority={priority}
      placeholder="blur"
      blurDataURL={getBlurDataURL(src)}
      sizes={defaultSizes}
      quality={quality}
    />
  );
}