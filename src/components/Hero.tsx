import { useEffect, useRef, useState } from 'react';
import SoftBlurIn from './animata/text/SoftBlurIn';
import TextFlip from './animata/text/TextFlip';
import BoidsEcosystem from './animata/background/BoidsEcosystem';

export default function Hero({ onUnlock }) {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [showFlip, setShowFlip] = useState(false);
  const [buttonsPopped, setButtonsPopped] = useState(false);

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

  useEffect(() => {
    if (!isInView) return;
    const timer = setTimeout(() => setShowFlip(true), 1800);
    return () => clearTimeout(timer);
  }, [isInView]);

  useEffect(() => {
    if (!showFlip) return;
    const timer = setTimeout(() => setButtonsPopped(true), 500);
    return () => clearTimeout(timer);
  }, [showFlip]);

  const handleViewPortfolio = () => {
    onUnlock?.();
    setTimeout(() => {
      document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleHireUs = () => {
    onUnlock?.();
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section 
      ref={sectionRef}
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fff8f8] pt-20"
    >
      {/* BOIDS ECOSYSTEM BACKGROUND ANIMATION */}
      <BoidsEcosystem
        count={60}
        palette={['#fca5a5', '#fecaca', '#fde68a', '#93c5fd', '#c4b5fd']}
        cursorRadius={120}
        agentShape="triangle"
      />

      {/* Decorative Pink Shapes — kept as before */}
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-red-200/50 rounded-bl-[80px] sm:rounded-bl-[120px] rounded-tl-[60px] sm:rounded-tl-[80px]" />
      <div className="absolute bottom-0 left-0 w-56 h-56 sm:w-72 sm:h-72 md:w-[28rem] md:h-[28rem] bg-red-200/50 rounded-tr-[80px] sm:rounded-tr-[120px] rounded-br-[60px] sm:rounded-br-[80px]" />
      <div className="absolute top-1/4 right-6 sm:right-10 w-24 h-24 sm:w-32 sm:h-32 bg-pink-200/40 rounded-full blur-2xl" />
      <div className="absolute bottom-1/3 left-6 sm:left-10 w-28 h-28 sm:w-40 sm:h-40 bg-pink-200/40 rounded-full blur-2xl" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-4 sm:mb-6">
          {isInView && (
            <>
              <SoftBlurIn 
                text="We Design Digital" 
                delay={0.1} 
                stagger={0.025}
                as="span"
                className="block"
              />
              <br className="hidden sm:block" />
              <span className="block sm:inline">
                <SoftBlurIn 
                  text="Experiences" 
                  delay={0.4} 
                  stagger={0.03}
                  as="span"
                  className="italic font-serif"
                />
              </span>
              <span className="block sm:inline sm:ml-2">
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

        <div className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
          {isInView && (
            <div className="flex flex-col items-center gap-1">
              <SoftBlurIn 
                text="We create visually stunning, user-friendly websites and digital solutions that help brands"
                delay={1.0}
                stagger={0.015}
                className="text-gray-700 italic font-light"
              />
              
              <div className={`transition-all duration-700 ${showFlip ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <TextFlip 
                  words={["connect", "engage", "and grow"]}
                  prefix=" "
                  className="text-lg sm:text-xl md:text-2xl font-semibold italic justify-center"
                  wordClassName="font-bold"
                  animationDuration={6}
                />
              </div>
            </div>
          )}
        </div>

        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 transition-all duration-700 ${
            buttonsPopped ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-90'
          }`}
        >
          <button 
            onClick={handleViewPortfolio}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 border border-gray-300 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full font-medium hover:border-gray-900 hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all duration-200 text-sm sm:text-base shadow-sm hover:shadow-md"
          >
            View portfolio
          </button>
          <button 
            onClick={handleHireUs}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 hover:scale-105 active:scale-95 transition-all duration-200 text-sm sm:text-base shadow-lg shadow-red-600/25 hover:shadow-xl hover:shadow-red-600/30"
          >
            Hire us
          </button>
        </div>
      </div>
    </section>
  );
}