import React from "react";

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const a = parts[0]?.[0] ?? "";
  const b = parts[1]?.[0] ?? "";
  return (a + b).toUpperCase();
}

export default function TeamAvatar({
  name, src, className = "h-24 w-24", logKey
}: { name: string; src?: string; className?: string; logKey?: string }) {
  const [error, setError] = React.useState(false);
  React.useEffect(() => {
    if (!src) console.warn("[TeamAvatar] Missing src", { name, logKey });
  }, [src, name, logKey]);

  if (!src || error) {
    return (
      <div className={`${className} rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center`}>
        <span className="text-slate-600 font-semibold select-none">{initials(name)}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      className={`${className} rounded-full object-cover border border-slate-200`}
      loading="lazy"
      onError={() => {
        console.error("[TeamAvatar] Image failed to load", { name, src, logKey });
        setError(true);
      }}
    />
  );
}