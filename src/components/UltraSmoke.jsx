import { useEffect, useRef } from 'react';

export default function UltraSmoke() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Smoke particles array
    const particles = [];
    const PARTICLE_COUNT = 200;

    // Initialize particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: 0,
        vy: 0,
        alpha: Math.random() * 0.2 + 0.05,
        size: Math.random() * 60 + 20,
        angle: Math.random() * Math.PI * 2
      });
    }

    // Generate smooth noise-based flow
    function noise(x, y) {
      return Math.sin(x * 0.01) * Math.cos(y * 0.01);
    }

    let mouse = { x: width/2, y: height/2 };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let p of particles) {
        // Flow using simple noise + mouse attraction
        const flow = noise(p.x, p.y);
        p.vx += Math.cos(p.angle + flow) * 0.01;
        p.vy += Math.sin(p.angle + flow) * 0.01;

        // Add mouse influence
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        p.vx += dx * 0.00005;
        p.vy += dy * 0.00005;

        p.x += p.vx;
        p.y += p.vy;

        // Fade velocity slowly
        p.vx *= 0.99;
        p.vy *= 0.99;

        // Draw particle
        ctx.beginPath();
        ctx.fillStyle = `rgba(0,255,255,${p.alpha})`;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate();

    // Update mouse
    window.addEventListener('mousemove', e => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    // Resize
    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });
  }, []);

  return <canvas ref={canvasRef} style={{
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1,
    pointerEvents: 'none'
  }} />;
}