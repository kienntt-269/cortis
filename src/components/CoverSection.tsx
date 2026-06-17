"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ImageEntry } from "../lib/gallery-loader";

export default function CoverSection({ image }: { image?: ImageEntry }) {
  return (
    <section className="relative isolate min-h-screen overflow-hidden px-6 pb-24 pt-36 lg:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_15%),radial-gradient(circle_at_80%_20%,_rgba(147,51,234,0.14),_transparent_20%)]" />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="max-w-4xl text-6xl font-semibold leading-none tracking-[0.02em] text-white sm:text-7xl lg:text-8xl">
              Một góc nhỏ dành cho fan OT5
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-200/90 sm:text-xl">
              Hòa mình vào một album điện tử, nơi ảnh và chuyển động kể chuyện theo phong cách K-pop sang trọng.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#ot5"
              className="inline-flex items-center justify-center rounded-full bg-white/10 px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-fuchsia-500/10 transition hover:bg-white/15"
            >
              MỞ ALBUM
            </a>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-cyan-300/80" />
              Chill, dream, imagine
            </span>
          </div>
        </motion.div>

        {/* <div className="relative isolate mx-auto mt-12 max-w-6xl overflow-hidden rounded-[36px] border border-white/10 bg-white/5 shadow-2xl shadow-black/30 backdrop-blur-xl">
          {image ? (
            <motion.div
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="relative h-[560px] w-full"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </motion.div>
          ) : (
            <div className="h-[560px] bg-slate-950/40" />
          )}
        </div> */}
      </div>
    </section>
  );
}
