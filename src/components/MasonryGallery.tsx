'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import type { ImageEntry } from "../lib/gallery-loader";
import { useMemo, useState } from "react";
import LightboxViewer from "./LightboxViewer";

export default function MasonryGallery({ images }: { images: ImageEntry[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const galleryItems = useMemo(() => {
    return images.map((image, index) => ({ ...image, idx: index }));
  }, [images]);

  return (
    <div className="relative">
      <div className="columns-1 gap-5 lg:columns-2 xl:columns-3">
        {galleryItems.map((image) => (
          <motion.button
            key={image.id}
            type="button"
            onClick={() => setActiveIndex(image.idx)}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.25 }}
            className="group mb-5 w-full cursor-pointer overflow-hidden rounded-[30px] border border-white/10 bg-slate-950/60 shadow-lg shadow-black/20 transition-all duration-300"
          >
            <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[5/6]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>
          </motion.button>
        ))}
      </div>
      {activeIndex !== null ? (
        <LightboxViewer
          images={galleryItems}
          initialIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
        />
      ) : null}
    </div>
  );
}
