import { services } from '../data/siteData';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">Services</h2>
        
        <div className="space-y-4">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="group flex items-center justify-between p-6 rounded-2xl border border-gray-100 hover:border-red-100 hover:bg-red-50/30 transition-all cursor-pointer"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                {service}
              </h3>
              <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-all">
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}