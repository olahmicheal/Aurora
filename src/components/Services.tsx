import { ArrowRight } from 'lucide-react';
import JitterText from './animata/text/JitterText';
import ScrollRevealList from './animata/scroll/ScrollRevealList';
import RevealImageList from './animata/list/RevealImageList';

// Service data with images for hover reveal
const servicesData = [
  {
    text: "Digital Solutions",
    images: [
      { src: "/Images-20260727T192134Z-1-001/Images/Group 39485.png", alt: "Digital Solutions" },
      { src: "/Images-20260727T192134Z-1-001/Images/Frame 1899.png", alt: "Digital Solutions 2" }
    ]
  },
  {
    text: "Branding & Creative design",
    images: [
      { src: "/Images-20260727T192134Z-1-001/Images/Circle 4.png", alt: "Branding" },
      { src: "/Images-20260727T192134Z-1-001/Images/Circle 5.png", alt: "Branding 2" }
    ]
  },
  {
    text: "Print & Production",
    images: [
      { src: "/Images-20260727T192134Z-1-001/Images/Rectangle 361.png", alt: "Print" },
      { src: "/Images-20260727T192134Z-1-001/Images/Rectangle 364.png", alt: "Print 2" }
    ]
  },
  {
    text: "Engineering Solutions",
    images: [
      { src: "/Images-20260727T192134Z-1-001/Images/Circle 3.png", alt: "Engineering" },
      { src: "/Images-20260727T192134Z-1-001/Images/Circle.png", alt: "Engineering 2" }
    ]
  },
  {
    text: "Animations",
    images: [
      { src: "/Images-20260727T192134Z-1-001/Images/im2.png", alt: "Animation" },
      { src: "/Images-20260727T192134Z-1-001/Images/imag3.png", alt: "Animation 2" }
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Jittery "Services" Header */}
        <div className="text-center mb-16">
          <JitterText 
            text="Services" 
            duration={0.6}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          />
          <div className="w-16 h-1 bg-red-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Reveal Image List with scroll animation */}
        <ScrollRevealList 
          staggerDelay={0.12} 
          duration={0.8} 
          yOffset={-50} 
          startScale={0.88}
          gap="gap-3"
          cardShadow={true}
        >
          {servicesData.map((service, idx) => (
            <div 
              key={idx}
              className="group/reveal relative h-fit w-full overflow-visible py-5 px-6 rounded-2xl bg-white border border-gray-100 hover:border-red-100 hover:bg-red-50/30 transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 group-hover/reveal:text-red-600 transition-colors duration-300">
                  {service.text}
                </h3>
                
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover/reveal:bg-red-600 group-hover/reveal:border-red-600 transition-all duration-300">
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover/reveal:text-white transition-colors" />
                </div>
              </div>

              {/* Image stack - appears on hover */}
              <div className="absolute right-20 top-1/2 -translate-y-1/2 z-40 h-24 w-20 pointer-events-none hidden md:block">
                {/* Back image (rotated) */}
                <div 
                  className="absolute inset-0 rounded-lg overflow-hidden shadow-xl
                    scale-0 opacity-0 
                    group-hover/reveal:scale-100 group-hover/reveal:opacity-100
                    translate-x-0 translate-y-0 rotate-0
                    group-hover/reveal:translate-x-3 group-hover/reveal:translate-y-3 group-hover/reveal:rotate-12
                    transition-all duration-500 delay-75"
                >
                  <img alt={service.images[1]?.alt} src={service.images[1]?.src} className="h-full w-full object-cover" />
                </div>
                
                {/* Front image */}
                <div 
                  className="absolute inset-0 rounded-lg overflow-hidden shadow-xl
                    scale-0 opacity-0 
                    group-hover/reveal:scale-100 group-hover/reveal:opacity-100
                    transition-all duration-300"
                >
                  <img alt={service.images[0]?.alt} src={service.images[0]?.src} className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          ))}
        </ScrollRevealList>
      </div>
    </section>
  );
}