export function Callout({ type="note", children }:{ type?: "note"|"success"|"warn"; children: React.ReactNode }) {
  const styles = {
    note: "border-slate-300 bg-slate-50",
    success: "border-emerald-300 bg-emerald-50",
    warn: "border-amber-300 bg-amber-50"
  }[type];
  return <div className={`border rounded-xl p-4 my-4 ${styles}`}>{children}</div>;
}