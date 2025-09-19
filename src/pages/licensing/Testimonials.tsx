import React from 'react';
import { Link } from 'react-router-dom';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Starting a new career is always nerve-wracking, but having the team at Legacy to lean on has really made all the difference. Someone is always available to answer our questions and guide us.",
      author: "Tana & Seth B.",
      role: "Legacy Brokers",
      achievement: "Achieved their first business sale within their first year and are on track for even greater success by year two.",
      image: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg"
    },
    {
      quote: "There are unlimited opportunities for those who can put deals together... your income potential is limitless. Legacy really invests in their brokers – they continuously add training programs to ensure we're competitive in the marketplace.",
      author: "Binh T.",
      role: "Legacy Broker",
      achievement: "Consistently closes multiple deals per year and mentors new brokers in the network.",
      image: "https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg"
    },
    {
      quote: "I've been with Legacy for 9 months and they have under-promised and over-delivered on my expectations. The biggest advantage is the high-quality leads they provide every week. I've already had multiple closings... Great investment for someone who wants to manage their own schedule and earn a great income.",
      author: "Mitchell Y.",
      role: "Former Legacy Broker, Now Strategic Relations Manager",
      achievement: "Rose from broker to corporate team member due to exceptional performance.",
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg"
    },
    {
      quote: "Legacy's commitment to excellence is rooted in making every broker successful. With an excellent training program and ongoing support, Legacy brokers continue to improve their skills as new opportunities come month after month.",
      author: "Gene W.",
      role: "Northstar Advisory Group",
      achievement: "Built a successful regional brokerage practice using Legacy's system and support.",
      image: "/media/gene-w.jpg"
    }
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories from Legacy Brokers
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hear directly from our partners about their journey with Legacy. These are 
              real stories from real brokers who have built successful practices with our support.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative">
                    <Quote className="absolute -top-4 -left-4 h-12 w-12 text-purple-200" />
                    <blockquote className="text-xl italic text-gray-700 leading-relaxed mb-8 pl-8">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                  </div>

                  <div>
                    <cite className="text-lg font-semibold text-gray-900 not-italic">
                      {testimonial.author}
                    </cite>
                    <p className="text-purple-600 font-medium">{testimonial.role}</p>
                    <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                      {testimonial.achievement}
                    </p>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Real Results from Real Brokers
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-ink mb-2">97%</div>
              <div className="text-gray-600">Broker satisfaction rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-ink mb-2">$500K+</div>
              <div className="text-gray-600">Average annual earnings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-ink mb-2">12</div>
              <div className="text-gray-600">Months to ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-ink mb-2">6+</div>
              <div className="text-gray-600">Leads provided monthly</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-ink via-slate-900 to-ink text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Join Their Success</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            These brokers started where you are now. With Legacy's support, they built 
            thriving practices and achieved financial freedom. Your story could be next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/licensing/program"
              className="bg-white text-ink px-8 py-4 rounded-xl hover:bg-white/90 motion-safe hover-lift hover-press font-semibold"
            >
              Learn About the Program
            </Link>
            <Link
              to="/licensing/pricing"
              className="border-2 border-white/40 text-white px-8 py-4 rounded-xl hover:bg-white/10 motion-safe hover-lift hover-press font-semibold backdrop-blur-sm"
            >
              View Pricing & Apply
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;