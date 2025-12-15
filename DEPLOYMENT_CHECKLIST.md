# ✅ Netlify Deployment Checklist

## Files Ready for Deployment

### Public Assets (✅ All in `/public` folder)
- ✅ `logo.png` - Navbar logo (236 KB)
- ✅ `iitram_logo_only.jpg` - Favicon (59 KB)
- ⚠️ `iac-2026-cover.png` - **PLACEHOLDER** - Replace with actual cover image!
- ✅ `_redirects` - SPA routing configuration
- ✅ `README.md` - Asset documentation

### Configuration Files
- ✅ `netlify.toml` - Netlify build settings
- ✅ `vite.config.js` - Vite configuration
- ✅ `package.json` - Build scripts configured
- ✅ `.gitignore` - Proper ignore rules

### Build Verification
- ✅ Test build successful (`npm run build`)
- ✅ All assets copied to `dist` folder
- ✅ File size: ~249 KB JS, ~60 KB CSS

## Next Steps

### 1. Replace Cover Image (IMPORTANT!)
```bash
# Replace the placeholder with your actual cover image
# Recommended size: 1200x630px
# Save as: public/iac-2026-cover.png
```

### 2. Deploy to Netlify

**Option A: Git Integration (Recommended)**
```bash
git add .
git commit -m "Ready for Netlify deployment"
git push origin main
```
Then connect your repo on Netlify Dashboard.

**Option B: Netlify CLI**
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

**Option C: Drag & Drop**
- Build: `npm run build`
- Upload `dist` folder to https://app.netlify.com/drop

### 3. Post-Deployment

1. **Update URLs**: After getting your Netlify URL, update the domain in:
   - `index.html` meta tags (og:image, twitter:image URLs)
   
2. **Test Everything**:
   - All routes work (refresh test)
   - Logo displays
   - Contact form submits
   - Mobile responsive
   - Social media preview

3. **Set Custom Domain** (Optional):
   - Go to Netlify Dashboard → Domain settings
   - Add your custom domain

## Environment Variables (If Needed)

Currently using:
- Formspree form: `https://formspree.io/f/xyzrvadn` (hardcoded in Contact.jsx)

If you need to make this dynamic:
1. Add to Netlify: Site Settings → Environment Variables
2. Access in code: `import.meta.env.VITE_FORMSPREE_URL`

## Quick Commands

```bash
# Local development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Check build size
npm run build && du -sh dist
```

## Support Links

- [Netlify Documentation](https://docs.netlify.com/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Router Netlify Setup](https://reactrouter.com/en/main/guides/deployment#netlify)

---

🎉 **Your site is ready to deploy!** Just replace the cover image and push to Netlify.
