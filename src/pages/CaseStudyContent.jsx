import { useNavigate } from 'react-router-dom';
import { portfolioItems } from '../data/siteData.js';

const ToolIcon = ({ tool }) => {
  const icons = {
    figma: (
      <svg width="24" height="24" viewBox="0 0 38 57" fill="none">
        <path d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z" fill="#1ABCFE"/>
        <path d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5Z" fill="#0ACF83"/>
        <path d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0H19Z" fill="#FF7262"/>
        <path d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5Z" fill="#F24E1E"/>
        <path d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.56408 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.56408 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5Z" fill="#A259FF"/>
      </svg>
    ),
    photoshop: <span className="text-blue-700 font-bold text-xs">Ps</span>,
    illustrator: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    figjam: (
      <div className="flex gap-0.5">
        <div className="w-2 h-2 rounded-full bg-red-500"/>
        <div className="w-2 h-2 rounded-full bg-red-500"/>
        <div className="w-2 h-2 rounded-full bg-red-500"/>
      </div>
    ),
  };

  return (
    <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center">
      {icons[tool] || <span className="text-xs font-bold text-gray-500">{tool[0].toUpperCase()}</span>}
    </div>
  );
};

// Reusable image grid component
const ImageGrid = ({ images }) => {
  if (!images || images.length === 0) return null;

  // Single image - full width
  if (images.length === 1) {
    return (
      <div className="rounded-2xl overflow-hidden border-2 border-gray-200 relative">
        <div className="absolute top-4 left-4 z-10 bg-white px-4 py-2 rounded-lg shadow-sm">
          <span className="text-blue-600 font-semibold">{images[0].label}</span>
        </div>
        <img src={images[0].src} alt={images[0].label} className="w-full h-96 object-cover" />
      </div>
    );
  }

  // Two images side by side
  if (images.length === 2) {
    return (
      <div className="grid md:grid-cols-2 gap-6">
        {images.map((img, i) => (
          <div key={i} className="relative rounded-2xl overflow-hidden border-2 border-gray-200">
            <div className="absolute top-4 left-4 z-10 bg-white px-4 py-2 rounded-lg shadow-sm">
              <span className="text-blue-600 font-semibold">{img.label}</span>
            </div>
            <img src={img.src} alt={img.label} className="w-full h-96 object-cover" />
          </div>
        ))}
      </div>
    );
  }

  // Three images: one tall left, two stacked right
  if (images.length === 3) {
    const tallImage = images.find(img => img.tall) || images[0];
    const otherImages = images.filter(img => img !== tallImage);

    return (
      <div className="grid md:grid-cols-2 gap-6 items-start">
        <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-100 h-full">
          <div className="absolute top-4 left-4 z-10 bg-white px-4 py-2 rounded-lg shadow-sm">
            <span className="text-blue-600 font-semibold">{tallImage.label}</span>
          </div>
          <img src={tallImage.src} alt={tallImage.label} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-6 h-full">
          {otherImages.map((img, i) => (
            <div key={i} className="relative rounded-xl overflow-hidden shadow-lg border border-gray-100 flex-1">
              <div className="absolute top-4 left-4 z-10 bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="text-blue-600 font-semibold">{img.label}</span>
              </div>
              <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

// Helper to get next 2 portfolio items (circular, excluding current + 24/7)
function getNextProjects(currentSlug) {
  // Filter out 24/7 and current project
  const eligible = portfolioItems.filter(item => 
    item.slug !== currentSlug && item.slug !== "twentyfour"
  );

  if (eligible.length === 0) return [];
  if (eligible.length === 1) return eligible;

  // Find current index in full portfolioItems (for circular ordering)
  const currentIndex = portfolioItems.findIndex(item => item.slug === currentSlug);
  const nextProjects = [];
  let index = (currentIndex + 1) % portfolioItems.length;

  while (nextProjects.length < 2 && index !== currentIndex) {
    const item = portfolioItems[index];
    if (item.slug !== currentSlug && item.slug !== "twentyfour") {
      nextProjects.push(item);
    }
    index = (index + 1) % portfolioItems.length;
  }

  return nextProjects;
}

export default function CaseStudyContent({ data }) {
  const navigate = useNavigate();
  const nextProjects = getNextProjects(data.slug);

  return (
    <>
      {/* Overview */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4 space-y-10">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Services</h3>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">{data.services}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Launch date</h3>
              <p className="text-gray-600 text-lg">{data.launchDate}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6">Tools used</h3>
              <div className="flex gap-4 flex-wrap">
                {data.tools.map((tool, i) => <ToolIcon key={i} tool={tool} />)}
              </div>
            </div>
          </div>
          <div className="md:col-span-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Overview</h3>
            <p className="text-gray-700 leading-[1.8] text-lg">{data.overview}</p>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="bg-[#FFFBF7] py-20 mb-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">Design Process</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {data.processPhases.map((p, i) => (
              <div key={i} className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-600" />
                  <h3 className="font-bold text-gray-900 text-lg">{p.phase}</h3>
                </div>
                <ul className="space-y-2 pl-5">
                  {p.items.map((item, idx) => (
                    <li key={idx} className="text-gray-600 text-sm font-light">• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research and Analysis - CONDITIONAL */}
      {data.researchTitle && data.researchImages && data.researchImages.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <span className="text-blue-600 font-semibold text-sm tracking-wide mb-3 block">UCD Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{data.researchTitle}</h2>
          {data.researchText && <p className="text-gray-700 leading-[1.8] mb-12 max-w-5xl text-lg">{data.researchText}</p>}
          <ImageGrid images={data.researchImages} />
        </section>
      )}

      {/* User Personas / Requirements - CONDITIONAL */}
      {data.personaTitle && data.personaImages && data.personaImages.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <span className="text-blue-600 font-semibold text-sm tracking-wide mb-3 block">UCD Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{data.personaTitle}</h2>
          {data.personaText && <p className="text-gray-700 leading-[1.8] mb-12 max-w-5xl text-lg">{data.personaText}</p>}
          <ImageGrid images={data.personaImages} />
        </section>
      )}

      {/* Ideation / IA - CONDITIONAL */}
      {data.ideationTitle && data.ideationImages && data.ideationImages.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <span className="text-blue-600 font-semibold text-sm tracking-wide mb-3 block">UCD Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{data.ideationTitle}</h2>
          {data.ideationText && <p className="text-gray-700 leading-[1.8] mb-12 max-w-5xl text-lg">{data.ideationText}</p>}
          <ImageGrid images={data.ideationImages} />
        </section>
      )}

      {/* Wireframing / Development - CONDITIONAL */}
      {data.wireframeTitle && data.wireframeImages && data.wireframeImages.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <span className="text-blue-600 font-semibold text-sm tracking-wide mb-3 block">UCD Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{data.wireframeTitle}</h2>
          {data.wireframeText && <p className="text-gray-700 leading-[1.8] mb-12 max-w-5xl text-lg">{data.wireframeText}</p>}
          <ImageGrid images={data.wireframeImages} />
        </section>
      )}

      {/* Implementation & Launch Quadrant - CONDITIONAL */}
      {(data.implementationTitle || data.launchTitle) && (
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {data.implementationTitle && (
              <div className="bg-[#2563EB] p-10 md:p-20 text-white min-h-[300px] md:min-h-[400px] flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">{data.implementationTitle}</h2>
                {data.implementationText && <p className="leading-[1.8] text-blue-100 max-w-md">{data.implementationText}</p>}
              </div>
            )}
            {!data.implementationTitle && <div className="hidden md:block bg-white min-h-[400px]" />}

            {!data.launchTitle && <div className="hidden md:block bg-white min-h-[400px]" />}
            {data.launchTitle && (
              <div className="bg-[#C084FC] p-10 md:p-20 text-white min-h-[300px] md:min-h-[400px] flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">{data.launchTitle}</h2>
                {data.launchText && <p className="leading-[1.8] text-purple-100 max-w-md">{data.launchText}</p>}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Conclusion - CONDITIONAL */}
      {data.conclusion && (
        <section className="max-w-4xl mx-auto px-6 mb-24 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
          <p className="text-gray-700 leading-[1.8] text-lg">{data.conclusion}</p>
        </section>
      )}

      {/* Next Projects - Dynamic from portfolioItems */}
      {nextProjects.length > 0 && (
        <section className="mb-0">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {nextProjects.map((project, i) => (
              <div 
                key={i} 
                className={`${project.dark ? 'bg-black text-white' : 'bg-[#f5f5f5] text-gray-900'} p-10 md:p-16 cursor-pointer hover:opacity-95 transition-opacity`}
                onClick={() => navigate(`/case-study/${project.slug}`)}
              >
                <span className={`inline-block px-6 py-2 rounded-full border text-sm mb-6 ${project.dark ? 'border-gray-700' : 'border-gray-300'}`}>
                  {project.tag}
                </span>
                <h3 className="text-4xl md:text-5xl font-bold italic mb-3">{project.title}</h3>
                <p className="opacity-60 mb-8">{project.subtitle}</p>
                <div className="relative flex justify-center">
                  <div className={`absolute w-64 h-64 ${project.circleColor} rounded-full opacity-80`} />
                  <img src={project.image} alt={project.title} className="relative z-10 w-48 h-auto" />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}