import { useEffect, useRef } from 'react';
import styles from './AnimatedBackground.module.css';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full width/height
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Animation parameters - Updated for white background
    const primaryColor = '#0d3445';
    const accentColor = '#3793bf';
    const backgroundColor = '#ffffff'; // Changed to white
    
    // Create particles
    const particlesArray: Particle[] = [];
    const particleCount = Math.floor((canvas.width * canvas.height) / 20000); // Reduced count
    
    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
    }
    
    // Create waves - Adjusted opacity for white background
    const waves = [
      { amplitude: 60, frequency: 0.006, speed: 0.02, offset: 0, color: primaryColor, opacity: 0.07 },
      { amplitude: 40, frequency: 0.009, speed: 0.04, offset: 200, color: accentColor, opacity: 0.05 },
      { amplitude: 30, frequency: 0.012, speed: 0.06, offset: 400, color: primaryColor, opacity: 0.03 }
    ];
    
    // Create initial particles - Lower opacity for white background
    for (let i = 0; i < particleCount; i++) {
      particlesArray.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5, // Smaller particles
        speedX: Math.random() * 1 - 0.5, // Slower movement
        speedY: Math.random() * 1 - 0.5,
        color: Math.random() > 0.6 ? primaryColor : accentColor,
        opacity: Math.random() * 0.3 + 0.1 // More subtle opacity
      });
    }
    
    // Time variable for animation
    let time = 0;
    
    // Animation function
    const animate = () => {
      // Clear with white background
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw waves
      waves.forEach(wave => {
        ctx.beginPath();
        
        // Draw each wave
        for (let x = 0; x <= canvas.width; x += 5) {
          const y = canvas.height * 0.6 + 
                  wave.amplitude * Math.sin((x + wave.offset) * wave.frequency + time * wave.speed);
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        // Complete the wave by drawing to bottom corners
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        
        ctx.fillStyle = `${wave.color}${Math.floor(wave.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
      });
      
      // Draw and update particles
      particlesArray.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
        
        // Update particle position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap particles around the canvas edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });
      
      // Add subtle glow effect appropriate for white background
      const glowIntensity = 0.15 + 0.05 * Math.sin(time * 0.2);
      const gradient = ctx.createRadialGradient(
        canvas.width * 0.5, canvas.height * 0.3, 0,
        canvas.width * 0.5, canvas.height * 0.3, canvas.width * 0.7
      );
      
      gradient.addColorStop(0, `${accentColor}${Math.floor(glowIntensity * 40).toString(16).padStart(2, '0')}`);
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update time for animation
      time += 0.01;
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return <canvas ref={canvasRef} className={styles.canvas} />;
};

export default AnimatedBackground;
