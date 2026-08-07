import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { creators } from '../data/creators';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Tool & Company SVG Logos
const Logos = {
  figma: (
    <svg viewBox="0 0 38 57" className="w-6 h-6" fill="none">
      <path d="M19 28.5C19 25.98 20.001 23.564 21.783 21.783C23.564 20.001 25.98 19 28.5 19C31.02 19 33.436 20.001 35.217 21.783C36.999 23.564 38 25.98 38 28.5C38 31.02 36.999 33.436 35.217 35.217C33.436 36.999 31.02 38 28.5 38C25.98 38 23.564 36.999 21.783 35.217C20.001 33.436 19 31.02 19 28.5Z" fill="#1ABCFE"/>
      <path d="M0 47.5C0 44.98 1.001 42.564 2.783 40.783C4.564 39.001 6.98 38 9.5 38H19V47.5C19 50.02 17.999 52.436 16.217 54.217C14.436 55.999 12.02 57 9.5 57C6.98 57 4.564 55.999 2.783 54.217C1.001 52.436 0 50.02 0 47.5Z" fill="#0ACF83"/>
      <path d="M19 0V19H28.5C31.02 19 33.436 17.999 35.217 16.217C36.999 14.436 38 12.02 38 9.5C38 6.98 36.999 4.564 35.217 2.783C33.436 1.001 31.02 0 28.5 0H19Z" fill="#FF7262"/>
      <path d="M0 9.5C0 12.02 1.001 14.436 2.783 16.217C4.564 17.999 6.98 19 9.5 19H19V0H9.5C6.98 0 4.564 1.001 2.783 2.783C1.001 4.564 0 6.98 0 9.5Z" fill="#F24E1E"/>
      <path d="M0 28.5C0 31.02 1.001 33.436 2.783 35.217C4.564 36.999 6.98 38 9.5 38H19V19H9.5C6.98 19 4.564 20.001 2.783 21.783C1.001 23.564 0 25.98 0 28.5Z" fill="#A259FF"/>
    </svg>
  ),
  "adobe-xd": (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#FF61F6">
      <path d="M4 0h16v24H4V0zm10.63 17.5l-2.1-4.1-2.1 4.1H8.5l3.1-5.8L8.7 6.5h2.1l1.9 3.8 1.9-3.8h2.1l-2.9 5.2 3.1 5.8h-2.37z"/>
    </svg>
  ),
  sketch: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#FDB300">
      <path d="M12 1.5l6.5 4.5-2.5 11H8L5.5 6 12 1.5zM12 1.5L8 6h8L12 1.5zM5.5 6l2.5 11H8L5.5 6zM18.5 6L16 17h-1.5l2.5-11z"/>
    </svg>
  ),
  photoshop: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <rect width="24" height="24" rx="4" fill="#001E36"/>
      <text x="4" y="17" fill="#31A8FF" fontSize="14" fontWeight="bold" fontFamily="Arial">Ps</text>
    </svg>
  ),
  illustrator: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <rect width="24" height="24" rx="4" fill="#330000"/>
      <text x="5" y="17" fill="#FF9A00" fontSize="14" fontWeight="bold" fontFamily="Arial">Ai</text>
    </svg>
  ),
  canva: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#00C4CC">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6zm4 4h-2v-2h2v2zm0-4h-2V7h2v6z"/>
    </svg>
  ),
  slack: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#E01E5A"/>
    </svg>
  ),
  framer: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#0055FF">
      <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/>
    </svg>
  ),
  corel: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#77C044">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    </svg>
  ),
  autocad: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <rect width="24" height="24" rx="4" fill="#E51050"/>
      <text x="3" y="17" fill="white" fontSize="10" fontWeight="bold" fontFamily="Arial">AC</text>
    </svg>
  ),
  excel: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <rect width="24" height="24" rx="4" fill="#217346"/>
      <text x="3" y="17" fill="white" fontSize="10" fontWeight="bold" fontFamily="Arial">X</text>
    </svg>
  ),
  matlab: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <rect width="24" height="24" rx="4" fill="#0076A8"/>
      <text x="2" y="17" fill="white" fontSize="10" fontWeight="bold" fontFamily="Arial">M</text>
    </svg>
  ),
  google: (
    <svg viewBox="0 0 24 24" className="w-8 h-8">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  ),
  ibm: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#054ADA">
      <path d="M0 0h6v2H0V0zm7 0h6v2H7V0zm7 0h6v2h-6V0zM0 4h4v2H0V4zm5 0h6v2H5V4zm7 0h4v2h-4V4zm5 0h4v2h-4V4zM0 8h2v2H0V8zm3 0h6v2H3V8zm7 0h2v2h-2V8zm3 0h6v2h-6V8zm7 0h2v2h-2V8zM0 12h6v2H0v-2zm7 0h6v2H7v-2zm7 0h6v2h-6v-2zM0 16h4v2H0v-2zm5 0h6v2H5v-2zm7 0h4v2h-4v-2zm5 0h4v2h-4v-2zM0 20h2v2H0v-2zm3 0h6v2H3v-2zm7 0h2v2h-2v-2zm3 0h6v2h-6v-2zm7 0h2v2h-2v-2z"/>
    </svg>
  ),
    // Tech Stack Logos for Feranmi
  react: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="0.8" transform="rotate(0 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="0.8" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="0.8" transform="rotate(120 12 12)"/>
    </svg>
  ),
  nodejs: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#339933">
      <path d="M12 1L3 6v12l9 5 9-5V6l-9-5zm0 2.18l6.9 3.82L12 10.82 5.1 7 12 3.18zM5 8.5l6 3.33v6.34L5 14.84V8.5zm14 0v6.34l-6 3.33v-6.34L19 8.5z"/>
    </svg>
  ),
  htmlcss: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M1.5 0h21l-1.91 21.56L12 24 3.41 21.56 1.5 0z" fill="#E44D26"/>
      <path d="M12 22.2l6.8-1.9L20.4 2H12v20.2z" fill="#F16529"/>
      <path d="M12 9.5h6.2l-.4 4.5-5.8 1.6V9.5z" fill="#EBEBEB"/>
      <path d="M12 2v7.5H5.8l-.4-4.5H12z" fill="#EBEBEB"/>
      <path d="M12 14.6v2.8l-4.1-1.1-.3-3.2H12v1.5z" fill="#EBEBEB"/>
    </svg>
  ),
  cpp: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <rect width="24" height="24" rx="4" fill="#00599C"/>
      <text x="3" y="17" fill="white" fontSize="11" fontWeight="bold" fontFamily="Arial">C++</text>
    </svg>
  ),
  mongodb: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#47A248">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
      <path d="M12 6v12c-3.31 0-6-2.69-6-6s2.69-6 6-6z" fill="#001E2B"/>
    </svg>
  ),
  supabase: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#3ECF8E">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  ),
  vscode: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M17.583 1.227L12.25 6.56V2L8.5 4.75 4.75 2v16.5l3.75-2.75 3.75 2.75v-4.56l5.333 5.333L23 17.25V6.75l-5.417-5.523z" fill="#007ACC"/>
      <path d="M12.25 6.56v10.88l3.75-2.75V4.75l-3.75 1.81z" fill="#1F9CF0"/>
    </svg>
  ),
  vite: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M12 2L2 19h20L12 2z" fill="#646CFF"/>
      <path d="M12 6l6 11H6l6-11z" fill="#FFD62E"/>
    </svg>
  ),
  postman: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#FF6C37">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
      <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" fill="none"/>
    </svg>
  ),
  vercel: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="black">
      <path d="M12 2L2 20h20L12 2z"/>
    </svg>
  ),
  netlify: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#00C7B7">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
      <path d="M12 6l-6 6h4v6l6-6h-4V6z" fill="white"/>
    </svg>
  ),
  git: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#F05032">
      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.652 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.678-1.342-.396-2.009L7.611 3.527 4.645 6.491c-.603.605-.603 1.585 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l6.232-6.227c.605-.603.605-1.582 0-2.187z"/>
    </svg>
  ),
};

