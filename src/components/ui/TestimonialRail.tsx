import { useRef } from "react";

export default function TestimonialRail({ children }:{ children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const scrollBy = (dx:number)=> ref.current?.scrollBy({ left: dx, behavior: "smooth" });
  return (
    <div className="relative">
      <div ref={ref} className="rail flex gap-6 overflow-x-auto pb-2">
        {children}
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center gap-2 pr-2">
        <button aria-label="Scroll left" onClick={()=>scrollBy(-400)} className="px-3 py-2 rounded-lg border bg-white">←</button>
        <button aria-label="Scroll right" onClick={()=>scrollBy(400)} className="px-3 py-2 rounded-lg border bg-white">→</button>
      </div>
    </div>
  );
}

/* Example card shape */
export function TestimonialCard({quote, name, title, avatar, href}:{quote:string; name:string; title:string; avatar:string; href?:string}) {
  const body = (
    <div className="card p-6 w-80 snap-start">
      <div className="flex items-center gap-3 mb-3">
        <img src={avatar} alt="" className="h-10 w-10 rounded-full object-cover"/>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-slate-600">{title}</p>
        </div>
      </div>
      <p className="text-slate-700">"{quote}"</p>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer">{body}</a> : body;
}