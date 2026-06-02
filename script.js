
const navbar = document.querySelector('.navbar-custom');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 15px rgba(0,0,0,0.03)';
    }
});
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
};
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: stop observing once it's visible
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const socialItems = document.querySelectorAll('.social-item');
socialItems.forEach((item, index) => {
    // Stagger the animation slightly
    item.style.transitionDelay = `${index * 0.15}s`;
    observer.observe(item);
});

