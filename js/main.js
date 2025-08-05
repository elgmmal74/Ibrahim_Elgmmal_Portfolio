// Portfolio Main JavaScript
// Handles all dynamic functionality and interactions

class Portfolio {
    constructor() {
        this.config = CONFIG;
        this.currentTheme = this.getStoredTheme() || this.config.settings.defaultTheme;
        this.init();
    }

    init() {
        this.setTheme(this.currentTheme);
        this.populateContent();
        this.setupEventListeners();
        this.setupContactForm();
        this.setupScrollEffects();
        this.setupActiveNavigation();
        this.setupProjectFilters();
        this.setupConnectModal();
        this.hideLoadingScreen();
        this.setupAnimations();
    }

    // Theme Management
    getStoredTheme() {
        return localStorage.getItem('portfolio-theme');
    }

    setTheme(theme) {
        this.currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('portfolio-theme', theme);
        this.updateThemeToggleIcon();
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }

    updateThemeToggleIcon() {
        const themeToggle = document.getElementById('theme-toggle');
        const icon = themeToggle.querySelector('i');
        if (this.currentTheme === 'light') {
            icon.className = 'fas fa-moon';
        } else {
            icon.className = 'fas fa-sun';
        }
    }

    // Content Population
    populateContent() {
        this.populatePersonalInfo();
        this.populateProjects();
        this.populateContactInfo();
        this.populateSocialLinks();
    }

    populatePersonalInfo() {
        const { personal } = this.config;
        
        // Navigation and footer
        document.getElementById('nav-name').textContent = personal.fullName;
        document.getElementById('footer-name').textContent = personal.fullName;
        
        // Hero section
        document.getElementById('profile-image').src = personal.profileImage;
        document.getElementById('profile-image').alt = `${personal.fullName} - Profile Picture`;
        document.getElementById('hero-name').textContent = personal.fullName;
        document.getElementById('hero-title').textContent = personal.jobTitle;
        document.getElementById('hero-bio').textContent = personal.bio;
        

    }

    populateProjects() {
        const projectsGrid = document.getElementById('projects-grid');
        projectsGrid.innerHTML = '';

        this.config.projects.forEach((project, index) => {
            const projectCard = this.createProjectCard(project, index);
            projectsGrid.appendChild(projectCard);
        });
    }

    createProjectCard(project, index) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-category', project.category);
        card.style.animationDelay = `${index * 0.1}s`;

        const techTags = project.technologies.map(tech =>
            `<span class="tech-tag">${tech}</span>`
        ).join('');

        // Status badge
        const statusClass = project.status === 'completed' ? 'completed' :
                           project.status === 'in-progress' ? 'in-progress' : 'planning';
        const statusText = project.status === 'completed' ? 'Completed' :
                          project.status === 'in-progress' ? `${project.progress}% Complete` : 'Planning';

        // Fallback image with better placeholder
        const fallbackImage = `data:image/svg+xml;base64,${btoa(`
            <svg width="400" height="220" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="220" fill="#f1f5f9"/>
                <rect x="150" y="80" width="100" height="60" rx="8" fill="#e2e8f0"/>
                <circle cx="170" cy="100" r="8" fill="#cbd5e1"/>
                <path d="M180 95L195 110L180 125" stroke="#94a3b8" stroke-width="2" fill="none"/>
                <text x="200" y="140" text-anchor="middle" fill="#64748b" font-family="Inter, sans-serif" font-size="12">${project.title}</text>
            </svg>
        `)}`;

        card.innerHTML = `
            <div class="project-image-container">
                <img src="${project.image}" alt="${project.title} - ${project.description.substring(0, 100)}..." class="project-image"
                     onerror="this.src='${fallbackImage}'">
                <div class="project-status ${statusClass}">${statusText}</div>
            </div>
            <div class="project-content">
                <div class="project-header">
                    <h3 class="project-title">${project.title}</h3>
                </div>
                <p class="project-description">${project.description}</p>
                <div class="project-technologies" role="list" aria-label="Technologies used">${techTags}</div>
                <div class="project-links">
                    <a href="${project.liveLink}"
                       target="_blank"
                       rel="noopener noreferrer"
                       class="project-link demo-link"
                       data-tooltip="View live demo"
                       aria-label="View live demo of ${project.title}">
                        <span class="project-link-icon">🌐</span>
                        Live Demo
                    </a>
                    <a href="${project.githubLink}"
                       target="_blank"
                       rel="noopener noreferrer"
                       class="project-link github-link"
                       data-tooltip="View source code"
                       aria-label="View source code for ${project.title} on GitHub">
                        <span class="project-link-icon">🐙</span>
                        GitHub
                    </a>
                </div>
            </div>
        `;

