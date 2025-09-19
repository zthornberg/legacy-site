export default function WaveDivider({ className="" }:{ className?: string }) {
  return (
    <div className={`w-full ${className}`} aria-hidden="true">
      <svg width="0" height="0">
        <defs>
          <linearGradient id="waveGrad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="rgba(21,94,239,.08)"/>
            <stop offset="100%" stopColor="rgba(2,132,199,.08)"/>
          </linearGradient>
        </defs>
      </svg>
      <div className="h-10 md:h-14" style={{ background: "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(21,94,239,.06) 100%)" }} />
    </div>
  );
}