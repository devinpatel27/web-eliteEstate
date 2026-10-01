"use client";

import type { ImageLoaderProps } from "next/image";

/**
 * Unsplash images are resized on Unsplash's own CDN (imgix), which avoids pulling
 * multi-megabyte originals through the Next.js optimizer. Local assets are served as-is.
 */
export default function imageLoader({ src, width, quality }: ImageLoaderProps) {
  if (src.startsWith("https://images.unsplash.com/")) {
    const url = new URL(src);
    url.searchParams.set("w", String(width));
    url.searchParams.set("q", String(quality ?? 72));
    url.searchParams.set("auto", "format");
    url.searchParams.set("fit", "max");
    return url.toString();
  }
  // Local brand assets are small and pre-sized; the width param only keeps srcset entries distinct.
  return `${src}?w=${width}`;
}
