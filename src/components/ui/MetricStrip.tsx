import AnimatedCounter from "./AnimatedCounter";

type Metric = { label:string; value:number; suffix?:string; };
export default function MetricStrip({ items }:{ items: Metric[] }) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((m,i)=>(
        <div key={i} className="card p-5">
          <div className="text-3xl font-bold text-slate-900">
            <AnimatedCounter to={m.value} suffix={m.suffix ?? ""} />
          </div>
          <p className="text-slate-600">{m.label}</p>
        </div>
      ))}
    </div>
  );
}