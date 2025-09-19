type Logo = { src:string; alt:string; };
export default function LogoTicker({ logos, speed="40s" }:{ logos:Logo[]; speed?:`${number}s` }) {
  return (
    <div className="relative overflow-hidden">
      <div className="flex gap-10 animate-[marquee_linear_infinite] no-motion">
        {[...logos, ...logos].map((l, i)=>(
          <img key={i} src={l.src} alt={l.alt} className="h-8 opacity-70 hover:opacity-100 transition" loading="lazy"/>
        ))}
      </div>
      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-[marquee_linear_infinite] { width: max-content; animation: marquee ${speed} linear infinite; }
        @media (prefers-reduced-motion: reduce) { .no-motion { animation: none !important; } }
      `}</style>
    </div>
  );
}