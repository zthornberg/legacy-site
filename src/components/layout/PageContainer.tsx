export default function PageContainer({ children, className="" }:{ children: React.ReactNode; className?: string }) {
  return <div className={`max-w-screen-xl mx-auto px-4 md:px-6 ${className}`}>{children}</div>;
}