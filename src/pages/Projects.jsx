import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { allProjects, projectCategories } from '../data/projectsData.js';
import GithubCardSkew from '../components/animata/card/GithubCardSkew';
import FluidTabs from '../components/animata/tabs/FluidTabs';

function ProjectCard({ item, navigate }) {
  return (
    <GithubCardSkew 
      className={`w-full overflow-hidden rounded-2xl ${
        item.dark 
          ? '!bg-black !text-white !border-gray-800' 
          : '!bg-[#f5f5f5] !text-gray-900 !border-gray-200'
      }`}
    >
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

export default function Projects() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(0);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 0) return allProjects;
    const category = projectCategories[activeCategory];
    return allProjects.filter(project => 
      project.categories.includes(category)
    );
  }, [activeCategory]);

  return (
    <section className="min-h-screen bg-[#f0f0f0] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Projects
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our portfolio of design and development work across various industries.
          </p>
        </div>

        {/* Filter Toggle */}
        <div className="mb-12">
          <FluidTabs 
            defaultActiveIndex={0} 
            onActiveIndexChange={setActiveCategory}
            className="w-full"
          >
            <FluidTabs.List aria-label="Project Categories" className="bg-gray-200/80">
              {projectCategories.map((cat) => (
                <FluidTabs.Tab key={cat}>
                  <FluidTabs.Label className="text-xs sm:text-sm px-2">{cat}</FluidTabs.Label>
                </FluidTabs.Tab>
              ))}
            </FluidTabs.List>
          </FluidTabs>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((item) => (
              <ProjectCard key={item.id} item={item} navigate={navigate} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🚧</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Coming Soon</h2>
            <p className="text-gray-500">
              We are working on exciting projects in this category. Check back soon!
            </p>
          </div>
        )}

      </div>
    </section>
  );
}