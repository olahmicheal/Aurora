import { useEffect, useRef, useState } from 'react';
import './scroll-reveal-list.css';

export default function ScrollRevealList({
  children,
  className = '',
  staggerDelay = 0.12,
  duration = 0.9,
  yOffset = -60,
  startScale = 0.85,
  threshold = 0.15,
  gap = 'gap-4',           // Spacing between cards
  cardShadow = true,       // Enable shadow on cards
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
          // Only reset if we've been visible before (so it re-triggers)
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

  // Re-trigger when coming back into view
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

  return (
    <div ref={containerRef} className={`scroll-reveal-container flex flex-col ${gap} ${className}`}>
      {children.map((child, index) => (
        <div
          key={index}
          className={`scroll-reveal-item ${cardShadow ? 'scroll-reveal-shadow' : ''} ${isVisible ? 'revealed' : ''}`}
          style={{
            '--reveal-delay': `${index * staggerDelay}s`,
            '--reveal-duration': `${duration}s`,
            '--reveal-y-offset': `${yOffset}px`,
            '--reveal-start-scale': startScale,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}