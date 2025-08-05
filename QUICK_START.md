# 🚀 Quick Start Guide

Get your portfolio up and running in 5 minutes!

## 📋 Before You Start

Make sure you have:
- A GitHub account
- Git installed on your computer
- Your personal information ready
- Profile picture and project images

## ⚡ 5-Minute Setup

### Step 1: Get the Code
```bash
# Clone or download this repository
git clone https://github.com/elgmmal74/web_portfolio.git
cd web_portfolio
```

### Step 2: Customize Your Content
Edit `js/config.js` and update:
- ✏️ Your name and job title
- 📧 Contact information
- 🔗 Social media links
- 💼 Projects information
- 📝 Bio and description

### Step 3: Add Your Images
Replace these files in `assets/img/`:
- `profile.jpg` - Your profile picture
- `project1.jpg` - First project screenshot
- `project2.jpg` - Second project screenshot
- `project3.jpg` - Third project screenshot
- `project4.jpg` - Fourth project screenshot

### Step 4: Test Locally
Open `index.html` in your browser or use:
```bash
# Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

### Step 5: Deploy to GitHub
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio setup"

# Create main branch
git branch -M main

# Add your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/web_portfolio.git

# Push to GitHub
git push -u origin main
```

### Step 6: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section
4. Select **Deploy from a branch**
5. Choose **main** branch
6. Click **Save**

🎉 **Done!** Your portfolio will be live at:
`https://YOUR_USERNAME.github.io/web_portfolio`

## 🎨 Customization Tips

### Colors & Themes
- The website automatically adapts to dark/light mode
- Colors are defined in CSS custom properties
- Easy to customize in `css/style.css`

### Adding Projects
In `js/config.js`, add new projects to the `projects` array:
```javascript
{
    id: 5,
    title: "Your New Project",
    description: "Project description...",
    image: "assets/img/project5.jpg",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "web", // "ai", "web", or "automation"
    status: "completed", // "completed", "in-progress", or "planning"
    progress: 100,
    liveLink: "https://your-project.com",
    githubLink: "https://github.com/you/project"
}
```

### Contact Information
Update the `contact` section in `js/config.js`:
```javascript
contact: {
    email: "your.email@example.com",
    phone: "+1234567890",
    location: "Your City, Country",
    links: {
        whatsapp: "https://wa.me/1234567890",
        email: "mailto:your.email@example.com",
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername"
    }
}
```

## 🔧 Troubleshooting

### Images Not Showing?
- Check file names match exactly in `config.js`
- Ensure images are in `assets/img/` folder
- Use `.jpg`, `.png`, or `.webp` formats

### Site Not Loading?
- Wait 5-10 minutes after enabling GitHub Pages
- Check repository settings
- Ensure `index.html` is in the root directory

### Styling Issues?
- Clear browser cache (Ctrl+F5)
- Check CSS file path
- Validate CSS syntax

## 📚 Need More Help?

- 📖 Read the full [README.md](README.md)
- 🚀 Check [DEPLOYMENT.md](DEPLOYMENT.md) for advanced deployment
- 🤝 See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines
- 🐛 Report issues on [GitHub Issues](../../issues)

## 🎯 Next Steps

After your portfolio is live:
1. Share it on social media
2. Add the URL to your resume
3. Update content regularly
4. Monitor performance with Google Analytics
5. Get feedback and iterate

---

**Happy coding!** 🚀✨
