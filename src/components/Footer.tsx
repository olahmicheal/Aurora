import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Thank You!</h2>
            <p className="text-gray-500 mb-2">For sparing some time and review my work.</p>
            <p className="text-xl text-gray-900 font-medium mb-8 leading-relaxed">
              Do you have great idea and want to share. Let's make something amazing together
            </p>
            <button className="px-8 py-3.5 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-all flex items-center gap-2">
              Get in touch with me <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Abstract 3D Wireframe Placeholder */}
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden">
              <svg viewBox="0 0 400 400" className="w-full h-full opacity-40">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="400" height="400" fill="url(#grid)" />
                <circle cx="200" cy="200" r="150" fill="none" stroke="black" strokeWidth="0.5" />
                <circle cx="200" cy="200" r="100" fill="none" stroke="black" strokeWidth="0.5" />
                <path d="M200,50 Q350,200 200,350 Q50,200 200,50" fill="none" stroke="black" strokeWidth="0.5" />
                <path d="M100,100 Q300,100 300,300 Q100,300 100,100" fill="none" stroke="black" strokeWidth="0.5" />
              </svg>
            </div>
            {/* Floating elements to simulate 3D */}
            <div className="absolute top-1/4 left-1/4 w-16 h-16 border border-gray-400 rounded-lg rotate-12 bg-white/50 backdrop-blur-sm" />
            <div className="absolute bottom-1/3 right-1/4 w-20 h-20 border border-gray-400 rounded-full -rotate-12 bg-white/50 backdrop-blur-sm" />
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2024 Aurora Creative. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-600 transition-colors">Privacy policy</a>
            <a href="#" className="hover:text-gray-600 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Behance</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Dribbble</a>
          </div>
        </div>
      </div>
    </footer>
  );
}