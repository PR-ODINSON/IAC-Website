# 🚀 How to Force Google to Index "udgam-iac.iitram.in" NOW

You are seeing the old domain because Google's index is **outdated**. The redirects and code fixes we just implemented will fix this automatically over time (3-7 days), but you can **force it to happen immediately** using Google Search Console.

### ⚠️ Critical Step: You MUST do this manually
I have done everything possible in the code (Redirects, Canonical Tags, Sitemap). Now you must tell Google to "Look at the changes".

## Step 1: Register the NEW Domain in Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console).
2. Click **"Add Property"**.
3. Select **"URL Prefix"**.
4. Enter exactly: `https://udgam-iac.iitram.in`
5. Click **Continue**.
6. **Verification**: Since you are using Netlify/Vercel or simple hosting, the easiest way is **HTML Tag**.
   - Copy the HTML tag Google gives you (starts with `<meta name="google-site-verification"...`).
   - **Send it to me** (or paste it in `index.html` head), and I will deploy it for you.
   - *Alternative*: If you have DNS access, use the "Domain" method (TXT record).

## Step 2: Submit the New Sitemap
Once verified:
1. Go to **"Sitemaps"** in the left sidebar.
2. Enter `sitemap.xml` in the box.
3. Click **Submit**.
   - It should say "Success" and show roughly 9 discovered URLs.

## Step 3: Use "URL Inspection" (The Magic Button)
This is how you fix "website is not shown" for specific keywords.
1. Type `https://udgam-iac.iitram.in/` in the top search bar of Search Console.
2. Hit Enter.
3. It might say "URL is not on Google".
4. Click **"REQUEST INDEXING"**.
5. **Repeat this for key pages**:
   - `https://udgam-iac.iitram.in/speakers`
   - `https://udgam-iac.iitram.in/schedule`

## Step 4: Removal Tool (Kill the Old Domain)
To stop `udgam.iitram.in` from showing up:
1. Create a **separate** Search Console property for `https://udgam.iitram.in` (if you can verify it).
2. Go to **Removals** > **New Request**.
3. Select **"Temporarily Remove URL"**.
4. Enter `https://udgam.iitram.in/` and select **"Remove all URLs with this prefix"**.
5. This hides the old site from Google Search results usually within **24 hours**.

---

## Summary Checklist
- [ ] Add `https://udgam-iac.iitram.in` property to Search Console.
- [ ] Submit `sitemap.xml`.
- [ ] Click "Request Indexing" for the homepage.
- [ ] (Optional) Use "Removals" tool for the old `udgam.iitram.in` domain.
