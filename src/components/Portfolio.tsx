import { portfolioItems } from '../data/siteData.js';
import { useNavigate } from 'react-router-dom';

export default function Portfolio() {
  const navigate = useNavigate();

  return (
    <section id="portfolio">
      {portfolioItems.map((item) => (
        <div 
          key={item.id} 
          className={`py-24 md:py-32 ${item.dark ? 'bg-black text-white' : 'bg-[#f5f5f5] text-gray-900'}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className={`flex flex-col ${item.layout === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-20`}>
              
              {/* Image Side */}
              <div className="flex-1 flex justify-center items-center relative min-h-[400px] md:min-h-[500px]">
                <div className={`absolute ${item.circleSize} rounded-full ${item.circleColor} opacity-90`} />
                <div className="relative z-10">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className={`w-full max-w-sm md:max-w-md h-auto object-cover shadow-2xl ${
                      item.isCircularImage ? 'rounded-full' : 'rounded-2xl'
                    } ${item.dark ? 'shadow-black/50' : 'shadow-gray-400/30'}`}
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="flex-1 space-y-6 text-center md:text-left">
                <span className={`inline-block px-8 py-2 rounded-full text-xs font-normal tracking-wide border ${
                  item.dark ? 'border-gray-600 text-gray-300' : 'border-gray-400 text-gray-600'
                }`}>
                  {item.tag}
                </span>
                <h2 className="text-5xl md:text-6xl font-bold italic">{item.title}</h2>
                <p className={`text-base md:text-lg ${item.dark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {item.subtitle}
                </p>
                <button 
                  onClick={() => navigate(`/case-study/${item.slug}`)}
                  className="px-10 py-3 bg-red-600 text-white rounded-full text-sm font-medium hover:bg-red-700 transition-all"
                >
                  View &gt;&gt;
                </button>
              </div>

            </div>
          </div>
        </div>
      ))}

      <div className="bg-[#f5f5f5] py-16 flex justify-center">
        <button className="px-12 py-4 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-all text-sm">
          View more &gt;&gt;
        </button>
      </div>
    </section>
  );
}