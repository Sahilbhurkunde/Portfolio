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

menuToggle.addEventListener('click', () => {
    // Add logic to show mobile menu if needed
    // For now, let's just log or toggle a basic class
    console.log('Menu Toggled');
});

// Smooth Scroll for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typing Animation Logic (Simple)
const text = "Full Stack Web Developer";
const typingElement = document.querySelector('.typing-text');
let i = 0;

function typeWriter() {
    if (i < text.length) {
        typingElement.innerHTML = text.substring(0, i+1);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing animation on load
window.onload = typeWriter;

// Simple Form Validation
const form = document.querySelector('.contact-form');
if(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you Sahil! This is a demo. Your message functionality would be connected to a backend like PHP.');
    });
}
