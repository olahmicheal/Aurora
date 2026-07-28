import { portfolioItems } from '../data/siteData.js';
import { useNavigate } from 'react-router-dom';
import StackedSections from './animata/scroll/StackedSections';
import GithubCardSkew from './animata/card/GithubCardSkew';

function PortfolioCard({ item, navigate }) {
  return (
    <GithubCardSkew 
      className={`w-full overflow-hidden rounded-2xl ${
        item.dark 
          ? '!bg-black !text-white !border-gray-800' 
          : '!bg-[#f5f5f5] !text-gray-900 !border-gray-200'
      }`}
    >
      {/* Inner wrapper with explicit background to override any skew styles */}
      <div className={`w-full ${item.dark ? 'bg-black' : 'bg-[#f5f5f5]'}`}>
        <div className="max-w-4xl mx-auto px-5 py-8 md:py-10">
          <div className={`flex flex-col ${item.layout === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-6 md:gap-10`}>
            
            {/* Image Side */}
            <div className="flex-1 flex justify-center items-center w-full">
              <div className="relative w-full max-w-[260px]">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className={`w-full h-auto object-cover ${
                    item.isCircularImage 
                      ? 'rounded-full aspect-square max-w-[220px] mx-auto' 
                      : 'rounded-xl aspect-[4/3]'
                  } ${item.dark ? 'shadow-black/30' : 'shadow-gray-400/15'}`}
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="flex-1 space-y-3 text-center md:text-left">
              <span className={`inline-block px-4 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase border ${
                item.dark ? 'border-gray-700 text-gray-400' : 'border-gray-300 text-gray-500'
              }`}>
                {item.tag}
              </span>
              
              <h2 className="text-2xl md:text-3xl font-bold italic leading-[1.15]">
                {item.title}
              </h2>
              
              <p className={`text-sm leading-relaxed max-w-sm ${item.dark ? 'text-gray-400' : 'text-gray-500'}`}>
                {item.subtitle}
              </p>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/case-study/${item.slug}`);
                }}
                className="mt-1 px-6 py-2 bg-red-600 text-white rounded-full text-sm font-medium hover:bg-red-700 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                View Project
              </button>
            </div>

          </div>
        </div>
      </div>
    </GithubCardSkew>
  );
}

function ViewMoreCard() {
  return (
    <div className="w-full relative">
      <div 
        className="absolute inset-x-0 top-0 bottom-0 backdrop-blur-xl bg-white/60" 
        style={{ 
          left: 'calc(-50vw + 50%)', 
          right: 'calc(-50vw + 50%)',
          zIndex: -1 
        }} 
      />
      <div className="relative flex items-center justify-center py-6 md:py-8">
        <button className="px-10 py-3 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 hover:scale-105 active:scale-95 transition-all duration-200 text-sm shadow-lg">
          View more projects
        </button>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const navigate = useNavigate();

  return (
    <section id="portfolio" className="bg-[#f0f0f0]">
      <div className="max-w-3xl mx-auto px-4 pt-6">
        <StackedSections stackOffset={36} withDramaEffect={true} paneGap="gap-3">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.id} item={item} navigate={navigate} />
          ))}
          <ViewMoreCard />
        </StackedSections>
      </div>
      <div className="h-2" />
    </section>
  );
}