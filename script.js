// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 3D mouse tracking effect for hero section
const hero = document.querySelector('.hero');
const heroContent = document.querySelector('.hero-content');

hero.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    const xPos = (clientX / innerWidth - 0.5) * 20;
    const yPos = (clientY / innerHeight - 0.5) * 20;
    
    heroContent.style.transform = `perspective(1000px) rotateY(${xPos}deg) rotateX(${-yPos}deg)`;
});

hero.addEventListener('mouseleave', () => {
    heroContent.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
});

// Simplified rent button functionality
document.querySelectorAll('.rent-btn').forEach(button => {
    button.addEventListener('click', function() {
        const carName = this.closest('.card-back')?.querySelector('h3')?.textContent || 'this car';
        // Use WhatsApp instead of alert for better UX
        const phoneNumber = '212688781327';
        const message = `Hello, I would like to rent the ${carName}. Please provide more details.`;
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    });
});

// CTA button is now a direct link in HTML

// Header scroll effect - separate logic for each page
if (window.location.pathname.includes('more-cars.html')) {
    // More cars page - simple hide/show
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (!header) return;
        
        if (window.pageYOffset > 500) {
            header.style.transform = 'translateY(-100%)';
            header.style.opacity = '0';
            header.style.transition = 'all 0.3s ease';
        } else {
            header.style.transform = 'translateY(0)';
            header.style.opacity = '1';
        }
    });
} else {
    // Main page - complex animations
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) clearTimeout(scrollTimeout);
        
        scrollTimeout = setTimeout(function() {
            const scrolled = window.pageYOffset;
            const header = document.querySelector('header');
            const logo = document.querySelector('.logo');
            const nav = document.querySelector('nav');
            
            if (!header || !logo || !nav) return;
            
            if (scrolled > window.innerHeight - 100) {
                header.style.background = 'rgba(0, 0, 0, 0.8)';
                header.style.backdropFilter = 'blur(10px)';
                header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.19)';
                header.style.padding = '0.1rem 0';
                
                logo.style.opacity = '0';
                logo.style.transform = 'scale(0.3) rotate(180deg)';
                logo.style.visibility = 'hidden';
                
                nav.style.justifyContent = 'center';
                nav.style.transform = 'translateY(-5px) scale(1.05)';
            } else {
                header.style.background = 'transparent';
                header.style.backdropFilter = 'none';
                header.style.boxShadow = 'none';
                header.style.padding = '0.5rem 0';
                
                logo.style.opacity = '1';
                logo.style.transform = 'scale(1) rotate(0deg)';
                logo.style.visibility = 'visible';
                
                nav.style.justifyContent = 'space-between';
                nav.style.transform = 'translateY(0) scale(1)';
            }
        }, 10);
    });
}

// Additional effects removed

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 1s ease forwards';
        }
    });
}, observerOptions);

// Observe all car cards and features
document.querySelectorAll('.car-card, .feature-3d').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// More cars button linked directly to new page via HTML

// Scroll indicator functionality
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function() {
        const carsSection = document.querySelector('#cars');
        if (carsSection) {
            carsSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}

// Scroll to cars section on more-cars page
const moreCarsScrollIndicator = document.querySelector('.more-cars-page .scroll-indicator');
if (moreCarsScrollIndicator) {
    moreCarsScrollIndicator.addEventListener('click', function() {
        const carsSection = document.querySelector('#cars');
        if (carsSection) {
            carsSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}

// WhatsApp functionality
function openWhatsApp() {
    const phoneNumber = '212688781327'; // WhatsApp number
    const message = 'Hello, I would like to inquire about luxury car rental';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}