// Company Logo Component
function CompanyLogo({ job }) {
  if (job.logoType === "svg" && Logos[job.logoSvg]) {
    return <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-200">{Logos[job.logoSvg]}</div>;
  }

  // Text-based logo with first letter
  return (
    <div className={`w-10 h-10 ${job.logoColor} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
      {job.logo.charAt(0)}
    </div>
  );
}

// Tool Logo Component
function ToolLogo({ tool }) {
  if (tool.logoType === "svg" && Logos[tool.logoSvg]) {
    return (
      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-50 border border-gray-100 hover:bg-gray-100 transition-colors">
        {Logos[tool.logoSvg]}
      </div>
    );
  }

  // Fallback to colored circle with first letter
  return (
    <div className={`w-12 h-12 ${tool.logoColor || 'bg-gray-100'} rounded-full flex items-center justify-center`}>
      <span className="text-xs font-bold text-gray-700">{tool.name.charAt(0)}</span>
    </div>
  );
}

// Certification Logo Component
function CertLogo({ cert }) {
  if (cert.logoType === "svg" && Logos[cert.logoSvg]) {
    return <span className="font-bold text-lg">{Logos[cert.logoSvg]}</span>;
  }

  return <span className={`font-bold text-lg ${cert.logoColor}`}>{cert.logo}</span>;
}

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
          <button onClick={() => navigate(-1)} className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700">
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
                    <CompanyLogo job={job} />
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
                    <CertLogo cert={cert} />
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
                  {slug === 'kabiru' ? 'Engineering & MEP Skills' : slug === 'feranmi' ? 'Development Skills' : 'Design Skills'}
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
                      <ToolLogo tool={tool} />
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