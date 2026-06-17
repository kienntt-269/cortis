"use client";

import { motion } from "framer-motion";

const particlePositions = [
  { x: "5%", y: "10%", size: 1 },
  { x: "15%", y: "20%", size: 2 },
  { x: "25%", y: "8%", size: 1.5 },
  { x: "72%", y: "12%", size: 1.2 },
  { x: "82%", y: "32%", size: 3 },
  { x: "18%", y: "68%", size: 1.1 },
  { x: "55%", y: "77%", size: 1.8 },
  { x: "88%", y: "62%", size: 2.2 },
  { x: "40%", y: "42%", size: 1.6 },
];

export default function ParticleLayer() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {particlePositions.map((particle, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: [0.2, 0.8, 0.2], y: [0, 6, 0] }}
          transition={{ duration: 8 + index, repeat: Infinity, ease: "easeInOut" }}
          className="absolute rounded-full bg-white/20 shadow-[0_0_40px_rgba(147,92,255,0.24)]"
          style={{
            width: `${particle.size}rem`,
            height: `${particle.size}rem`,
            top: particle.y,
            left: particle.x,
            filter: "blur(1px)",
          }}
        />
      ))}
    </div>
  );
}
