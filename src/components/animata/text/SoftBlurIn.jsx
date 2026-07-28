import { useEffect, useRef, useState } from 'react';
import './soft-blur-in.css';

export default function SoftBlurIn({ 
  text, 
  delay = 0, 
  stagger = 0.03, 
  className = '',
  as: Tag = 'span',
  triggerOnView = true
}) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!triggerOnView) {
      setIsVisible(true);
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [triggerOnView, hasAnimated]);

  const words = text.split(' ');

  return (
    <Tag ref={containerRef} className={`soft-blur-container ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="soft-blur-word-wrapper">
          {word.split('').map((char, charIndex) => {
            const globalIndex = words
              .slice(0, wordIndex)
              .reduce((acc, w) => acc + w.length, 0) + charIndex;
            
            return (
              <span
                key={charIndex}
                className={`soft-blur-char ${isVisible ? 'animate-in' : ''}`}
                style={{
                  animationDelay: `${delay + globalIndex * stagger}s`,
                }}
              >
                {char}
              </span>
            );
          })}
          {wordIndex < words.length - 1 && (
            <span className="soft-blur-space">&nbsp;</span>
          )}
        </span>
      ))}
    </Tag>
  );
}