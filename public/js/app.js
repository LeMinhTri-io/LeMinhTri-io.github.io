/// Counter
$(document).ready(() => {
    $(".counter").counterUp({
        delay: 10,
        time: 1200
    });
});
/// Zoom-in
AOS.init();
/// Scroll Reveal
ScrollReveal({
    reset: true,
    distance: '75px',
    duration: 1000,
    delay: 1,
});
ScrollReveal().reveal('.heading', { origin: 'top' });
ScrollReveal().reveal('.sos', { delay: 500, origin: 'left' });
