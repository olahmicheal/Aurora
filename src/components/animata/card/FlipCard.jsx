import { useState } from 'react';

export default function FlipCard({
  image,
  title,
  description,
  subtitle,
  rotate = "y",
  className = "",
  onClick,
  children, // For custom front content
  ...props
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    setIsFlipped(!isFlipped);
    onClick?.(e);
  };

  return (
    <div 
      className={`group/card w-full perspective-[1000px] cursor-pointer ${className}`} 
      onClick={handleClick}
      {...props}
    >
      <div
        className={`relative rounded-2xl transition-transform duration-700 transform-3d shadow-lg ${
          isFlipped ? 'rotate-y-180' : 'group-hover/card:rotate-y-180'
        }`}
        style={{ minHeight: '7rem' }} // Matches your current card height (~112px)
      >
        {/* FRONT — Image background + Title */}
        <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden">
          {/* Background Image */}
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              // Fallback if image fails to load
              e.target.style.display = 'none';
            }}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          
          {/* Content */}
          <div className="relative z-10 flex items-center justify-between p-6 h-full">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {title}
              </h3>
              {subtitle && (
                <p className="text-sm text-white/70 mt-1">{subtitle}</p>
              )}
            </div>
            <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-sm">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* BACK — Image + Description (both visible) */}
        <div
          className={`absolute inset-0 rounded-2xl backface-hidden rotate-y-180 overflow-hidden ${
            isFlipped ? 'h-auto' : 'h-28'
          }`}
        >
          {/* Background Image (subtle, blurred) */}
          <img
            src={image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover blur-sm scale-110"
          />
          <div className="absolute inset-0 bg-black/80" />
          
          {/* Content — Image + Text side by side */}
          <div className="relative z-10 flex items-start gap-4 p-5">
            {/* Small thumbnail image */}
            <div className="shrink-0 w-20 h-20 rounded-xl overflow-hidden shadow-md">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Text content */}
            <div className="flex-1 min-w-0">
              <h4 className="text-base font-bold text-white mb-1">
                {subtitle || title}
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}