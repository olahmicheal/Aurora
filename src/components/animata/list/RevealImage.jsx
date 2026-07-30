export default function RevealImage({ text, images, className = '' }) {
  return (
    <div className={`group/reveal relative h-fit w-full overflow-visible py-6 cursor-pointer ${className}`}>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 transition-opacity duration-500 group-hover/reveal:opacity-40">
          {text}
        </h1>
        
        {/* Arrow icon - shows on hover */}
        <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover/reveal:bg-red-600 group-hover/reveal:border-red-600 transition-all duration-300 opacity-0 group-hover/reveal:opacity-100 scale-75 group-hover/reveal:scale-100">
          <svg className="w-5 h-5 text-gray-400 group-hover/reveal:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Image stack - appears on hover */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 z-40 h-24 w-20 pointer-events-none">
        {/* Back image (rotated) */}
        <div 
          className="absolute inset-0 rounded-lg overflow-hidden shadow-xl
            scale-0 opacity-0 
            group-hover/reveal:scale-100 group-hover/reveal:opacity-100
            translate-x-0 translate-y-0 rotate-0
            group-hover/reveal:translate-x-4 group-hover/reveal:translate-y-4 group-hover/reveal:rotate-12
            transition-all duration-500 delay-100"
        >
          <img alt={images[1]?.alt || ''} src={images[1]?.src || ''} className="h-full w-full object-cover" />
        </div>
        
        {/* Front image */}
        <div 
          className="absolute inset-0 rounded-lg overflow-hidden shadow-xl
            scale-0 opacity-0 
            group-hover/reveal:scale-100 group-hover/reveal:opacity-100
            transition-all duration-300"
        >
          <img alt={images[0]?.alt || ''} src={images[0]?.src || ''} className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
}