import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import ViewSiteModal from './ViewSiteModal';

export default function CaseStudyLayout({ 
  children, 
  title, 
  subtitle, 
  liveUrl,
  hasLiveSite,
  heroImage,
  accentColor = "bg-red-600",
  projectName 
}) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-8 max-w-7xl mx-auto px-6">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-red-600 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to portfolio
        </button>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-8">
          {title} -<br />{subtitle}
        </h1>

        {/* Hero Image with View Site button overlaid */}
        <div className="relative rounded-2xl overflow-hidden">
          <img 
            src={heroImage} 
            alt={`${title} project showcase`} 
            className="w-full h-auto object-cover"
          />
          {hasLiveSite && (
            <div className="absolute bottom-6 left-6">
              <ViewSiteModal 
                liveUrl={liveUrl} 
                projectName={projectName}
                accentColor={accentColor}
              />
            </div>
          )}
        </div>
      </section>

      {children}

      {/* Footer includes Thank You + footer bar */}
      <Footer />
    </div>
  );
}