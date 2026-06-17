'use client';

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { createPortal } from "react-dom";
import { useEffect, useMemo, useState } from "react";
import type { ImageEntry } from "../lib/gallery-loader";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

export default function LightboxViewer({
  images,
  initialIndex,
  onClose,
}: {
  images: (ImageEntry & { idx: number })[];
  initialIndex: number;
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const currentImage = useMemo(() => images[currentIndex], [currentIndex, images]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") setCurrentIndex((value) => Math.min(value + 1, images.length - 1));
      if (event.key === "ArrowLeft") setCurrentIndex((value) => Math.max(value - 1, 0));
    }

    window.addEventListener("keydown", handleKeyDown);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [images.length, onClose]);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const lightboxContent = (
    <AnimatePresence>
      <motion.div
        key="lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl"
      >
        <motion.div
          initial={{ y: 40, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 20, opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative h-full w-full overflow-hidden rounded-[32px] border border-white/10 bg-black"
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/15"
            aria-label="Close lightbox"
          >
            <X size={18} />
          </button>

          <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-black">
            {currentImage ? (
              <div className="relative h-full w-full">
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 1200px"
                  style={{ objectPosition: "center center" }}
                />
              </div>
            ) : null}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  return createPortal(lightboxContent, document.body);
}

