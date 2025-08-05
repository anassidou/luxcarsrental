// Card shadow animation
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card-3d');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('shadow-drop-2-center');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('shadow-drop-2-center');
        });
    });
});