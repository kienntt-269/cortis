'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import type { ImageEntry } from "../lib/gallery-loader";
import MasonryGallery from "./MasonryGallery";

export default function MemberChapter({
  member,
  images,
  reverse = false,
}: {
  member: string;
  images: ImageEntry[];
  reverse?: boolean;
}) {
  const heroImage = images[0];
  const galleryImages = images.slice(1);

  return (
    <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 px-6 py-14 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(147,51,234,0.12),_transparent_15%),radial-gradient(circle_at_bottom_right,_rgba(58,180,255,0.1),_transparent_18%)]" />
      <div className="relative">
        <div className={`grid gap-10 lg:grid-cols-[1.3fr_1fr] ${reverse ? "lg:grid-cols-[1fr_1.3fr]" : ""}`}>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1 }}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/60 shadow-xl shadow-black/25"
          >
            {heroImage ? (
              <div className="relative h-[70vh] min-h-[420px]">
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 800px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-sm uppercase tracking-[0.35em] text-violet-200/80">Member Hero</p>
                  <h3 className="mt-2 text-5xl font-semibold tracking-[-0.03em] sm:text-6xl">{member}</h3>
                </div>
              </div>
            ) : (
              <div className="h-[70vh] bg-slate-950/50" />
            )}
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.1, delay: 0.1 }}
              className="max-w-xl"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-fuchsia-300/80">{member} COLLECTION</p>
              <p className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Bộ ảnh theo phong cách scrapbook, magazine và gallery tràn cảm hứng.
              </p>
            </motion.div>
            <MasonryGallery images={galleryImages} />
          </div>
        </div>
      </div>
    </section>
  );
}
