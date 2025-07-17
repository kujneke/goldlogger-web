document.addEventListener('DOMContentLoaded', function() {
    // Mobilna navigacija
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navButtons = document.querySelector('.nav-buttons');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        navButtons.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Gladko pomikanje
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Zapri mobilni meni
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    navButtons.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            }
        });
    });
    
    // Animacija elementov ob pomikanju
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.feature-card, .tech-item');
        elements.forEach(el => {
            const position = el.getBoundingClientRect();
            if (position.top < window.innerHeight - 100) {
                el.style.opacity = 1;
                el.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Nastavi začetne vrednosti za animacijo
    document.querySelectorAll('.feature-card, .tech-item').forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Pokliči na začetku in ob pomikanju
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Konzolno sporočilo
    console.log('GoldLogger aplikacija - Napredna rešitev za iskanje zlata');
    console.log('Zasnovano za profesionalce in navdušence');
});