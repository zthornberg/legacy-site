import { useEffect, useState } from "react";

export default function StickyTOC({ items }:{ items:{ id:string; label:string }[] }) {
  const [active, setActive] = useState(items[0]?.id);
  useEffect(()=>{
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: "-40% 0px -55% 0px" });
    items.forEach(i=>{ const el = document.getElementById(i.id); if (el) obs.observe(el); });
    return ()=> obs.disconnect();
  }, [items]);

  return (
    <nav className="hidden lg:block sticky top-24 space-y-2">
      {items.map(i=>(
        <a key={i.id} href={`#${i.id}`}
           className={`block text-sm ${active===i.id ? "text-blue-700 font-semibold" : "text-slate-600 hover:text-slate-900"}`}>
          {i.label}
        </a>
      ))}
    </nav>
  );
}