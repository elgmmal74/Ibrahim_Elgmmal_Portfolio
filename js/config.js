// Portfolio Configuration
// All personal information and content should be updated here

const CONFIG = {
    // Personal Information
    personal: {
        fullName: "Ibrahim W Elgmmal",
        jobTitle: "AI & Automation Engineer",
        profileImage: "assets/img/profile.jpg",
        bio: "Passionate AI & Automation Engineer with expertise in building innovative web applications and AI-powered solutions. I specialize in creating intelligent systems that streamline processes and enhance user experiences through cutting-edge technology.",
        resumePath: "assets/resume.pdf"
    },

    // Contact Information
    contact: {
        email: "ibrahimw319@gmail.com",
        phone: "+01063299747",
        location: "Egypt,Cairo",
        links: {
            whatsapp: "https://wa.me/01063299747",
            email: "mailto:ibrahimw319@gmail.com",
            github: "https://github.com/elgmmal74/",
            linkedin: "https://www.linkedin.com/in/elgmmal74/"
        }
    },

    // Projects Portfolio
    projects: [
        {
            id: 1,
            title: "Movie Recommendation System",
            description: "This Movie Recommendation System is based on content-based filtering, where movies are recommended based on their descriptions. The system analyzes the textual content of movies to find similarities and suggest relevant recommendations to users",
            image: "assets/img/movie_project.jpg",
            technologies: ["Python", "HTML5","CSS3", "Flask", "Scikit-learn "],
            category: "ai",
            status: "completed",
            progress: 100,
            liveLink: "https://example.com/project1",
            githubLink: "https://github.com/elgmmal74/Movie-Recommendation-System"
        },
        {
            id: 2,
            title: "cozy-corner-coffee",
            description: "Experience our modern coffee shop website featuring an intelligent bilingual chatbot for seamless customer interaction.",
    image: "assets/img/cozy-corner-coffee.png",
            technologies: ["JavaScript", "HTML5", "CSS3", ],
            category: "web",
            status: "completed",
            progress: 100,
            liveLink: "https://example.com/project2",
            githubLink: "https://github.com/elgmmal74/cozy-corner-coffee"
        },
        {
            id: 3,
            title: "Intelligent Chatbot Platform",
            description: "Created a conversational AI platform with natural language processing capabilities for customer service automation.",
            image: "assets/img/project3.jpg",
            technologies: ["Python", "NLP", "Flask", "PostgreSQL"],
            category: "ai",
            status: "in-progress",
            progress: 85,
            liveLink: "https://example.com/project3",
            githubLink: "https://github.com/ibrahim-elgmmal/chatbot-platform"
        },
        {
            id: 4,
            title: "Process Automation Suite",
            description: "Comprehensive automation toolkit for business processes with workflow management and real-time monitoring capabilities.",
            image: "assets/img/project4.jpg",
            technologies: ["Python", "Selenium", "Docker", "PostgreSQL"],
            category: "automation",
            status: "planning",
            progress: 25,
            liveLink: "https://example.com/project4",
            githubLink: "https://github.com/ibrahim-elgmmal/automation-suite"
        }
    ],

    // Technical Skills
    skills: [
        "JavaScript", "Python", "HTML5", "CSS3", "React", "Node.js",
        "Machine Learning", "TensorFlow", "PyTorch", "Natural Language Processing",
        "API Development", "Database Design", "Cloud Computing", "DevOps",
        "Git", "Docker", "Kubernetes", "AWS", "Azure", "MongoDB", "PostgreSQL"
    ],

    // Testimonials
    testimonials: [
        {
            id: 1,
            name: "Sarah Johnson",
            position: "Product Manager at TechCorp",
            content: "Ibrahim's expertise in AI and automation transformed our workflow. His innovative solutions saved us countless hours and significantly improved our productivity.",
            avatar: "assets/img/testimonial1.jpg"
        },
        {
            id: 2,
            name: "Michael Chen",
            position: "CTO at StartupXYZ",
            content: "Working with Ibrahim was exceptional. His ability to translate complex AI concepts into practical solutions is remarkable. Highly recommended!",
            avatar: "assets/img/testimonial2.jpg"
        }
    ],

    // Website Settings
    settings: {
        defaultTheme: "light", // "light" or "dark"
        animationDuration: 300,
        scrollOffset: 80,
        showTestimonials: true,
        showSkillsAsIcons: false, // true for icons, false for tags
        projectsPerRow: 3,
        enableParticles: true
    },

    // Social Media Display Names
    socialLabels: {
        whatsapp: "WhatsApp",
        email: "Email",
        github: "GitHub",
        linkedin: "LinkedIn"
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
