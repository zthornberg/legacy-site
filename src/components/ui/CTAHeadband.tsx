import { Link } from "react-router-dom";
export default function CTAHeadband(){
  return (
    <section className="section">
      <div className="section-wide">
        <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">Not sure where to start?</h3>
            <p className="text-slate-600">Get a confidential assessment or speak with an advisor today.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/contact" className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700">Book a time</Link>
            <a href="tel:+15551234567" className="px-4 py-2 rounded-xl border">Call us</a>
          </div>
        </div>
      </div>
    </section>
  );
}