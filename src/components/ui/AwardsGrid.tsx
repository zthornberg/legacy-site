export default function AwardsGrid({ items }:{ items:{ src:string; alt:string; }[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
      {items.map((a,i)=>(
        <div key={i} className="card p-4 flex items-center justify-center">
          <img src={a.src} alt={a.alt} className="max-h-12 opacity-80" loading="lazy"/>
        </div>
      ))}
    </div>
  );
}