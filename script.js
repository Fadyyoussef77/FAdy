// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Show loader initially and hide it after content loads
    const loader = document.querySelector('.loader');

    // Initialize text scramble for loader
    initializeTextScramble();

    // Hide loader after page loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 1500);
    });

    // Initialize particles.js with professional settings
    initializeParticles();

    // Initialize typed.js for typewriter effect
    initializeTyped();

    // Navigation functionality
    initializeNavigation();

    // Custom cursor
    initializeCustomCursor();

    // Stats counter animation
    initializeStatsCounter();

    // Skill bar animation
    initializeSkillBars();

    // Project filtering
    initializeProjectFilters();

    // Contact form
    initializeContactForm();

    // Scroll to top button
    initializeScrollToTop();

    // Initialize interests section
    initializeInterests();

    // Initialize experience section
    initializeExperience();

    initializeEducation();


    // Initialize project download buttons
    initializeProjectDownloads();

    initializeAdditionalInfo();


});

// Initialize text scramble for loader - refined version
function initializeTextScramble() {
    const scrambleTextElement = document.getElementById('scramble-text');
    if (!scrambleTextElement) return;

    const originalText = scrambleTextElement.textContent;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let frame = 0;
    const totalFrames = 18;
    const scrambleInterval = 40;

    const scramble = () => {
        let scrambled = '';
        for (let i = 0; i < originalText.length; i++) {
            if (i < frame / 1.8) {
                scrambled += originalText[i];
            } else {
                scrambled += characters.charAt(Math.floor(Math.random() * characters.length));
            }
        }
        scrambleTextElement.textContent = scrambled;

        if (frame < totalFrames) {
            frame++;
            setTimeout(scramble, scrambleInterval);
        } else {
            scrambleTextElement.textContent = originalText;
        }
    };

    scramble();
}

// Initialize particles.js with more professional, subtle settings
function initializeParticles() {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 60,
                density: {
                    enable: true,
                    value_area: 900
                }
            },
            color: {
                value: '#E8B86D'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                }
            },
            opacity: {
                value: 0.3,
                random: true,
                anim: {
                    enable: true,
                    speed: 0.5,
                    opacity_min: 0.05,
                    sync: false
                }
            },
            size: {
                value: 2.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1.5,
                    size_min: 0.3,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 140,
                color: '#4A7BA7',
                opacity: 0.25,
                width: 1
            },
            move: {
                enable: true,
                speed: 0.8,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 180,
                    line_linked: {
                        opacity: 0.5
                    }
                },
                push: {
                    particles_nb: 3
                }
            }
        },
        retina_detect: true
    });
}

// Initialize typed.js
function initializeTyped() {
    const typeElement = document.getElementById('type-element');
    if (typeElement) {
        new Typed('#type-element', {
        strings: ['IT Professional <i class="fas fa-laptop"></i>', 'IT Specialist <i class="fab fa-python"></i>', 'System Analyst <i class="fas fa-brain"></i>'],
            typeSpeed: 75,
            backSpeed: 35,
            backDelay: 1800,
            startDelay: 1000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }
}

// Initialize navigation
function initializeNavigation() {
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // Sticky navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active nav link based on scroll position
        updateActiveNavLink();
    });

    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');

        // Animate menu bars
        const bars = menuToggle.querySelectorAll('.bar');
        if (menuToggle.classList.contains('active')) {
            bars[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
        } else {
            bars[0].style.transform = 'rotate(0) translate(0)';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'rotate(0) translate(0)';
        }
    });

    // Close mobile menu when clicking on a nav link
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');

            // Reset menu bars
            const bars = menuToggle.querySelectorAll('.bar');
            bars[0].style.transform = 'rotate(0) translate(0)';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'rotate(0) translate(0)';
        });
    });

    // Smooth scroll for navigation links
    navLinksItems.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Update active navigation link based on scroll position
    function updateActiveNavLink() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinksItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
}

// Initialize custom cursor with smoother animation
function initializeCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    const follower = document.querySelector('.cursor-follower');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

        setTimeout(() => {
            follower.style.left = e.clientX + 'px';
            follower.style.top = e.clientY + 'px';
        }, 80);
    });

    // Change cursor style on hover over links and buttons
    const hoverElements = document.querySelectorAll('a, button, .project-item');

    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.3)';
            follower.style.transform = 'translate(-50%, -50%) scale(1.4)';
            follower.style.border = '2px solid var(--accent-color)';
            follower.style.backgroundColor = 'rgba(232, 184, 109, 0.1)';
        });

        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            follower.style.transform = 'translate(-50%, -50%) scale(1)';
            follower.style.border = '2px solid var(--accent-color)';
            follower.style.backgroundColor = 'transparent';
        });
    });
}

// Initialize stats counter with smoother easing
function initializeStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const countTo = parseInt(target.getAttribute('data-count'));
                let count = 0;
                const duration = 2000;
                const increment = countTo / (duration / 25);

                const updateCount = () => {
                    if (count < countTo) {
                        count += increment;
                        target.textContent = Math.ceil(count);
                        setTimeout(updateCount, 25);
                    } else {
                        target.textContent = countTo;
                    }
                };

                updateCount();
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => {
        observer.observe(stat);
    });
}

