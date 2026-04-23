const header = document.getElementById('header');
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');
const heroVisual = document.querySelector('.hero-visual');
const form = document.querySelector('.contact-form');
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');
const typingElement = document.querySelector('.typing-text');
const bgCanvas = document.getElementById('bg-canvas');
const ctx = bgCanvas ? bgCanvas.getContext('2d') : null;

let scrollTicking = false;

// Header + Active Nav + Parallax
function handleScroll() {
    const scrollY = window.scrollY;

    if (header) {
        if (scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    let currentSection = '';
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 140;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navItems.forEach((link) => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active-link');
        }
    });

    if (heroVisual && window.innerWidth > 768) {
        heroVisual.style.transform = `translateY(${scrollY * 0.05}px)`;
    }

    scrollTicking = false;
}

window.addEventListener('scroll', () => {
    if (!scrollTicking) {
        window.requestAnimationFrame(handleScroll);
        scrollTicking = true;
    }
});

// Mobile Menu
if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });

    document.querySelectorAll('.nav-links a').forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('open');
        });
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;

        const offset = header ? header.offsetHeight : 0;
        const top = target.offsetTop - offset;

        window.scrollTo({
            top,
            behavior: 'smooth'
        });
    });
});

// Typing Animation
const typingText = "Full Stack Web Developer";
let typingIndex = 0;

function typeWriter() {
    if (typingElement && typingIndex < typingText.length) {
        typingElement.textContent = typingText.substring(0, typingIndex + 1);
        typingIndex++;
        setTimeout(typeWriter, 90);
    }
}

// Scroll Reveal
const revealElements = document.querySelectorAll(
    '.section-title, .about-card, .skill-category, .project-card, .timeline-item, .achievement-card, .info-item, .contact-form, .profile-card, .resume-content'
);

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach((el, index) => {
    el.classList.add('hidden');
    el.style.transitionDelay = `${Math.min(index * 0.05, 0.25)}s`;
    revealObserver.observe(el);
});

// Contact Form Demo
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you Sahil! This is a demo. Connect this form to PHP, EmailJS, or Formspree.');
    });
}

// Live Animated Background
if (bgCanvas && ctx) {
    let particles = [];
    let animationFrameId;
    let resizeTimeout;

    function getParticleCount() {
        return window.innerWidth < 768 ? 28 : 55;
    }

    function resizeCanvas() {
        bgCanvas.width = window.innerWidth;
        bgCanvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * bgCanvas.width;
            this.y = Math.random() * bgCanvas.height;
            this.size = Math.random() * 1.8 + 1;
            this.speedY = Math.random() * 0.25 + 0.08;
            this.speedX = (Math.random() - 0.5) * 0.12;
            this.alpha = Math.random() * 0.35 + 0.08;
        }

        update() {
            this.y -= this.speedY;
            this.x += this.speedX;

            if (this.y < -10) this.y = bgCanvas.height + 10;
            if (this.x < -10) this.x = bgCanvas.width + 10;
            if (this.x > bgCanvas.width + 10) this.x = -10;
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
        const particleCount = getParticleCount();

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

                if (distance < 90) {
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.strokeStyle = `rgba(96, 165, 250, ${0.035 * (1 - distance / 90)})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }
    }

    function animateBackground() {
        ctx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);

        for (const particle of particles) {
            particle.update();
            particle.draw();
        }

        drawConnections();
        animationFrameId = requestAnimationFrame(animateBackground);
    }

    resizeCanvas();
    initParticles();
    animateBackground();

    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            resizeCanvas();
            initParticles();
            animateBackground();
        }, 150);
    });
}
// Premium Cursor Glow
const cursorGlow = document.createElement('div');
cursorGlow.className = 'cursor-glow';
document.body.appendChild(cursorGlow);

let glowX = window.innerWidth / 2;
let glowY = window.innerHeight / 2;
let currentX = glowX;
let currentY = glowY;

window.addEventListener('mousemove', (e) => {
    glowX = e.clientX;
    glowY = e.clientY;
    cursorGlow.style.opacity = '0.22';
});

window.addEventListener('mouseleave', () => {
    cursorGlow.style.opacity = '0';
});

function animateCursorGlow() {
    currentX += (glowX - currentX) * 0.12;
    currentY += (glowY - currentY) * 0.12;
    cursorGlow.style.transform = `translate(${currentX - 160}px, ${currentY - 160}px)`;
    requestAnimationFrame(animateCursorGlow);
}

if (window.innerWidth > 768) {
    animateCursorGlow();
}

// Init
window.addEventListener('load', () => {
    typeWriter();
    handleScroll();
});
