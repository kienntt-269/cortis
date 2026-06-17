"use client";

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { ImageEntry } from "../lib/gallery-loader";

export default function OT5Collection({ images }: { images: ImageEntry[] }) {
  const [active, setActive] = useState(0);
  const slides = useMemo(() => images, [images]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  if (!slides.length) {
    return null;
  }

  return (
    <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-2 shadow-2xl shadow-slate-950/20 backdrop-blur-xl sm:p-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="relative"
      >
        <div className="relative mx-auto flex h-[72vh] min-h-[420px] w-full overflow-hidden rounded-[32px] bg-slate-950/40 md:max-w-5xl">
          {slides.map((image, index) => (
            <motion.div
              key={image.id}
              initial={false}
              animate={{ opacity: active === index ? 1 : 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
