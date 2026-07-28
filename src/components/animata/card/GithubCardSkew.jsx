import { useCallback, useRef } from 'react';
import { useMousePosition } from '../../../hooks/useMousePosition';

function calculateCardRotation({ currentX, currentY, centerX, centerY, maxRotationX, maxRotationY }) {
  const deltaX = currentX - centerX;
  const deltaY = currentY - centerY;
  const maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2);
  const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
  const rotationFactor = distance / maxDistance;
  const rotationY = ((-deltaX / centerX) * maxRotationY * rotationFactor).toFixed(2);
  const rotationX = ((deltaY / centerY) * maxRotationX * rotationFactor).toFixed(2);
  return { rotationX, rotationY };
}

export default function GithubCardSkew({ children, className = '' }) {
  const containerRef = useRef(null);
  const resetRef = useRef(undefined);

  const update = useCallback(({ x, y }) => {
    if (!containerRef.current) return;
    const { width, height } = containerRef.current.getBoundingClientRect();
    const { rotationX, rotationY } = calculateCardRotation({
      centerX: width / 2,
      centerY: height / 2,
      currentX: x,
      currentY: y,
      maxRotationX: 4,
      maxRotationY: 6,
    });
    containerRef.current.style.setProperty('--x', `${rotationX}deg`);
    containerRef.current.style.setProperty('--y', `${rotationY}deg`);
  }, []);

  useMousePosition(containerRef, update);

  return (
    <div
      ref={containerRef}
      className={`rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-transform ease-linear will-change-transform ${className}`}
      style={{
        transform: 'perspective(400px) rotateX(var(--x, 0deg)) rotateY(var(--y, 0deg))',
        transitionDuration: '50ms',
      }}
      onMouseEnter={() => {
        resetRef.current = setTimeout(() => {
          if (!containerRef.current) return;
          containerRef.current.style.transitionDuration = '0ms';
        }, 300);
      }}
      onMouseLeave={() => {
        clearTimeout(resetRef.current);
        if (!containerRef.current) return;
        containerRef.current.style.transitionDuration = '50ms';
        containerRef.current.style.setProperty('--x', '0deg');
        containerRef.current.style.setProperty('--y', '0deg');
      }}
    >
      {children}
    </div>
  );
}