import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Linkedin, Mail } from 'lucide-react';
import teamBios from '../../content/team/bios.json';

interface TeamBioData {
  name: string;
  title: string;
  photo: string;
  professionalBio: string;
  personalBio: string;
  education?: string;
  linkedin?: string;
  email?: string;
}

const TeamMemberBio: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  
  const member = teamBios[name as keyof typeof teamBios] as TeamBioData;

  if (!member) {
    return (
      <div className="pt-20 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Team Member Not Found</h1>
            <Link to="/company/team" className="text-purple-600 hover:text-purple-700">
              ← Back to Team
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Link */}
        <Link 
          to="/company/team"
          className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Team
        </Link>

        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="flex-shrink-0">
            <img
              src={member.photo}
              alt={member.name}
              className="w-48 h-48 rounded-2xl object-cover shadow-lg"
            />
          </div>
          
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {member.name}
            </h1>
            <p className="text-xl text-purple-600 font-semibold mb-6">
              {member.title}
            </p>
            
            {/* Contact Links */}
            <div className="flex items-center space-x-4">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                   className="flex items-center text-gray-600 hover:text-accent transition-colors"
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </a>
              )}
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                   className="flex items-center text-gray-600 hover:text-accent transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Email
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bio Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Professional Bio */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Background</h2>
              <div className="prose prose-lg text-gray-600 leading-relaxed">
                {member.professionalBio.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Personal Bio */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Outside of Work</h2>
              <div className="prose prose-lg text-gray-600 leading-relaxed">
                {member.personalBio.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {member.education && (
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Education</h3>
                <p className="text-gray-600">{member.education}</p>
              </div>
            )}

            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Get In Touch</h3>
              <p className="text-slate-700 text-sm mb-4">
                Interested in working with {member.name.split(' ')[0]}? 
                Reach out to discuss your business goals.
              </p>
              <Link
                to="/contact"
                className="block w-full bg-accent text-white py-3 rounded-xl hover:bg-accentAlt motion-safe font-medium text-center"
              >
                Contact Legacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberBio;