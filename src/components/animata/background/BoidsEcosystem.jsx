import { useEffect, useRef } from 'react';

const DEFAULT_PALETTE = ['#f5f5f4', '#fde68a', '#93c5fd', '#fca5a5'];

export default function BoidsEcosystem({
  count = 80,
  background = 'transparent',
  palette = DEFAULT_PALETTE,
  cursorRadius = 90,
  agentShape = 'triangle',
  className = '',
  children,
}) {
  const canvasRef = useRef(null);
  const cursorRef = useRef({ x: 0, y: 0, active: false });
  const liveRef = useRef({ background, palette, cursorRadius, agentShape });
  liveRef.current = { background, palette, cursorRadius, agentShape };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const agents = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const w = () => canvas.width / dpr;
    const h = () => canvas.height / dpr;

    const initialPalette = liveRef.current.palette;
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2;
      const s = 0.6 + Math.random() * 0.6;
      agents.push({
        x: Math.random() * w(),
        y: Math.random() * h(),
        vx: Math.cos(a) * s,
        vy: Math.sin(a) * s,
        color: initialPalette[Math.floor(Math.random() * initialPalette.length)],
      });
    }

    const perception = 36;
    const maxSpeed = 1.8;

    let raf = 0;
    const step = () => {
      const { background: bg, cursorRadius: cr } = liveRef.current;
      const W = w();
      const H = h();

      // Clear with transparency to show Hero background behind
      ctx.clearRect(0, 0, W, H);

      for (const a of agents) {
        let ax = 0;
        let ay = 0;
        let sx = 0;
        let sy = 0;
        let cx = 0;
        let cy = 0;
        let n = 0;

        for (const b of agents) {
          if (a === b) continue;
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < perception * perception) {
            ax += b.vx;
            ay += b.vy;
            cx += b.x;
            cy += b.y;
            if (d2 < 18 * 18 && d2 > 0.0001) {
              const d = Math.sqrt(d2);
              sx -= dx / d;
              sy -= dy / d;
            }
            n++;
          }
        }
        if (n > 0) {
          a.vx += (ax / n - a.vx) * 0.04;
          a.vy += (ay / n - a.vy) * 0.04;
          a.vx += (cx / n - a.x) * 0.0006;
          a.vy += (cy / n - a.y) * 0.0006;
          a.vx += sx * 0.06;
          a.vy += sy * 0.06;
        }

        if (cursorRef.current.active) {
          const dx = a.x - cursorRef.current.x;
          const dy = a.y - cursorRef.current.y;
          const d = Math.hypot(dx, dy);
          if (d < cr && d > 0) {
            const f = (cr - d) / cr;
            a.vx += (dx / d) * f * 0.6;
            a.vy += (dy / d) * f * 0.6;
          }
        }

        const sp = Math.hypot(a.vx, a.vy);
        if (sp > maxSpeed) {
          a.vx = (a.vx / sp) * maxSpeed;
          a.vy = (a.vy / sp) * maxSpeed;
        }
        a.x += a.vx;
        a.y += a.vy;

        if (a.x < 0) a.x += W;
        if (a.x > W) a.x -= W;
        if (a.y < 0) a.y += H;
        if (a.y > H) a.y -= H;

        ctx.fillStyle = a.color;
        ctx.globalAlpha = 0.6;
        if (liveRef.current.agentShape === 'dot') {
          ctx.beginPath();
          ctx.arc(a.x, a.y, 1.8, 0, Math.PI * 2);
          ctx.fill();
        } else {
          const angle = Math.atan2(a.vy, a.vx);
          ctx.save();
          ctx.translate(a.x, a.y);
          ctx.rotate(angle);
          ctx.beginPath();
          ctx.moveTo(6, 0);
          ctx.lineTo(-4, 3);
          ctx.lineTo(-4, -3);
          ctx.closePath();
          ctx.fill();
          ctx.restore();
        }
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      cursorRef.current.x = x;
      cursorRef.current.y = y;
      cursorRef.current.active = x >= 0 && x <= r.width && y >= 0 && y <= r.height;
    };
    const onPageLeave = () => {
      cursorRef.current.active = false;
    };
    window.addEventListener('pointermove', onMove);
    document.documentElement.addEventListener('pointerleave', onPageLeave);
    window.addEventListener('blur', onPageLeave);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onPageLeave);
      window.removeEventListener('blur', onPageLeave);
    };
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" style={{ background: 'transparent' }} />
      {children}
    </div>
  );
}