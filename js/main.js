document.addEventListener('DOMContentLoaded', () => {
    // Premium Scroll Reveal
    const revealElements = document.querySelectorAll('.reveal-group, .reveal-section');
    if (revealElements.length > 0 && window.IntersectionObserver) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
        
        revealElements.forEach(el => {
            observer.observe(el);
        });
    } else {
        revealElements.forEach(el => el.classList.add('is-visible'));
    }
});
