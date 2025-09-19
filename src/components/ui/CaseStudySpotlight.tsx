import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type CaseStudy = {
  id: string;
  title: string;
  headline: string;
  bullets: string[];
  imageUrl: string;   // natural-looking photo slot (already in your tiles)
  ctaHref?: string;
  ctaLabel?: string;
};

const intervalMs = 7000; // best practice: 6–8s

export default function CaseStudySpotlight({ items, className="" }:{ items: CaseStudy[]; className?: string; }) {
  const [i, setI] = useState(0);
  const timer = useRef<number | null>(null);
  const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(()=>{
    if (reduced) return;
    const tick = () => setI(prev => (prev + 1) % items.length);
    timer.current = window.setInterval(tick, intervalMs);
    return () => { if (timer.current) window.clearInterval(timer.current); };
  }, [items.length, reduced]);

  const go = (next:number) => {
    if (timer.current) window.clearInterval(timer.current);
    setI(next);
  };

  return (
    <div className={`gradient-border ${className}`} onMouseEnter={()=>timer.current && window.clearInterval(timer.current)}>
      <div className="inner p-4 md:p-6 grid md:grid-cols-2 gap-6">
        <div className="order-2 md:order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={items[i].id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: reduced ? 0 : .4 }}
              className="space-y-3"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Case Study</p>
              <h3 className="text-2xl md:text-3xl font-bold">{items[i].headline}</h3>
              <ul className="list-disc pl-5 text-slate-700">
                {items[i].bullets.map((b, idx)=><li key={idx}>{b}</li>)}
              </ul>
              {items[i].ctaHref && (
                <a href={items[i].ctaHref} className="inline-flex mt-2 px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700">
                  {items[i].ctaLabel ?? "Read more"}
                </a>
              )}
            </motion.div>
          </AnimatePresence>
          <div className="mt-5 flex items-center gap-2">
            {items.map((_, idx)=>(
              <button key={idx} aria-label={`Show case study ${idx+1}`}
                onClick={()=>go(idx)}
                className={`h-2.5 w-2.5 rounded-full ${idx===i?"bg-blue-600":"bg-slate-300 hover:bg-slate-400"}`} />
            ))}
            <div className="ml-auto flex gap-2">
              <button onClick={()=>go((i-1+items.length)%items.length)} className="px-3 py-1.5 rounded-lg border">←</button>
              <button onClick={()=>go((i+1)%items.length)} className="px-3 py-1.5 rounded-lg border">→</button>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="overflow-hidden rounded-xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={items[i].imageUrl}
                src={items[i].imageUrl}
                alt=""
                className="w-full h-72 md:h-full object-cover"
                initial={{ scale: .98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.02, opacity: 0 }}
                transition={{ duration: reduced ? 0 : .5 }}
                loading="lazy"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}