        return card;
    }



    populateContactInfo() {
        // Contact info is now handled by the connect modal
        this.populateConnectOptions();
    }

    populateConnectOptions() {
        const connectOptions = document.getElementById('connect-options');
        if (!connectOptions) return;

        connectOptions.innerHTML = '';

        const contactMethods = [
            {
                platform: 'email',
                icon: 'fas fa-envelope',
                title: 'Email',
                description: 'Send me an email',
                url: this.config.contact.links.email
            },
            {
                platform: 'whatsapp',
                icon: 'fab fa-whatsapp',
                title: 'WhatsApp',
                description: 'Chat on WhatsApp',
                url: this.config.contact.links.whatsapp
            },
            {
                platform: 'linkedin',
                icon: 'fab fa-linkedin',
                title: 'LinkedIn',
                description: 'Connect professionally',
                url: this.config.contact.links.linkedin
            },
            {
                platform: 'github',
                icon: 'fab fa-github',
                title: 'GitHub',
                description: 'Check out my code',
                url: this.config.contact.links.github
            }
        ];

        contactMethods.forEach(method => {
            const option = document.createElement('a');
            option.href = method.url;
            option.target = '_blank';
            option.rel = 'noopener noreferrer';
            option.className = 'connect-option';

            option.innerHTML = `
                <i class="${method.icon}"></i>
                <div class="connect-option-text">
                    <strong>${method.title}</strong>
                    <span>${method.description}</span>
                </div>
            `;

            connectOptions.appendChild(option);
        });
    }

    populateSocialLinks() {
        this.populateHeroSocialLinks();
        this.populateContactSocialLinks();
    }

    populateHeroSocialLinks() {
        const socialLinksContainer = document.getElementById('social-links');
        socialLinksContainer.innerHTML = '';

        Object.entries(this.config.contact.links).forEach(([platform, url]) => {
            if (platform !== 'email') {
                const link = this.createSocialLink(platform, url, true);
                socialLinksContainer.appendChild(link);
            }
        });
    }

    populateContactSocialLinks() {
        // Social links are now handled by the connect modal
        // This method is kept for compatibility but does nothing
    }

    createSocialLink(platform, url, isIcon = true) {
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.className = 'social-link';

        const iconMap = {
            whatsapp: 'fab fa-whatsapp',
            email: 'fas fa-envelope',
            github: 'fab fa-github',
            linkedin: 'fab fa-linkedin'
        };

        if (isIcon) {
            link.innerHTML = `<i class="${iconMap[platform] || 'fas fa-link'}"></i>`;
            link.title = this.config.socialLabels[platform] || platform;
        } else {
            link.innerHTML = `
                <i class="${iconMap[platform] || 'fas fa-link'}"></i>
                ${this.config.socialLabels[platform] || platform}
            `;
        }

        return link;
    }

    // Event Listeners
    setupEventListeners() {
        // Theme toggle
        document.getElementById('theme-toggle').addEventListener('click', () => {
            this.toggleTheme();
        });

        // Mobile navigation
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 70; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });

                    // Update active navigation immediately
                    this.updateActiveNavigation(anchor.getAttribute('href'));
                }
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // Active Navigation
    setupActiveNavigation() {
        // Set initial active state
        this.updateActiveNavigation('#home');

        // Create intersection observer for sections
        const sections = document.querySelectorAll('section[id]');

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                    const sectionId = `#${entry.target.id}`;
                    this.updateActiveNavigation(sectionId);
                }
            });
        }, {
            threshold: [0.3],
            rootMargin: '-70px 0px -50% 0px' // Account for navbar height
        });

        sections.forEach(section => {
            sectionObserver.observe(section);
        });
    }

    updateActiveNavigation(activeSection) {
        // Remove active class from all nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });

        // Add active class to current section link
        const activeLink = document.querySelector(`.nav-link[href="${activeSection}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }



    // Project Filters
    setupProjectFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');

                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Filter projects
                this.filterProjects(filter);
            });
        });
    }

    filterProjects(category) {
        const projectCards = document.querySelectorAll('.project-card');

        projectCards.forEach((card, index) => {
            const cardCategory = card.getAttribute('data-category');
            const shouldShow = category === 'all' || cardCategory === category;

            if (shouldShow) {
                card.style.display = 'block';
                card.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;
            } else {
                card.style.animation = 'fadeOut 0.3s ease-out both';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Contact Form
    setupContactForm() {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmission(contactForm);
            });
        }
    }

    handleFormSubmission(form) {
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        // Create mailto link with form data
        const subject = encodeURIComponent(data.subject);
        const body = encodeURIComponent(
            `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
        );
        const mailtoLink = `mailto:${this.config.contact.email}?subject=${subject}&body=${body}`;

        // Open email client
        window.location.href = mailtoLink;

        // Show success message
        this.showSuccessMessage();

        // Reset form
        form.reset();
    }

    showSuccessMessage() {
        const form = document.getElementById('contact-form');
        const successMessage = document.getElementById('form-success-message');

        // Hide form and show success message
        form.style.display = 'none';
        successMessage.classList.add('show');

        // Reset after 5 seconds
        setTimeout(() => {
            form.style.display = 'flex';
            successMessage.classList.remove('show');
        }, 5000);
    }

    // Connect Modal
    setupConnectModal() {
        const connectBtn = document.getElementById('connect-btn');
        const modal = document.getElementById('connect-modal');
        const modalOverlay = document.getElementById('modal-overlay');
        const modalClose = document.getElementById('modal-close');

        if (connectBtn && modal) {
            connectBtn.addEventListener('click', () => {
                modal.classList.add('show');
                document.body.style.overflow = 'hidden';
            });

            const closeModal = () => {
                modal.classList.remove('show');
                document.body.style.overflow = 'auto';
            };

            modalOverlay.addEventListener('click', closeModal);
            modalClose.addEventListener('click', closeModal);

            // Close modal with Escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && modal.classList.contains('show')) {
                    closeModal();
                }
            });
        }
    }

    // Scroll Effects
    setupScrollEffects() {
        // Navbar background on scroll
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.style.background = this.currentTheme === 'light'
                    ? 'rgba(255, 255, 255, 0.98)'
                    : 'rgba(15, 23, 42, 0.98)';
                navbar.style.boxShadow = this.currentTheme === 'light'
                    ? '0 2px 20px rgba(0, 0, 0, 0.1)'
                    : '0 2px 20px rgba(0, 0, 0, 0.3)';
            } else {
                navbar.style.background = this.currentTheme === 'light'
                    ? 'rgba(255, 255, 255, 0.95)'
                    : 'rgba(15, 23, 42, 0.95)';
                navbar.style.boxShadow = this.currentTheme === 'light'
                    ? '0 2px 10px rgba(0, 0, 0, 0.1)'
                    : '0 2px 10px rgba(0, 0, 0, 0.15)';
            }
        });

        // Intersection Observer for animations
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

        // Observe elements for scroll animations
        document.querySelectorAll('.project-card, .contact-form-section, .contact-info-section').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    // Animations
    setupAnimations() {
        // Add fade-in animation to sections
        const sections = document.querySelectorAll('section');
        sections.forEach((section, index) => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            section.style.animationDelay = `${index * 0.1}s`;
            
            setTimeout(() => {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    // Loading Screen
    hideLoadingScreen() {
        setTimeout(() => {
            const loadingScreen = document.getElementById('loading-screen');
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1000);
    }
}

// Initialize Portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Portfolio();
});

// Handle page visibility change
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        // Refresh any time-sensitive content if needed
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    // Close mobile menu on resize
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
});
