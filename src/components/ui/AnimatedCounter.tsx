import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useMotionValue, animate } from "framer-motion";

export default function AnimatedCounter({ from=0, to, suffix="", duration=1.2, className="" }:{
  from?: number; to: number; suffix?: string; duration?: number; className?: string;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, margin: "0px 0px -20% 0px" });
  const mv = useMotionValue(from);
  useEffect(()=>{
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { mv.set(to); return; }
    const controls = animate(mv, to, { duration, ease: "easeOut" });
    return controls.stop;
  }, [inView, mv, to, duration]);

  return (
    <span ref={ref} className={className}>
      {Math.round(mv.get()).toLocaleString()}{suffix}
    </span>
  );
}