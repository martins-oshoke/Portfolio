document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        console.log('Form submitted:');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        contactForm.reset();

        alert('Thank you for your message! We will get back to you soon.');
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.progress-bar div');
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const barTop = bar.getBoundingClientRect().top;
            if (barTop < window.innerHeight) {
                bar.style.width = bar.parentElement.getAttribute('data-progress') + '%';
            }
        });
    };

    window.addEventListener('scroll', animateSkillBars);
});