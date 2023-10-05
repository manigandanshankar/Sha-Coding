


// SCROLL REVEAL

ScrollReveal({ 
    reset: true,
    distance: '180px',
    duration: 2000,
    delay:200
});

ScrollReveal().reveal('.hero-left img, .get-it-on-right h4', { origin: 'top' });
ScrollReveal().reveal('.hero-right, .get-it-on-right p, .get-it-on-right li', { origin: 'bottom' });
ScrollReveal().reveal('.get-it-on-left img, .app-download, .features h2', { origin: 'left' });
ScrollReveal().reveal('.feature-content-items', { origin: 'right' });

