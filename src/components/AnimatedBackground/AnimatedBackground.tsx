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
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Animation parameters - White background with #0d3445 accents
    const primaryColor = '#0d3445';
    const accentColor = '#3793bf';
    const backgroundColor = '#ffffff';
    
    // Create particles
    const particlesArray: Particle[] = [];
    const particleCount = Math.floor((canvas.width * canvas.height) / 25000); // Reduced count for better performance
    
    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
    }
    
    // Create waves - Very subtle for site-wide background
    const waves = [
      { amplitude: 60, frequency: 0.005, speed: 0.01, offset: 0, color: primaryColor, opacity: 0.05 },
      { amplitude: 40, frequency: 0.008, speed: 0.02, offset: 200, color: accentColor, opacity: 0.03 },
      { amplitude: 30, frequency: 0.01, speed: 0.03, offset: 400, color: primaryColor, opacity: 0.02 }
    ];
    
    // Create initial particles - Very subtle for site-wide background
    for (let i = 0; i < particleCount; i++) {
      particlesArray.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5, // Smaller particles
        speedX: Math.random() * 0.7 - 0.35, // Slower movement
        speedY: Math.random() * 0.7 - 0.35,
        color: Math.random() > 0.6 ? primaryColor : accentColor,
        opacity: Math.random() * 0.2 + 0.05 // Very subtle opacity
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
          const y = canvas.height * 0.7 + 
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
      
      // Add extremely subtle glow effect appropriate for site-wide background
      const glowIntensity = 0.1 + 0.03 * Math.sin(time * 0.1);
      const gradient = ctx.createRadialGradient(
        canvas.width * 0.5, canvas.height * 0.3, 0,
        canvas.width * 0.5, canvas.height * 0.3, canvas.width
      );
      
      gradient.addColorStop(0, `${accentColor}${Math.floor(glowIntensity * 25).toString(16).padStart(2, '0')}`);
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update time for animation
      time += 0.005; // Slower animation for site-wide background
      
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
