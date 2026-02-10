# 🚀 QUICK START: Analytics & Search Console Setup

## Step 1: Google Analytics 4 Setup (5 minutes)

### A. Create GA4 Property
1. Go to https://analytics.google.com
2. Click "Admin" (bottom left)
3. Click "+ Create Property"
4. Enter:
   - Property name: "Udgam 2026"
   - Time zone: India (GMT+5:30)
   - Currency: Indian Rupee (INR)
5. Click "Next" → "Create"

### B. Get Measurement ID
1. In Admin → Property → Data Streams
2. Click "Add stream" → "Web"
3. Enter:
   - Website URL: https://udgam.iitram.ac.in
   - Stream name: "Udgam Website"
4. Copy the **Measurement ID** (format: G-XXXXXXXXXX)

### C. Add to Website
Open `index.html` and add this in the `<head>` section (after line 7):

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID_HERE"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YOUR_ID_HERE', {
    page_path: window.location.pathname,
    send_page_view: true
  });
</script>
```

**Replace `G-YOUR_ID_HERE` with your actual Measurement ID!**

---

## Step 2: Google Search Console Setup (10 minutes)

### A. Add Property
1. Go to https://search.google.com/search-console
2. Click "Add Property"
3. Select "URL prefix"
4. Enter: https://udgam.iitram.ac.in
5. Click "Continue"

### B. Verify Ownership (HTML Tag Method)
1. Choose "HTML tag" verification method
2. Copy the verification code (looks like: `<meta name="google-site-verification" content="abc123xyz..." />`)
3. Open `index.html`
4. Add the meta tag in the `<head>` section (around line 20):

```html
<!-- Google Search Console Verification -->
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE_HERE" />
```

5. Deploy the website
6. Return to Search Console and click "Verify"

### C. Submit Sitemap
1. In Search Console, go to "Sitemaps" (left sidebar)
2. Enter: `sitemap.xml`
3. Click "Submit"
4. Wait 24-48 hours for Google to crawl

---

## Step 3: Verify Everything Works

### A. Test Analytics (After deployment)
1. Visit your website
2. In GA4, go to "Reports" → "Realtime"
3. You should see yourself as an active user
4. Click around the site to generate events

### B. Test Search Console
1. Go to "URL Inspection" in Search Console
2. Enter: https://udgam.iitram.ac.in
3. Click "Test Live URL"
4. Should show "URL is on Google" (after indexing)

### C. Test Rich Results
1. Go to https://search.google.com/test/rich-results
2. Enter: https://udgam.iitram.ac.in
3. Should show valid Event schema with:
   - Event name: Udgam 2026
   - Dates: Feb 27-28, 2026
   - Location: IITRAM, Ahmedabad
   - Price: ₹50

---

## Step 4: Monitor Performance

### Daily (First Week):
- [ ] Check Search Console for crawl errors
- [ ] Verify pages are being indexed
- [ ] Monitor Core Web Vitals

### Weekly:
- [ ] Review GA4 traffic sources
- [ ] Check which pages get most visits
- [ ] Monitor bounce rate and engagement

### Monthly:
- [ ] Track keyword rankings
- [ ] Review search queries in Search Console
- [ ] Analyze user behavior in GA4
- [ ] Update sitemap if content changes

---

## 📊 Key Metrics to Track

### Google Analytics 4:
1. **Users** - Total visitors
2. **Sessions** - Number of visits
3. **Engagement Rate** - % of engaged sessions
4. **Event Count** - CTA clicks, calendar adds
5. **Traffic Sources** - Where visitors come from

### Google Search Console:
1. **Total Clicks** - From search results
2. **Total Impressions** - How often site appears
3. **Average CTR** - Click-through rate
4. **Average Position** - Ranking position
5. **Coverage** - Indexed pages

---

## 🎯 Success Indicators

### Week 1-2:
- ✅ All pages indexed in Search Console
- ✅ No crawl errors
- ✅ Rich results showing in test tool

### Week 3-4:
- ✅ Site appears for "udgam iitram" search
- ✅ 50+ impressions in Search Console
- ✅ 10+ clicks from organic search

### Month 2:
- ✅ Ranking in top 10 for "udgam iitram"
- ✅ 200+ impressions per week
- ✅ 5% CTR or higher

---

## 🆘 Troubleshooting

### Analytics not showing data?
- Check if Measurement ID is correct
- Verify script is in `<head>` section
- Clear browser cache and test again
- Use browser dev tools to check for errors

### Search Console verification failed?
- Ensure meta tag is exactly as provided
- Check if website is deployed
- Verify HTTPS is working
- Try alternative verification method (DNS)

### Pages not indexed?
- Check robots.txt allows crawling
- Verify sitemap.xml is accessible
- Submit URL for indexing manually
- Wait 48-72 hours for initial crawl

---

## 📞 Quick Links

- **Google Analytics**: https://analytics.google.com
- **Search Console**: https://search.google.com/search-console
- **Rich Results Test**: https://search.google.com/test/rich-results
- **PageSpeed Insights**: https://pagespeed.web.dev
- **Meta Tags Preview**: https://metatags.io

---

## ✅ Checklist

Before going live:
- [ ] GA4 Measurement ID added to index.html
- [ ] Search Console verification tag added
- [ ] Website deployed to https://udgam.iitram.ac.in
- [ ] robots.txt accessible at /robots.txt
- [ ] sitemap.xml accessible at /sitemap.xml
- [ ] All pages load without errors
- [ ] Mobile-friendly test passes
- [ ] Rich results test passes

After going live:
- [ ] Verify ownership in Search Console
- [ ] Submit sitemap
- [ ] Test analytics tracking
- [ ] Share on social media
- [ ] Request backlinks from IITRAM website

---

**Estimated Total Setup Time**: 15-20 minutes  
**Expected Results**: Visible in search within 2-3 weeks  
**Support**: Refer to SEO_IMPLEMENTATION.md for detailed documentation
