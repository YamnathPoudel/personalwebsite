// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        navLinks.classList.remove('active');
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Counter animation
const counters = document.querySelectorAll('.counter');
const speed = 200;

const animateCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    
    const updateCount = () => {
        const increment = target / speed;
        
        if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count);
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };
    
    updateCount();
};

// Intersection Observer for counter animation
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// Achievements Chart
const achievementsCtx = document.getElementById('achievementsChart').getContext('2d');
new Chart(achievementsCtx, {
    type: 'bar',
    data: {
        labels: ['Research Papers', 'Workshops', 'Student Projects', 'Awards', 'Conferences'],
        datasets: [{
            label: 'Academic Achievements',
            data: [15, 45, 67, 25, 30],
            backgroundColor: [
                'rgba(52, 152, 219, 0.6)',
                'rgba(46, 204, 113, 0.6)',
                'rgba(155, 89, 182, 0.6)',
                'rgba(231, 76, 60, 0.6)',
                'rgba(241, 196, 15, 0.6)'
            ],
            borderColor: [
                'rgba(52 , 152, 219, 1)',
                'rgba(46, 204, 113, 1)',
                'rgba(155, 89, 182, 1)',
                'rgba(231, 76, 60, 1)',
                'rgba(241, 196, 15, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

// Training Programs Chart
const trainingCtx = document.getElementById('trainingChart').getContext('2d');
new Chart(trainingCtx, {
    type: 'doughnut',
    data: {
        labels: ['Digital Tools', 'Lab Training', 'Interactive Methods', 'Assessment', 'Curriculum Design'],
        datasets: [{
            data: [30, 25, 20, 15, 10],
            backgroundColor: [
                'rgba(52, 152, 219, 0.8)',
                'rgba(46, 204, 113, 0.8)',
                'rgba(155, 89, 182, 0.8)',
                'rgba(231, 76, 60, 0.8)',
                'rgba(241, 196, 15, 0.8)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1.5, // Reduced from 1.5 to make it taller
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    padding: 15 // Add padding to space out legend items
                }
            }
        }
    }
});


// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = 'none';
        navbar.style.backgroundColor = 'var(--primary-color)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        navbar.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
    }
    
    lastScroll = currentScroll;
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});