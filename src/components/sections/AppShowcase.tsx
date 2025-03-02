import { useState, useEffect, useRef } from 'react';
import styles from './AppShowcase.module.css';
import { 
  Brain, 
  BarChart2, 
  BookOpen, 
  Users,
  ChevronRight
} from 'lucide-react';

// App screens data with enhanced descriptions
const appScreens = [
  { 
    id: 0,
    image: '/icons/homeui.png',
    alt: 'Daily memory exercises screen',
    title: 'User-Friendly UI & UX',
    description: 'Userfriendly interface ease for usage of everyone',
    icon: Brain
  },
  { 
    id: 1,
    image: '/icons/breathui.png',
    alt: 'Progress tracking screen',
    title: 'Analytics Dashboard',
    description: 'Advanced visualization of your cognitive recovery journey with AI-powered insights',
    icon: BarChart2
  },
  { 
    id: 2,
    image: '/icons/homeui2.png',
    alt: 'Memory journal screen',
    title: 'Cognitive Games & Memory Journal',
    description: 'Recover and rebuild your past memories with engaging games and journaling',
    icon: BookOpen
  },
  { 
    id: 3,
    image: '/icons/chatui.jpeg',
    alt: 'hi',
    title: 'AI Chatbot & Support Network',
    description: 'Are you feeling alone ?.. No worries your AI assistance is here to take ca',
    icon: Users
  }
];

const AppShowcase = () => {
  const [activeScreen, setActiveScreen] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const autoRotateRef = useRef<number | null>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Handle mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      
      // Calculate mouse position relative to the section center
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      
      setMousePosition({ x, y });
    };
    
    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);
  
  // Apply parallax effect to phone
  useEffect(() => {
    if (!phoneRef.current) return;
    
    const rotateX = mousePosition.y * 10; // Limit rotation to 10 degrees
    const rotateY = -mousePosition.x * 15; // Limit rotation to 15 degrees
    
    phoneRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }, [mousePosition]);
  
  // Handle feature click
  const handleFeatureClick = (screenIndex: number) => {
    setActiveScreen(screenIndex);
    
    // Clear the auto-rotate interval
    if (autoRotateRef.current) {
      clearInterval(autoRotateRef.current);
      autoRotateRef.current = null;
    }
    
    // Restart auto-rotate after user interaction
    startAutoRotate(15000, screenIndex);
  };
  
  // Start auto-rotate function
  const startAutoRotate = (delay: number = 5000, startIndex: number = activeScreen) => {
    // Clear existing interval if any
    if (autoRotateRef.current) {
      clearInterval(autoRotateRef.current);
    }
    
    // Set timeout before starting rotation
    const timeoutId = setTimeout(() => {
      let currentIndex = startIndex;
      
      const intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % appScreens.length;
        setActiveScreen(currentIndex);
      }, 5000);
      
      autoRotateRef.current = intervalId;
    }, delay);
    
    // Cleanup timeout if component unmounts
    return () => clearTimeout(timeoutId);
  };
  
  // Handle scroll animation for revealing elements
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const isVisible = sectionRect.top < window.innerHeight * 0.8 && sectionRect.bottom > 0;
      
      if (isVisible) {
        sectionRef.current.classList.add('in-view');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount to check initial visibility
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Start auto-rotation on component mount
  useEffect(() => {
    const cleanup = startAutoRotate(2000);
    
    return () => {
      cleanup();
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.appShowcase} id="app-showcase" ref={sectionRef}>
      {/* Remove the background container - now using global background */}
      
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>Experience MemoRaid</h2>
          <p>Our cutting-edge mobile application harnesses the power of neuroscience and AI to create personalized memory rehabilitation journeys.</p>
        </div>
        
        <div className={styles.appDisplay}>
          {/* Phone Frame - Updated to use Dynamic Island instead of notch */}
          <div className={styles.phoneFrame} ref={phoneRef}>
            <div className={styles.phoneScreen}>
              <div 
                className={styles.screenSlider} 
                style={{ transform: `translateX(-${activeScreen * 25}%)` }}
              >
                {appScreens.map((screen) => (
                  <div 
                    key={screen.id}
                    className={`${styles.appScreen} ${activeScreen === screen.id ? styles.active : ''}`}
                    style={{ backgroundImage: `url(${screen.image})` }}
                    aria-label={screen.alt}
                    role="img"
                  />
                ))}
              </div>
              <div className={styles.reflection}></div>
            </div>
            {/* Replace notch with Dynamic Island */}
            <div className={styles.dynamicIsland}></div>
            {/* Replace home button with home indicator */}
            <div className={styles.phoneHomeIndicator}></div>
          </div>
          
          {/* Feature List */}
          <div className={styles.appFeatures}>
            {appScreens.map((screen) => (
              <div 
                key={screen.id}
                className={`${styles.feature} ${activeScreen === screen.id ? styles.active : ''}`}
                onClick={() => handleFeatureClick(screen.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleFeatureClick(screen.id);
                  }
                }}
              >
                <div className={styles.featureIcon}>
                  {screen.icon && <screen.icon size={24} />}
                </div>
                <h3>{screen.title}</h3>
                <p>{screen.description}</p>
                {activeScreen === screen.id && (
                  <ChevronRight 
                    className={styles.activeIndicator} 
                    size={18} 
                    style={{ 
                      position: 'absolute',
                      right: '20px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      opacity: 0.7
                    }} 
                  />
                )}
              </div>
            ))}
          </div>
          
          {/* Store badges section removed from here */}
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;