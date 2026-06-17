"use client";

import { motion } from "framer-motion";

export default function FinalScene() {
  return (
    <section className="relative isolate overflow-hidden px-6 pb-24 pt-20 lg:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.08),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.08),_transparent_20%)]" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative mx-auto max-w-5xl rounded-[40px] border border-white/10 bg-white/5 px-8 py-20 shadow-2xl shadow-black/40 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="space-y-8 text-center"
        >
          <p className="text-xl font-semibold text-cyan-200/80">Kết quả nghiên cứu</p>
          <div className="space-y-4">
            <p className="text-3xl font-semibold text-white sm:text-4xl">...</p>
            {/* <p className="text-3xl font-semibold text-white sm:text-4xl">Vẫn chưa hiểu vì sao một người có thể thích Cortis nhiều đến vậy.</p>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-300/80">Pause. Nhưng có vẻ... Điều đó cũng khá thú vị 😌</p> */}
          </div>
          {/* <div className="mx-auto mt-6 flex max-w-md flex-col gap-4 rounded-[28px] border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-black/40">
            <p className="text-center text-sm uppercase tracking-[0.35em] text-fuchsia-300/80">To Be Continued...</p>
            <p className="text-center text-base leading-7 text-slate-300/80">Aurora vẫn đang lan tỏa. Ấn tượng đầu tiên là ảnh, còn câu chuyện thì đang chờ bạn khám phá tiếp.</p>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
