// ============================================
// PORTFOLIO WEBSITE - HAIKAL SAPUTRA MAMONTO
// JavaScript for Interactivity
// ============================================

// ========== THEME TOGGLE ==========
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Check for saved theme preference or default to dark
const currentTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', currentTheme);

// Update theme toggle icon based on current theme
function updateThemeIcon(theme) {
    // Icon switching is handled by CSS, no need to manually toggle
    // This function is kept for potential future enhancements
}

// Initialize theme icon
updateThemeIcon(currentTheme);

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    
    // Add animation effect
    themeToggle.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        themeToggle.style.transform = '';
    }, 300);
});

// ========== NAVIGATION ==========
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

function activateNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', activateNavLink);

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========== SKILL BARS ANIMATION ==========
const skillBars = document.querySelectorAll('.skill-bar');

const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    bar.style.width = level + '%';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        observer.observe(bar);
    });
};

animateSkillBars();

// ========== PORTFOLIO ITEMS ANIMATION ==========
const portfolioItems = document.querySelectorAll('.portfolio-item');

const animatePortfolio = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    portfolioItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
};

animatePortfolio();

// ========== GALLERY LIGHTBOX ==========
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');

let currentImageIndex = 0;
const galleryImages = Array.from(galleryItems).map(item => 
    item.querySelector('img').src
);

galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentImageIndex = index;
        openLightbox();
    });
});

function openLightbox() {
    lightbox.classList.add('active');
    lightboxImage.src = galleryImages[currentImageIndex];
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    lightboxImage.src = galleryImages[currentImageIndex];
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    lightboxImage.src = galleryImages[currentImageIndex];
}

lightboxClose.addEventListener('click', closeLightbox);
lightboxNext.addEventListener('click', showNextImage);
lightboxPrev.addEventListener('click', showPrevImage);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowRight') {
            showNextImage();
        } else if (e.key === 'ArrowLeft') {
            showPrevImage();
        }
    }
});

// ========== CONTACT FORM ==========
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (!name || !email || !subject || !message) {
        alert('Mohon lengkapi semua field!');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Mohon masukkan email yang valid!');
        return;
    }
    
    // Here you would normally send the form data to a server
    // For now, we'll just show a success message
    alert(`Terima kasih ${name}! Pesan Anda telah diterima. Saya akan menghubungi Anda segera.`);
    
    // Reset form
    contactForm.reset();
    
    // In a real application, you would send this data to a backend:
    // fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ name, email, subject, message })
    // })
});

// ========== SCROLL ANIMATIONS ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for fade-in animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
});

// ========== TYPING EFFECT (Optional Enhancement) ==========
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to enable typing effect on hero description
// const heroDescription = document.querySelector('.hero-description');
// if (heroDescription) {
//     const originalText = heroDescription.textContent;
//     typeWriter(heroDescription, originalText, 50);
// }

// ========== PARALLAX EFFECT (Optional Enhancement) ==========
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// ========== LOADING ANIMATION ==========
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate hero section on load
    const heroText = document.querySelector('.hero-text');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroText) {
        heroText.style.animation = 'fadeInUp 1s ease-out';
    }
    if (heroImage) {
        heroImage.style.animation = 'fadeInRight 1s ease-out';
    }
});

// ========== CONSOLE MESSAGE ==========
console.log('%c👋 Halo! Selamat datang di Portfolio Haikal Saputra Mamonto', 'color: #6366f1; font-size: 16px; font-weight: bold;');
console.log('%cWebsite ini dibuat dengan HTML, CSS, dan JavaScript murni.', 'color: #64748b; font-size: 12px;');

