import { useEffect, useRef, useState } from 'react';
import SoftBlurIn from './animata/text/SoftBlurIn';
import TextFlip from './animata/text/TextFlip';

export default function Hero() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [showFlip, setShowFlip] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Trigger TextFlip after SoftBlurIn finishes (~1.8s for the long text)
  useEffect(() => {
    if (!isInView) return;
    const timer = setTimeout(() => setShowFlip(true), 1800);
    return () => clearTimeout(timer);
  }, [isInView]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={sectionRef}
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fff8f8] pt-20"
    >
      {/* Decorative Pink Shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-red-200/50 rounded-bl-[120px] rounded-tl-[80px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 md:w-[28rem] md:h-[28rem] bg-red-200/50 rounded-tr-[120px] rounded-br-[80px]" />
      
      {/* Additional subtle blobs */}
      <div className="absolute top-1/4 right-10 w-32 h-32 bg-pink-200/40 rounded-full blur-2xl" />
      <div className="absolute bottom-1/3 left-10 w-40 h-40 bg-pink-200/40 rounded-full blur-2xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Animated H1 */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] mb-6">
          {isInView && (
            <>
              <SoftBlurIn 
                text="We Design Digital" 
                delay={0.1} 
                stagger={0.025}
                as="span"
                className="block"
              />
              <br />
              <SoftBlurIn 
                text="Experiences" 
                delay={0.4} 
                stagger={0.03}
                as="span"
                className="italic font-serif"
              />
              <span className="inline-block ml-2">
                <SoftBlurIn 
                  text="That Inspire." 
                  delay={0.7} 
                  stagger={0.025}
                  as="span"
                />
              </span>
            </>
          )}
        </h1>

        {/* Animated Subtitle — Split into two parts */}
        <div className="text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          {isInView && (
            <div className="flex flex-col items-center gap-1">
              {/* Line 1: Soft blur in */}
              <SoftBlurIn 
                text="We create visually stunning, user-friendly websites and digital solutions that help brands, businesses, and individuals"
                delay={1.0}
                stagger={0.015}
                className="text-gray-700 italic font-light"
              />
              
              {/* Line 2: TextFlip with colored words */}
              <div className={`transition-all duration-700 ${showFlip ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <TextFlip 
                  words={["connect", "engage", "and grow"]}
                  prefix=" "
                  className="text-xl md:text-2xl font-semibold italic justify-center"
                  wordClassName="font-bold"
                  animationDuration={6}
                />
              </div>
            </div>
          )}
        </div>

        {/* Buttons with fade-in */}
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '2.2s' }}
        >
          <button 
            onClick={() => scrollTo('portfolio')}
            className="px-8 py-3.5 border border-gray-300 bg-white text-gray-900 rounded-full font-medium hover:border-gray-900 hover:bg-gray-50 transition-all"
          >
            View portfolio
          </button>
          <button 
            onClick={() => scrollTo('contact')}
            className="px-8 py-3.5 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-all"
          >
            Hire us
          </button>
        </div>
      </div>
    </section>
  );
}