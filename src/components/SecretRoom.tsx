'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import type { ImageEntry } from "../lib/gallery-loader";
import LightboxViewer from "./LightboxViewer";

export default function SecretRoom({ images }: { images: ImageEntry[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const secretImages = useMemo(() => images.slice(0, 8), [images]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.18),_transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.16),_transparent_18%)]" />
      <div className="relative z-10 px-6 py-24 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="mx-auto max-w-5xl rounded-[40px] border border-white/10 bg-white/5 px-8 py-14 shadow-2xl shadow-black/40 backdrop-blur-xl"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-fuchsia-300/80">SECRET ROOM</p>
          <h1 className="mt-4 text-5xl font-semibold text-white sm:text-6xl">Rare photos, Exclusive gallery.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300/80">
            Phòng bí mật dành cho người đã mở khóa. Hình ảnh ở đây là phần thưởng nhỏ của fan project.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {secretImages.length > 0 ? (
            secretImages.map((image, index) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setOpenIndex(index)}
                className="group overflow-hidden rounded-[30px] border border-white/10 bg-slate-950/60 shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-80">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 text-left">
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-400/80">Exclusive</p>
                  <p className="mt-2 text-base font-medium text-white/90">{image.alt}</p>
                </div>
              </button>
            ))
          ) : (
            <div className="col-span-full rounded-[32px] border border-dashed border-white/20 bg-white/5 p-12 text-center text-slate-300">
              Không có ảnh bí mật trong thư mục <span className="text-white">public/images/secret</span>.
            </div>
          )}
        </motion.div>
      </div>
      {openIndex !== null ? (
        <LightboxViewer
          images={secretImages.map((image, idx) => ({ ...image, idx }))}
          initialIndex={openIndex}
          onClose={() => setOpenIndex(null)}
        />
      ) : null}
    </div>
  );
}
