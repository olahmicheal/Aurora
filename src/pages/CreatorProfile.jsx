import { useParams, useNavigate } from 'react-router-dom';
import { creators } from '../data/creators';
import { ArrowRight } from 'lucide-react';

export default function CreatorProfile() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const creator = creators[slug];

  if (!creator) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Creator Not Found</h1>
          <button onClick={() => navigate('/')} className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <button onClick={() => navigate('/')} className="flex items-center gap-2">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg">A</div>
          </button>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => navigate('/')} className="text-sm font-medium hover:text-red-600 transition-colors">Home</button>
            <button onClick={() => navigate('/#services')} className="text-sm font-medium hover:text-red-600 transition-colors">Services</button>
            <span className="text-sm font-medium text-gray-900 cursor-default">About</span>
            <button onClick={() => navigate('/#contact')} className="px-6 py-2.5 bg-red-600 text-white rounded-full text-sm font-medium hover:bg-red-700 transition-all">
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-16 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Hi there! <span className="text-4xl">👋</span>
            </h1>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              I'm {creator.name}
            </h1>
            <div className="space-y-4 pt-4">
              {creator.bio.map((paragraph, i) => (
                <p key={i} className="text-gray-700 leading-relaxed max-w-lg">
                  {paragraph}
                </p>
              ))}
            </div>
            <a href="#connect" className="inline-block text-blue-600 font-medium hover:underline pt-2">
              {creator.connectText}
            </a>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden">
              <img 
                src={creator.image} 
                alt={creator.name}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Working History & Skills Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Left - Working History */}
          <div className="md:col-span-7 space-y-8">
            <h2 className="text-2xl font-bold text-gray-500">Working History</h2>
            
            <div className="space-y-6">
              {creator.history.map((job, i) => (
                <div key={i} className="border border-gray-200 rounded-2xl p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 ${job.logoColor} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                      {job.logo}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{job.role}</h3>
                      <p className="text-sm text-gray-500">{job.type} | {job.date}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 pl-14">
                    {job.points.map((point, idx) => (
                      <li key={idx} className="text-sm text-gray-600 leading-relaxed">• {point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="pt-8">
              <h2 className="text-2xl font-bold text-gray-500 mb-6">Certifications</h2>
              <div className="grid grid-cols-2 gap-4">
                {creator.certifications.map((cert, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl p-5 space-y-2">
                    <span className={`font-bold text-lg ${cert.logoColor}`}>{cert.logo}</span>
                    <h3 className="font-semibold text-gray-900 text-sm">{cert.title}</h3>
                    <p className="text-xs text-gray-400">{cert.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Skills & Tools */}
          <div className="md:col-span-5 space-y-10">
            {/* Design Skills */}
            <div>
              <h2 className="text-2xl font-bold text-gray-500 mb-6">Design Skills</h2>
              <div className="border border-gray-200 rounded-2xl p-6 space-y-3">
                {creator.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Working Tools */}
            <div>
              <h2 className="text-2xl font-bold text-gray-500 mb-6">Working tools</h2>
              <div className="border border-gray-200 rounded-2xl p-6">
                <div className="grid grid-cols-3 gap-4">
                  {creator.tools.map((tool, i) => (
                    <div key={i} className="flex flex-col items-center gap-2">
                      <div className={`w-12 h-12 ${tool.color} rounded-full flex items-center justify-center`}>
                        <span className="text-xs font-bold text-gray-700">{tool.name[0]}</span>
                      </div>
                      <span className="text-xs text-gray-600 text-center">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Language Skills */}
            <div>
              <h2 className="text-2xl font-bold text-gray-500 mb-6">Language Skills</h2>
              <div className="border border-gray-200 rounded-2xl p-6">
                {creator.languages.map((lang, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-2xl">{lang.flag}</span>
                    <span className="text-gray-700 text-sm">{lang.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You / Footer */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Thank You!</h2>
              <p className="text-gray-500 mb-2">For sparing some time and review my work.</p>
              <p className="text-xl text-gray-900 font-medium mb-8 leading-relaxed">
                Do you have great idea and want to share. Let's make something amazing together
              </p>
              <button 
                onClick={() => navigate('/#contact')}
                className="px-8 py-3.5 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-all flex items-center gap-2"
              >
                Get in touch with me <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Abstract Art */}
            <div className="w-80 h-80 md:w-96 md:h-96 bg-gray-50 rounded-3xl overflow-hidden relative">
              <svg viewBox="0 0 400 400" className="w-full h-full opacity-60">
                <rect width="400" height="400" fill="white" />
                <path d="M50,200 Q100,50 200,200 T350,200" fill="none" stroke="black" strokeWidth="2" opacity="0.3"/>
                <path d="M80,220 Q130,80 220,220 T320,180" fill="none" stroke="black" strokeWidth="1.5" opacity="0.2"/>
                <path d="M120,250 Q180,100 250,250 T380,150" fill="none" stroke="black" strokeWidth="2" opacity="0.4"/>
                <ellipse cx="200" cy="200" rx="150" ry="80" fill="none" stroke="black" strokeWidth="1" opacity="0.2" transform="rotate(-20 200 200)"/>
                <ellipse cx="220" cy="180" rx="120" ry="60" fill="none" stroke="black" strokeWidth="1.5" opacity="0.3" transform="rotate(15 220 180)"/>
                <path d="M100,300 Q200,100 300,300" fill="none" stroke="black" strokeWidth="2" opacity="0.25"/>
                <circle cx="280" cy="120" r="40" fill="none" stroke="black" strokeWidth="1" opacity="0.3"/>
                <circle cx="150" cy="280" r="50" fill="none" stroke="black" strokeWidth="1.5" opacity="0.2"/>
              </svg>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-600 transition-colors">Privacy policy</a>
              <a href="#" className="hover:text-gray-600 transition-colors">Cookies policy</a>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-600 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-gray-600 transition-colors">Behance</a>
              <a href="#" className="hover:text-gray-600 transition-colors">Dribbble</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}