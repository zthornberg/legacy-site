import React from 'react';
import { Link } from 'react-router-dom';
import { team } from '../../data/team';

const OurTeam: React.FC = () => {
  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our team is your team. The Legacy leadership comprises seasoned entrepreneurs, 
              finance professionals, and marketing experts all united by a passion for service. 
              We draw on 35+ years of combined experience to guide our clients and brokers to success.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {team.map((member) => (
              <Link
                key={member.id}
                to={`/company/team/${member.id}`}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group"
              >
                <div className="text-center">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover group-hover:scale-105 transition-transform"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-purple-600 font-medium mb-3">
                    {member.title}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {member.sections[0]?.text.split('\n\n')[0]}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Humility</h3>
                <p className="text-gray-600">
                  We serve with humility, putting our clients' needs before our own 
                  and approaching every relationship with respect and empathy.
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Excellence</h3>
                <p className="text-gray-600">
                  We execute with relentless commitment to excellence, continuously 
                  improving our skills and delivering outstanding results.
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-900 mb-4">Integrity</h3>
                <p className="text-gray-600">
                  Every deal is built on trust, transparency, and doing what's right 
                  for all parties involved in the transaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;