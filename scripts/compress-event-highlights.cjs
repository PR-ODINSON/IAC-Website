// Script to compress all images in public/EventHighlights and save to public/EventHighlights/compressed
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../public/EventHighlights');
const destDir = path.join(srcDir, 'compressed');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir);
}

fs.readdirSync(srcDir).forEach(file => {
  if (file.match(/\.(jpe?g|png)$/i)) {
    const inputPath = path.join(srcDir, file);
    const outputPath = path.join(destDir, file.replace(/\.(jpeg|jpg|png)$/i, '.jpg'));
    sharp(inputPath)
      .jpeg({ quality: 70 })
      .toFile(outputPath)
      .then(() => console.log(`Compressed: ${file}`))
      .catch(err => console.error(`Error compressing ${file}:`, err));
  }
});
