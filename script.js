// Portfolio Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Data for skills and languages
    const technicalSkills = [
        "React", "GCP", "NodeJS", "Express", "NestJS", "Postgres", "MySQL", 
        "MongoDB", "Redux", "CI/CD", "Tanstack", "Redis", "Tailwind CSS", 
        "Micro-services", "AWS", "Socket.IO", "Docker", "GraphQL", "Git", "TypeScript"
    ];
    
    const softSkills = [
        { label: "Quick Learner", icon: "✨" },
        { label: "Problem-solving", icon: "💡" },
        { label: "Adaptability", icon: "📦" },
        { label: "Desire to Learn", icon: "✨" },
        { label: "Time Management", icon: "⏰" },
        { label: "Teamwork", icon: "👥" }
    ];
    
    const languages = ["English", "Hindi", "Gujarati"];
    
    // Populate technical skills
    const technicalSkillsContainer = document.getElementById('technical-skills');
    if (technicalSkillsContainer) {
        technicalSkills.forEach(skill => {
            const skillTag = document.createElement('span');
            skillTag.className = 'skill-tag primary';
            skillTag.textContent = skill;
            technicalSkillsContainer.appendChild(skillTag);
        });
    }
    
    // Populate soft skills
    const softSkillsContainer = document.getElementById('soft-skills');
    if (softSkillsContainer) {
        softSkills.forEach(skill => {
            const skillTag = document.createElement('span');
            skillTag.className = 'skill-tag outline soft';
            skillTag.innerHTML = `<span>${skill.icon}</span> ${skill.label}`;
            softSkillsContainer.appendChild(skillTag);
        });
    }
    
    // Populate languages
    const languagesContainer = document.getElementById('languages');
    if (languagesContainer) {
        languages.forEach(language => {
            const languageItem = document.createElement('li');
            languageItem.className = 'language-item';
            languageItem.textContent = language;
            languagesContainer.appendChild(languageItem);
        });
    }
    
    // Update current year in footer
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    
    // Mobile Navigation
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileBackdrop = document.querySelector('.mobile-backdrop');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const html = document.documentElement;
    
    // Toggle mobile menu
    function toggleMobileMenu() {
        const isOpen = mobileNav.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', isOpen);
        
        // Toggle backdrop
        if (isOpen) {
            mobileBackdrop.classList.add('visible');
            document.body.classList.add('menu-open');
            // Prevent scrolling when menu is open
            document.body.style.overflow = 'hidden';
        } else {
            mobileBackdrop.classList.remove('visible');
            document.body.classList.remove('menu-open');
            // Re-enable scrolling
            document.body.style.overflow = '';
        }
    }
    
    // Close mobile menu when clicking on a link
    function closeMobileMenu() {
        mobileNav.classList.remove('open');
        mobileBackdrop.classList.remove('visible');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
        document.body.style.overflow = '';
    }
    
    // Event listeners for mobile menu
    if (menuToggle && mobileNav && mobileBackdrop) {
        menuToggle.addEventListener('click', toggleMobileMenu);
        mobileBackdrop.addEventListener('click', closeMobileMenu);
        
        // Close menu when clicking on a mobile nav link
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
        
        // Close menu when pressing Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
                closeMobileMenu();
            }
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        // Skip if it's a button with a hash
        if (link.getAttribute('role') === 'button' && link.getAttribute('href') === '#') {
            return;
        }
        
        link.addEventListener('click', function(e) {
            // Don't prevent default for external links
            if (this.getAttribute('target') === '_blank' || this.getAttribute('rel') === 'external') {
                return true;
            }
            
            const href = this.getAttribute('href');
            
            // Skip if it's a # link or empty hash
            if (href === '#' || href === '#!') {
                e.preventDefault();
                return;
            }
            
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                if (mobileNav && mobileNav.classList.contains('open')) {
                    closeMobileMenu();
                }
                
                const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without jumping
                if (history.pushState) {
                    history.pushState(null, null, targetId);
                } else {
                    location.hash = targetId;
                }
            }
        });
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.section-title, .skills-section-title');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Header background on scroll
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.backgroundColor = 'hsl(var(--background) / 0.95)';
            header.style.backdropFilter = 'blur(20px)';
        } else {
            header.style.backgroundColor = 'hsl(var(--background) / 0.8)';
            header.style.backdropFilter = 'blur(8px)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Add hover effects to skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        category.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 15px 40px -10px hsl(var(--brand) / 0.35)';
        });
        
        category.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 8px 24px -8px hsl(var(--foreground) / 0.15)';
        });
    });
    
    // Add hover effects to contact cards
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 8px 24px -8px hsl(var(--foreground) / 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Parallax effect for hero accents
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-accent');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
    
    // Typing effect for hero title (optional enhancement)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        // Start typing effect after a delay
        setTimeout(typeWriter, 1000);
    }
    
    // Add loading animation for images (if any are added later)
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
            this.style.transform = 'scale(1)';
        });
        
        img.style.opacity = '0';
        img.style.transform = 'scale(0.95)';
        img.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });
    
    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Escape key to close mobile menu
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
        
        // Tab key navigation enhancement
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    // Remove keyboard navigation class on mouse use
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // Performance optimization: Throttle scroll events
    let ticking = false;
    
    function updateOnScroll() {
        // Update header background
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.backgroundColor = 'hsl(var(--background) / 0.95)';
            header.style.backdropFilter = 'blur(20px)';
        } else {
            header.style.backgroundColor = 'hsl(var(--background) / 0.8)';
            header.style.backdropFilter = 'blur(8px)';
        }
        
        // Update parallax
        const parallaxElements = document.querySelectorAll('.hero-accent');
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrollTop * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
        
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    });
    
    // Initialize tooltips for skill tags (if needed)
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Add focus-visible polyfill for better keyboard navigation
    if (!CSS.supports('selector(:focus-visible)')) {
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });
        
        document.addEventListener('mousedown', function() {
            document.body.classList.remove('keyboard-navigation');
        });
    }
    
    // Console welcome message
    console.log('%c👋 Welcome to my portfolio!', 'color: #8b5cf6; font-size: 20px; font-weight: bold;');
    console.log('%cFeel free to explore the code and reach out if you have any questions!', 'color: #64748b; font-size: 14px;');
    
}); 