// Initialize skill bars with smoother animation
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const percent = bar.getAttribute('data-percent') + '%';
                setTimeout(() => {
                    bar.style.width = percent;
                }, 200);
                observer.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Initialize project filters with refined animations
function initializeProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Get filter value
            const filterValue = button.getAttribute('data-filter');

            // Filter projects
            projectItems.forEach((item, index) => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.classList.remove('hide');
                    setTimeout(() => {
                        item.classList.add('show');
                    }, index * 50);
                } else {
                    item.classList.remove('show');
                    item.classList.add('hide');
                }
            });
        });
    });
}

// Initialize contact form
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Basic form validation
            if (name.trim() === '' || email.trim() === '' || subject.trim() === '' || message.trim() === '') {
                alert('Please fill in all fields');
                return;
            }

            // Simulate form submission
            alert(`Thank you for your message, ${name}! I'll get back to you soon.`);

            // Reset form
            contactForm.reset();
        });
    }
}

// Initialize scroll to top button
function initializeScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollToTopBtn.classList.add('active');
        } else {
            scrollToTopBtn.classList.remove('active');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });



    // Initialize interests section animations
function initializeInterests() {
    const interestItems = document.querySelectorAll('.interest-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.animationPlayState = 'running';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    interestItems.forEach(item => {
        // Initially pause animation until observed
        item.style.animationPlayState = 'paused';
        item.style.animationDuration = '0.8s';
        observer.observe(item);
    });
}




// Initialize experience section animations
function initializeExperience() {
    const experienceItems = document.querySelectorAll('.experience-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    experienceItems.forEach(item => {
        // Initially pause animation until observed
        item.style.animationPlayState = 'paused';
        item.style.animationDuration = '0.8s';
        observer.observe(item);
    });
}



// Add this function
function initializeEducation() {
    const educationItems = document.querySelectorAll('.education-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    educationItems.forEach(item => {
        // Initially pause animation until observed
        item.style.animationPlayState = 'paused';
        item.style.animationDuration = '0.8s';
        observer.observe(item);
    });
}





// Add this function after the other initialization functions
function initializeProjectDownloads() {
    const downloadButtons = document.querySelectorAll('.download-btn');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const projectName = this.getAttribute('data-project');
            const button = this;
            
            // Prevent multiple clicks
            if (button.classList.contains('downloading')) return;
            
            // Add downloading state
            button.classList.add('downloading');
            button.innerHTML = '<i class="fas fa-download"></i><span>Downloading...</span><div class="download-progress"></div>';
            
            // Simulate download delay (2 seconds)
            setTimeout(() => {
                // Remove downloading state
                button.classList.remove('downloading');
                
                // Add success state
                button.classList.add('success');
                button.innerHTML = '<i class="fas fa-check"></i><span>Download Complete!</span>';
                
                // Update download count
                let count = parseInt(button.getAttribute('data-count') || '0');
                count++;
                button.setAttribute('data-count', count);
                
                // Show success notification
                showDownloadNotification(projectName);
                
                // Reset button after 2 seconds
                setTimeout(() => {
                    button.classList.remove('success');
                    button.innerHTML = '<i class="fas fa-download"></i><span>' + button.querySelector('span').textContent + '</span><div class="download-progress"></div>';
                }, 2000);
                
            }, 2000);
        });
    });
}

// Function to show download notification
function showDownloadNotification(projectName) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'download-notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <div class="notification-content">
            <h4>Download Complete!</h4>
            <p>${projectName} has been downloaded successfully.</p>
        </div>
        <button class="notification-close"><i class="fas fa-times"></i></button>
    `;
    
    // Add styles for notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, var(--card-background), var(--secondary-background));
        border: 1px solid var(--accent-color);
        border-radius: 12px;
        padding: 15px 20px;
        display: flex;
        align-items: center;
        gap: 15px;
        z-index: 10000;
        transform: translateX(150%);
        transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        max-width: 350px;
        animation: slideIn 0.5s forwards;
    `;
    
    document.body.appendChild(notification);
    
    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            to { transform: translateX(0); }
        }
        @keyframes slideOut {
            from { transform: translateX(0); }
            to { transform: translateX(150%); }
        }
    `;
    document.head.appendChild(style);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOut 0.5s forwards';
        setTimeout(() => {
            notification.remove();
            style.remove();
        }, 500);
    });
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOut 0.5s forwards';
            setTimeout(() => {
                notification.remove();
                style.remove();
            }, 500);
        }
    }, 5000);
}





// Add this function after initializeEducation()
function initializeAdditionalInfo() {
    const additionalColumn = document.querySelector('.additional-info-column');
    
    if (additionalColumn) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        // Initially pause animation until observed
        additionalColumn.style.animationPlayState = 'paused';
        additionalColumn.style.animationDuration = '0.8s';
        observer.observe(additionalColumn);
    }
}



}