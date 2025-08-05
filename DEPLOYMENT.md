# 🚀 Deployment Guide

This guide covers different methods to deploy your portfolio website.

## 📋 Pre-Deployment Checklist

Before deploying, ensure you have:

- [ ] Updated `js/config.js` with your personal information
- [ ] Added your profile picture to `assets/img/profile.jpg`
- [ ] Added project screenshots to `assets/img/`
- [ ] Tested the website locally
- [ ] Verified responsive design on different devices
- [ ] Checked dark/light mode functionality
- [ ] Validated HTML and CSS
- [ ] Optimized images for web

## 🌐 GitHub Pages (Recommended)

### Automatic Deployment

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

3. **Access your site**:
   - Your site will be available at: `https://yourusername.github.io/web_portfolio`
   - GitHub Actions will automatically deploy updates

### Manual Setup

If automatic deployment doesn't work:

1. Go to repository Settings → Pages
2. Source: Deploy from a branch
3. Branch: main
4. Folder: / (root)
5. Save and wait for deployment

## 🔧 Other Deployment Options

### Netlify

1. **Connect Repository**:
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Build Settings**:
   - Build command: (leave empty)
   - Publish directory: (leave empty or use "./")
   - Deploy!

3. **Custom Domain** (Optional):
   - Go to Site settings → Domain management
   - Add your custom domain

### Vercel

1. **Import Project**:
   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

2. **Deploy**:
   - Framework Preset: Other
   - Root Directory: ./
   - Build Command: (leave empty)
   - Output Directory: (leave empty)

### Firebase Hosting

1. **Install Firebase CLI**:
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Firebase**:
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Configure**:
   - Public directory: . (current directory)
   - Single-page app: No
   - Overwrite index.html: No

4. **Deploy**:
   ```bash
   firebase deploy
   ```

### Traditional Web Hosting

For shared hosting or VPS:

1. **Upload Files**:
   - Upload all files to your web server's public directory
   - Maintain the folder structure

2. **Configure Server** (if needed):
   - Ensure MIME types are set correctly
   - Enable HTTPS
   - Set up redirects if needed

## 🔒 Security Headers

Add these headers for better security:

```
Content-Security-Policy: default-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com https://cdnjs.cloudflare.com
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

## 📊 Performance Optimization

### Before Deployment

1. **Optimize Images**:
   - Compress images using tools like TinyPNG
   - Use WebP format when possible
   - Ensure images are properly sized

2. **Minify Code** (Optional):
   - Minify CSS and JavaScript
   - Remove unused code
   - Optimize font loading

### After Deployment

1. **Test Performance**:
   - Use Google PageSpeed Insights
   - Test on different devices
   - Check loading times

2. **Monitor**:
   - Set up Google Analytics (optional)
   - Monitor for broken links
   - Check mobile usability

## 🌍 Custom Domain Setup

### GitHub Pages

1. **Add CNAME file**:
   ```bash
   echo "yourdomain.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

2. **Configure DNS**:
   - Add CNAME record pointing to `yourusername.github.io`
   - Wait for DNS propagation

### Other Platforms

Follow the specific platform's documentation for custom domain setup.

## 🔧 Troubleshooting

### Common Issues

1. **Site not loading**:
   - Check if GitHub Pages is enabled
   - Verify branch and folder settings
   - Wait for deployment to complete

2. **Images not showing**:
   - Check file paths in `config.js`
   - Ensure images are in the correct directory
   - Verify image file names match exactly

3. **Styles not applying**:
   - Check CSS file path
   - Clear browser cache
   - Verify CSS syntax

4. **JavaScript not working**:
   - Check browser console for errors
   - Verify file paths
   - Ensure proper syntax

### Getting Help

- Check the [Issues](../../issues) page
- Review the [Contributing Guide](CONTRIBUTING.md)
- Contact the maintainer

## ✅ Post-Deployment

After successful deployment:

1. **Test thoroughly** on different devices
2. **Share your portfolio** on social media
3. **Update your resume** with the portfolio URL
4. **Keep content updated** regularly
5. **Monitor performance** and user feedback

---

🎉 **Congratulations!** Your portfolio is now live and ready to showcase your work to the world!
