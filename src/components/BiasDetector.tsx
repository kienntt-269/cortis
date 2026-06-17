'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import type { ImageEntry } from "../lib/gallery-loader";

const captions = [
  "Bias là ai?",
  "Kiểm tra cảm xúc fan",
  "Kết quả sẽ hiện ngay sau lựa chọn",
];

export default function BiasDetector({ images }: { images: ImageEntry[] }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const members = useMemo(() => {
    return images.reduce<Record<string, ImageEntry>>((acc, image) => {
      if (!acc[image.group]) acc[image.group] = image;
      return acc;
    }, {} as Record<string, ImageEntry>);
  }, [images]);

  const handleChoose = (group: string) => {
    setSelected(group);
    setShowResult(true);
  };

  return (
    <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.14),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.12),_transparent_18%)]" />
      <div className="relative z-10 grid gap-8">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.35em] text-fuchsia-300/80">BIAS DETECTOR</p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">{captions[0]}</h2>
          <p className="max-w-2xl text-base leading-8 text-slate-300/80">Chọn ngay thành viên mà bạn cảm thấy "bias" nhất trong ngày hôm nay.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(members).map(([key, image]) => (
            <motion.button
              key={key}
              type="button"
              onClick={() => handleChoose(key)}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/60 p-0 text-left shadow-xl shadow-black/20"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
            </motion.button>
          ))}
        </div>

        {showResult && selected ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-[32px] border border-white/10 bg-black/60 p-8 text-center shadow-2xl shadow-black/40"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-fuchsia-300/80">OT5 DETECTED</p>
            <h3 className="mt-4 text-4xl font-semibold text-white">ALL MEMBERS COLLECTED</h3>
            <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-slate-300/80">
              Bias của bạn là <span className="font-semibold text-white capitalize">{selected}</span>. Bạn đã unlock thành tựu fan mới.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["✨", "🎉", "💜", "🌌"].map((emoji, index) => (
                <span key={index} className="text-2xl">{emoji}</span>
              ))}
            </div>
          </motion.div>
        ) : null}
      </div>
    </div>
  );
}
