// Header Scroll Effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('open');
        });
    });
}

// Smooth Scroll for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = header ? header.offsetHeight : 0;
            const top = target.offsetTop - offset;

            window.scrollTo({
                top,
                behavior: 'smooth'
            });
        }
    });
});

// Typing Animation
const text = "Full Stack Web Developer";
const typingElement = document.querySelector('.typing-text');
let i = 0;

function typeWriter() {
    if (typingElement && i < text.length) {
        typingElement.innerHTML = text.substring(0, i + 1);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Scroll Reveal Animation
const revealElements = document.querySelectorAll(`
    .section-title,
    .about-card,
    .skill-category,
    .project-card,
    .timeline-item,
    .achievement-card,
    .info-item,
    .contact-form,
    .profile-card,
    .resume-content
`);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach((el, index) => {
    el.classList.add('hidden');
    el.style.transitionDelay = `${index * 0.08}s`;
    observer.observe(el);
});

// Active Nav Link on Scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active-link');
        }
    });
});

// Hero Parallax Effect
const heroVisual = document.querySelector('.hero-visual');
window.addEventListener('scroll', () => {
    if (heroVisual) {
        const scrollValue = window.scrollY;
        heroVisual.style.transform = `translateY(${scrollValue * 0.12}px)`;
    }
});

// Contact Form Demo
const form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you Sahil! This is a demo. Connect this form to PHP, EmailJS, or Formspree.');
    });
}

// Start typing animation on load
window.addEventListener('load', () => {
    typeWriter();
});
// Live Animated Background
const bgCanvas = document.getElementById('bg-canvas');
const ctx = bgCanvas ? bgCanvas.getContext('2d') : null;

if (bgCanvas && ctx) {
    let particles = [];
    const particleCount = window.innerWidth < 768 ? 45 : 90;

    function resizeCanvas() {
        bgCanvas.width = window.innerWidth;
        bgCanvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.reset();
            this.y = Math.random() * bgCanvas.height;
        }

        reset() {
            this.x = Math.random() * bgCanvas.width;
            this.y = bgCanvas.height + Math.random() * 100;
            this.size = Math.random() * 2 + 1;
            this.speedY = Math.random() * 0.7 + 0.2;
            this.speedX = (Math.random() - 0.5) * 0.3;
            this.alpha = Math.random() * 0.5 + 0.15;
        }

        update() {
            this.y -= this.speedY;
            this.x += this.speedX;

            if (this.y < -20 || this.x < -20 || this.x > bgCanvas.width + 20) {
                this.reset();
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(103, 232, 249, ${this.alpha})`;
            ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function drawConnections() {
        for (let a = 0; a < particles.length; a++) {
            for (let b = a + 1; b < particles.length; b++) {
                const dx = particles[a].x - particles[b].x;
                const dy = particles[a].y - particles[b].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.strokeStyle = `rgba(96, 165, 250, ${0.08 * (1 - distance / 120)})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }
    }

    function animateBackground() {
        ctx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        drawConnections();
        requestAnimationFrame(animateBackground);
    }

    resizeCanvas();
    initParticles();
    animateBackground();

    window.addEventListener('resize', () => {
        resizeCanvas();
        initParticles();
    });
}
