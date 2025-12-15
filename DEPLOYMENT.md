# Deployment Guide for Netlify

## ✅ Pre-Deployment Checklist

### 1. **Public Folder Structure**
All static assets have been moved to the `/public` folder:
- ✅ `logo.png` - Main event logo
- ✅ `iitram_logo_only.jpg` - Favicon
- ⚠️ `iac-2026-cover.png` - **PLACEHOLDER** (Replace with actual 1200x630px cover image)
- ✅ `_redirects` - SPA routing configuration
- ✅ `README.md` - Asset documentation

### 2. **Netlify Configuration**
- ✅ `netlify.toml` created with build settings
- ✅ Build command: `npm run build`
- ✅ Publish directory: `dist`
- ✅ SPA redirects configured

### 3. **Vite Configuration**
- ✅ Vite automatically handles `/public` folder
- All assets in `/public` are served from root path (`/filename.ext`)

## 🚀 Deployment Steps

### Option 1: Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod
```

### Option 2: Deploy via Git Integration

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Netlify Dashboard](https://app.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Connect your repository
5. Netlify will auto-detect settings from `netlify.toml`
6. Click "Deploy site"

### Option 3: Drag & Drop Deploy

1. Build the project: `npm run build`
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag and drop the `dist` folder

## 📝 Important Notes

### Before Deploying:

1. **Replace Cover Image**: Replace `/public/iac-2026-cover.png` with your actual event cover (1200x630px recommended)

2. **Update Base URL**: In `index.html`, ensure all meta tags use absolute URLs for production:
   ```html
   <meta property="og:image" content="https://your-domain.netlify.app/iac-2026-cover.png" />
   ```

3. **Environment Variables**: If you add any API keys or secrets, use Netlify Environment Variables:
   - Go to Site settings → Environment variables
   - Add your variables there

4. **Custom Domain** (Optional):
   - Go to Site settings → Domain management
   - Add your custom domain
   - Update DNS records as instructed

## 🔧 Build Verification

Test locally before deploying:

```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

Visit `http://localhost:4173` to test the production build.

## 📱 Post-Deployment Checks

After deploying, verify:

- ✅ All routes work correctly (Home, Schedule, Speakers, etc.)
- ✅ Logo and favicon display properly
- ✅ Social media preview (use [Facebook Debugger](https://developers.facebook.com/tools/debug/) or [Twitter Card Validator](https://cards-dev.twitter.com/validator))
- ✅ Contact form submits to Formspree correctly
- ✅ All external links open properly
- ✅ Mobile responsiveness

## 🐛 Troubleshooting

### Issue: 404 on page refresh
**Solution**: Already handled by `_redirects` file

### Issue: Images not loading
**Solution**: Ensure images are in `/public` folder and referenced as `/image.png` (not `/public/image.png`)

### Issue: Build fails
**Solution**: Check Node version (should be 18+), verify in `netlify.toml`

## 📞 Support

For Netlify-specific issues, refer to [Netlify Documentation](https://docs.netlify.com/)

---

**Ready to deploy!** 🎉
