'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import type { ImageEntry } from "../lib/gallery-loader";
import LightboxViewer from "./LightboxViewer";

const rotations = ["-2deg", "1.5deg", "-3deg", "2deg", "-1deg", "3deg", "-2.5deg", "1deg"];

export default function MemoryWall({ images }: { images: ImageEntry[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const wallImages = useMemo(() => images.slice(0, 12), [images]);

  return (
    <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-slate-950/50 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.12),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.1),_transparent_18%)]" />
      <div className="relative z-10">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-fuchsia-200/80">MEMORY WALL</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            Một bức tường scrapbook của fan, nơi ảnh xoay nhẹ và tỏa sáng.
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {wallImages.map((image, index) => (
            <motion.button
              key={image.id}
              type="button"
              onClick={() => setOpenIndex(index)}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/20"
              style={{ transform: `rotate(${rotations[index % rotations.length]})` }}
            >
              <div className="relative h-72 overflow-hidden rounded-[24px] bg-slate-950/30">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            </motion.button>
          ))}
        </div>
      </div>
      {openIndex !== null ? (
        <LightboxViewer
          images={wallImages.map((image, idx) => ({ ...image, idx }))}
          initialIndex={openIndex}
          onClose={() => setOpenIndex(null)}
        />
      ) : null}
    </div>
  );
}
