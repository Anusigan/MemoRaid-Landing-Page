import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './AnimatedBackground.module.css';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Create particles
    const particlesArray: Particle[] = [];
    const numberOfParticles = Math.min(80, Math.floor((canvas.width * canvas.height) / 12000));
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 4 + 0.5; // Slightly smaller particles
        this.speedX = Math.random() * 0.4 - 0.2; // Slower movement
        this.speedY = Math.random() * 0.4 - 0.2;
        this.opacity = Math.random() * 0.4 + 0.1;
        
        // Create variations of the base color
        const brightnessVariation = Math.random() * 15;
        this.color = `rgba(13, ${Math.floor(52 + brightnessVariation)}, ${Math.floor(69 + brightnessVariation)}, ${this.opacity})`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Wrap around edges
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }
      
      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    const init = () => {
      particlesArray.length = 0;
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };
    
    const connect = () => {
      if (!ctx) return;
      const maxDistance = 120; // Shorter connect distance
      
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = 0.4 - distance / maxDistance;
            ctx.strokeStyle = `rgba(13, 52, 69, ${opacity * 0.25})`; // More transparent connections
            ctx.lineWidth = 0.8; // Thinner lines
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };
    
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Add a subtle gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(248, 250, 252, 0.0)'); // Transparent at top
      gradient.addColorStop(1, 'rgba(241, 245, 249, 0.0)'); // Transparent at bottom
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      connect();
      requestAnimationFrame(animate);
    };
    
    init();
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <div className={styles.backgroundContainer}>
      <canvas ref={canvasRef} className={styles.canvas} />
      
      {/* SVG Elements with stronger #0d3445 presence */}
      <svg className={styles.svgElements} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="15" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* Top-left blob */}
        <motion.path
          d="M-100,0 C-50,50 50,50 100,0 C150,-50 150,-150 100,-200 C50,-250 -50,-250 -100,-200 C-150,-150 -150,-50 -100,0 Z"
          fill="rgba(13, 52, 69, 0.025)"
          transform="translate(150, 150) scale(1.5)"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
            opacity: [0.025, 0.05, 0.025]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Bottom-right blob */}
        <motion.path
          d="M0,0 C50,50 150,50 200,0 C250,-50 250,-150 200,-200 C150,-250 50,-250 0,-200 C-50,-150 -50,-50 0,0 Z"
          fill="rgba(13, 52, 69, 0.03)"
          transform="translate(calc(100% - 150px), calc(100% - 150px)) scale(1.5)"
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, -5, 0],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Large Circle with more opacity */}
        <motion.circle
          cx="15%"
          cy="20%"
          r="13vw"
          fill="rgba(13, 52, 69, 0.035)" // Slightly more visible
          initial={{ scale: 0.8, opacity: 0.035 }}
          animate={{ 
            scale: [0.8, 1.2, 0.8],
            opacity: [0.035, 0.06, 0.035],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Middle Circle with more opacity */}
        <motion.circle
          cx="85%"
          cy="50%"
          r="18vw"
          fill="rgba(13, 52, 69, 0.045)" // Slightly more visible
          filter="url(#glow)"
          initial={{ scale: 1 }}
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.045, 0.07, 0.045],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
        
        {/* Bottom Circle with more opacity */}
        <motion.circle
          cx="30%"
          cy="85%"
          r="15vw"
          fill="rgba(13, 52, 69, 0.04)" // Slightly more visible
          initial={{ scale: 0.9 }}
          animate={{ 
            scale: [0.9, 1.1, 0.9],
            opacity: [0.04, 0.065, 0.04],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Small Floating Elements - more of them */}
        {[...Array(8)].map((_, i) => (
          <motion.circle
            key={i}
            cx={`${15 + i * 10}%`}
            cy={`${20 + (i % 5) * 15}%`}
            r={`${1 + (i % 3)}vw`}
            fill={`rgba(13, 52, 69, ${0.03 + (i % 3) * 0.01})`}
            initial={{ y: 0, opacity: 0.03 + (i % 3) * 0.01 }}
            animate={{ 
              y: [-20, 20, -20],
              opacity: [0.03 + (i % 3) * 0.01, 0.05 + (i % 3) * 0.01, 0.03 + (i % 3) * 0.01]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1
            }}
          />
        ))}
        
        {/* Pattern Overlay with more #0d3445 elements */}
        <pattern 
          id="pattern1" 
          x="0" 
          y="0" 
          width="60" 
          height="60" 
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <rect width="100%" height="100%" fill="none" />
          <motion.circle 
            cx="30" 
            cy="30" 
            r="1.2" 
            fill="rgba(13, 52, 69, 0.15)"
            animate={{ opacity: [0.15, 0.3, 0.15] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </pattern>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern1)" opacity="0.5" />
      </svg>
    </div>
  );
};

export default AnimatedBackground;
