# Cover Image Specifications

## Social Media Cover Image Requirements

### Current Status
⚠️ **PLACEHOLDER EXISTS** - Replace `public/iac-2026-cover.png` with actual event cover

### Recommended Specifications

**For Optimal Display Across Platforms:**
- **Dimensions**: 1200 x 630 pixels
- **Format**: PNG or JPG
- **File Size**: Under 1 MB (preferably under 500 KB)
- **Color Mode**: RGB

### Design Guidelines

**Must Include:**
- Event name: "Industry-Academia Conclave (IAC) 2026" or "Udgam 2026"
- Date: "20-21 February 2026"
- Venue: "IITRAM, Ahmedabad"
- CDC IITRAM branding/logo
- IITRAM logo

**Design Tips:**
- Use high contrast text
- Avoid placing important text near edges (safe zone: 1104x580px)
- Use brand colors (Teal/Turquoise: #14b8a6, #2dd4bf)
- Ensure text is readable at small sizes
- Test on both light and dark backgrounds

### Where It's Used

1. **Open Graph (Facebook, LinkedIn)**
   - Displayed when sharing on social media
   - Size: 1200 x 630px
   
2. **Twitter Card**
   - Displayed in tweets with links
   - Size: 1200 x 628px (similar enough)

3. **WhatsApp Preview**
   - Uses Open Graph image

### Quick Design Tools

**Free Tools:**
- [Canva](https://www.canva.com/) - Template: "Facebook Post" or "Twitter Post"
- [Figma](https://www.figma.com/) - Create custom design
- [Photopea](https://www.photopea.com/) - Free Photoshop alternative

**Design Template:**
```
┌─────────────────────────────────────────┐
│                                         │
│     [IITRAM Logo]     [Event Logo]     │
│                                         │
│   INDUSTRY-ACADEMIA CONCLAVE (IAC)     │
│              UDGAM 2026                │
│                                         │
│          20-21 February 2026           │
│         IITRAM, Ahmedabad              │
│                                         │
│   [Background: Modern geometric         │
│    or gradient design in brand colors] │
│                                         │
└─────────────────────────────────────────┘
     1200 x 630 pixels
```

### After Creating the Cover

1. Save as `iac-2026-cover.png` in `/public` folder
2. Verify file size (should be < 1 MB)
3. Test the preview:
   - Build: `npm run build`
   - Check in `dist/iac-2026-cover.png`
4. After deploying, test with:
   - [Facebook Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)

---

**Note**: The placeholder file is currently 11 bytes and needs to be replaced before deployment for proper social media sharing.
