'use client';

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const loadingSteps = [
  "Đang tìm kiếm fan Cortis...",
  "Đang quét dữ liệu...",
  "Đang xác định Bias...",
  "Đang xác định Bias...",
  "Đang xác định Bias...",
  "Lỗi hệ thống",
  "OT5 được phát hiện",
  "Đang mở album...",
];

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setStep((value) => Math.min(value + 1, loadingSteps.length - 1));
    }, 900);

    const timeout = window.setTimeout(() => {
      setVisible(false);
    }, 8000);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(timeout);
    };
  }, []);

  const currentText = loadingSteps[Math.min(step, loadingSteps.length - 1)];

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7 } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#020617] text-white"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mx-4 max-w-2xl rounded-[32px] border border-white/10 bg-white/5 px-8 py-10 text-center shadow-2xl shadow-violet-500/10 backdrop-blur-xl"
          >
            <div className="mb-8 text-sm uppercase tracking-[0.35em] text-violet-200/90">
              FAN ALBUM
            </div>
            <div className="text-2xl font-semibold text-white sm:text-3xl">
              {currentText}
            </div>
            <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-fuchsia-400 via-violet-500 to-sky-400"
                initial={{ width: "0%" }}
                animate={{ width: `${((step + 1) / loadingSteps.length) * 100}%` }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
