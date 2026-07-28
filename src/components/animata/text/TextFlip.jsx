import { useEffect, useMemo, useRef } from 'react';
import './text-flip.css';

export default function TextFlip({ 
  words, 
  prefix = '', 
  className = '',
  wordClassName = '',
  animationDuration = 8,
  delay = 0
}) {
  const tallestRef = useRef(null);

  const allWords = useMemo(() => {
    // Duplicate first word at end for seamless loop
    return words.length > 1 ? [...words, words[0]] : words;
  }, [words]);

  useEffect(() => {
    if (!tallestRef.current) return;
    
    let maxHeight = 0;
    const tempSpans = [];

    allWords.forEach((word) => {
      const span = document.createElement('span');
      span.className = 'absolute opacity-0 pointer-events-none';
      span.textContent = word;
      tallestRef.current.appendChild(span);
      const height = span.offsetHeight;
      tallestRef.current.removeChild(span);
      
      if (height > maxHeight) maxHeight = height;
    });

    if (maxHeight > 0) {
      tallestRef.current.style.height = `${maxHeight}px`;
    }
  }, [allWords]);

  // Color palette for words
  const colors = [
    'text-red-500',
    'text-blue-500', 
    'text-green-500',
    'text-purple-500',
    'text-orange-500',
    'text-pink-500',
    'text-teal-500',
    'text-yellow-500',
  ];

  return (
    <div className={`box-content flex flex-wrap items-baseline gap-x-2 ${className}`} style={{ animationDelay: `${delay}s` }}>
      {prefix && <span className="text-foreground">{prefix}</span>}
      <div 
        ref={tallestRef} 
        className={`flex flex-col overflow-hidden ${wordClassName}`}
        style={{ 
          '--flip-duration': `${animationDuration}s`,
          '--flip-delay': `${delay}s`
        }}
      >
        {allWords.map((word, index) => (
          <span 
            key={index} 
            className={`animate-flip-words ${colors[index % colors.length]}`}
            style={{ 
              animationDelay: `${delay}s`,
              animationDuration: `${animationDuration}s`
            }}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}