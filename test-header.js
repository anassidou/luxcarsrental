// Test script for header hiding
console.log('Test script loaded');

window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('header');
    
    console.log('Scroll position:', scrolled);
    console.log('Current page:', window.location.pathname);
    console.log('Body classes:', document.body.className);
    
    // Simple test - hide header after 500px scroll on more-cars page
    if (window.location.pathname.includes('more-cars.html') && scrolled > 500) {
        console.log('Hiding header');
        header.style.transform = 'translateY(-100%)';
        header.style.opacity = '0';
        header.style.transition = 'all 0.3s ease';
    } else {
        console.log('Showing header');
        header.style.transform = 'translateY(0)';
        header.style.opacity = '1';
    }
});