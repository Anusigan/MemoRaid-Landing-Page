document.addEventListener('DOMContentLoaded', function() {
    // App screens data - replace image paths with your actual app screenshots
    const appScreens = [
        { 
            image: 'images/app/daily-exercises.jpg',
            alt: 'Daily memory exercises screen'
        },
        { 
            image: 'images/app/progress-tracking.jpg',
            alt: 'Progress tracking screen'
        },
        { 
            image: 'images/app/memory-journal.jpg',
            alt: 'Memory journal screen'
        },
        { 
            image: 'images/app/caregiver-connection.jpg',
            alt: 'Caregiver connection screen'
        }
    ];
    
    // Create screen elements
    const screenSlider = document.querySelector('.screen-slider');
    
    if (screenSlider) {
        appScreens.forEach(screen => {
            const screenElement = document.createElement('div');
            screenElement.classList.add('app-screen');
            screenElement.style.backgroundImage = `url(${screen.image})`;
            screenSlider.appendChild(screenElement);
        });
        
        // Show the first screen by default
        if (screenSlider.firstElementChild) {
            screenSlider.firstElementChild.classList.add('active');
        }
    }
    
    // Add click handlers to feature items
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        feature.addEventListener('click', function() {
            // Update active feature
            document.querySelector('.feature.active').classList.remove('active');
            this.classList.add('active');
            
            // Get screen index
            const screenIndex = parseInt(this.getAttribute('data-screen'));
            
            // Update slider position
            if (screenSlider) {
                screenSlider.style.transform = `translateX(-${screenIndex * 25}%)`;
                
                // Update active screen
                document.querySelector('.app-screen.active')?.classList.remove('active');
                screenSlider.children[screenIndex]?.classList.add('active');
            }
        });
    });
    
    // Auto rotate through screens every 5 seconds
    let currentScreen = 0;
    
    function rotateScreens() {
        currentScreen = (currentScreen + 1) % appScreens.length;
        
        // Find and click the corresponding feature
        const featureToActivate = document.querySelector(`.feature[data-screen="${currentScreen}"]`);
        if (featureToActivate) {
            featureToActivate.click();
        }
    }
    
    // Start the rotation with a delay to allow page to load properly
    setTimeout(() => {
        const autoRotateInterval = setInterval(rotateScreens, 5000);
        
        // Stop rotation when user interacts
        features.forEach(feature => {
            feature.addEventListener('click', () => {
                clearInterval(autoRotateInterval);
                
                // Restart after 15 seconds of inactivity
                setTimeout(() => {
                    currentScreen = parseInt(feature.getAttribute('data-screen'));
                    const newInterval = setInterval(rotateScreens, 5000);
                }, 15000);
            });
        });
    }, 2000);
    
    // Add scroll animation for the phone
    const phoneFrame = document.querySelector('.phone-frame');
    
    if (phoneFrame) {
        window.addEventListener('scroll', () => {
            const phoneRect = phoneFrame.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (phoneRect.top < windowHeight && phoneRect.bottom > 0) {
                const scrollProgress = 1 - (phoneRect.top / windowHeight);
                const rotateValue = 360 * scrollProgress;
                
                phoneFrame.style.transform = `rotateY(${Math.min(rotateValue, 15)}deg) rotateX(${Math.min(rotateValue/3, 5)}deg)`;
            }
        });
    }
});
