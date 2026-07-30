import { useEffect, useRef, useState } from 'react';
import './scroll-reveal-list.css';

export default function ScrollRevealList({
  children,
  className = '',
  staggerDelay = 0.12,
  duration = 0.9,
  yOffset = -60,
  xOffset = 0,
  startScale = 0.85,
  threshold = 0.15,
  gap = 'gap-4',
  cardShadow = true,
  direction = 'vertical',
}) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasLeft, setHasLeft] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasLeft(false);
        } else {
          if (isVisible) {
            setIsVisible(false);
            setHasLeft(true);
          }
        }
      },
      { threshold }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, isVisible]);

  useEffect(() => {
    if (hasLeft && containerRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setHasLeft(false);
          }
        },
        { threshold }
      );
      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }
  }, [hasLeft, threshold]);

  // Only add flex classes if not using custom grid className
  const isCustomLayout = className.includes('grid');
  const flexClasses = isCustomLayout ? '' : (direction === 'horizontal' ? 'flex-row flex-wrap justify-center' : 'flex-col');

  return (
    <div ref={containerRef} className={`scroll-reveal-container ${!isCustomLayout ? 'flex' : ''} ${flexClasses} ${!isCustomLayout ? gap : ''} ${className}`}>
      {children.map((child, index) => (
        <div
          key={index}
          className={`scroll-reveal-item ${cardShadow ? 'scroll-reveal-shadow' : ''} ${isVisible ? 'revealed' : ''} ${direction === 'horizontal' ? 'scroll-reveal-horizontal' : ''}`}
          style={{
            '--reveal-delay': `${index * staggerDelay}s`,
            '--reveal-duration': `${duration}s`,
            '--reveal-y-offset': `${yOffset}px`,
            '--reveal-x-offset': `${xOffset}px`,
            '--reveal-start-scale': startScale,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}