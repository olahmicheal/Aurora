import { testimonials } from '../data/siteData';
import { Star } from 'lucide-react';
import ScrollRevealList from './animata/scroll/ScrollRevealList2';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm text-gray-500 mb-2">Clients Feedback</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">Customer Testimonials</h2>
        
        {/* Horizontal slide-in from -x axis */}
        <ScrollRevealList 
          staggerDelay={0.15} 
          duration={0.9} 
          xOffset={-80}
          yOffset={0}
          startScale={0.9}
          gap="gap-6"
          cardShadow={false}
          direction="horizontal"
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <div key={t.id} className="p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-lg transition-shadow h-full">
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-red-600 text-red-600" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-400 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <span className="font-semibold text-gray-900 text-sm">{t.name}</span>
              </div>
            </div>
          ))}
        </ScrollRevealList>
      </div>
    </section>
  );
}