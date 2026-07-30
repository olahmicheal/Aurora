import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { creators } from '../data/creators';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CreatorProfile() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const creator = creators[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

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
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 max-w-7xl mx-auto px-6">
        {/* Back button */}
        <button 
          onClick={() => navigate('/')} 
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-red-600 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to portfolio
        </button>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Hi there! <span className="text-4xl">👋</span>
            </h1>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              I'm {creator.name}
            </h1>
            <div className="space-y-4 pt-4">
              {creator.bio.map((paragraph, i) => (
                <p key={i} className="text-gray-700 leading-relaxed max-w-lg">{paragraph}</p>
              ))}
            </div>
            <a href="#connect" className="inline-block text-blue-600 font-medium hover:underline pt-2">
              {creator.connectText}
            </a>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden">
              <img src={creator.image} alt={creator.name} className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Working History & Skills */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-12 gap-12">
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
          <div className="md:col-span-5 space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-500 mb-6">
                {slug === 'kabiru' ? 'Engineering & MEP Skills' : 'Design Skills'}
              </h2>
              <div className="border border-gray-200 rounded-2xl p-6 space-y-3">
                {creator.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
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

      <Footer />
    </div>
  );
}