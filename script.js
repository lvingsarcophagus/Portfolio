document.addEventListener('DOMContentLoaded', (event) => {
    // Add loading class to body
    document.body.classList.add('loading');

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Initialize Typed.js
    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 70,
        backSpeed: 40,
        loop: false,
        showCursor: true,
        cursorChar: '|',
        onComplete: (self) => {
            // Don't hide cursor, let it blink
            // self.cursor.style.display = 'none';
        }
    });

    // Particle.js configuration
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
        },
        retina_detect: true
    });

    // Animate progress bars
    const progressBars = document.querySelectorAll('.progress');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const targetWidth = bar.getAttribute('data-width');
                bar.style.width = targetWidth;
                observer.unobserve(bar); // Stop observing after animation
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => {
        bar.style.width = '0%'; // Initialize width to 0%
        observer.observe(bar);
    });

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Form submission logic
        console.log('Form submitted!');
        console.log('Name:', this.name.value);
        console.log('Email:', this.email.value);
        console.log('Message:', this.message.value);
        this.reset();
        alert('Message sent successfully!');
    });

    // Hide Loader on Window Load
    window.addEventListener('load', () => {
        const loader = document.getElementById('loader');
        loader.classList.add('hidden');
        document.body.classList.remove('loading');
    });
});

/* Add this to your styles.css */
