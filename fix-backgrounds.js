#!/usr/bin/env node

/**
 * Background Images Fix Script
 * Checks and fixes background image issues
 */

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing background images...\n');

// Check if files exist
const filesToCheck = [
    './assets/images/Фон.png',
    './assets/images/Фон.webp',
    './assets/images/mediaBg.png',
    './assets/images/mediaBg.webp',
    './assets/images/contactsBg.png',
    './assets/images/contactsBg.webp'
];

console.log('📁 Checking files:');
filesToCheck.forEach(file => {
    const exists = fs.existsSync(file);
    const status = exists ? '✅' : '❌';
    const size = exists ? `(${Math.round(fs.statSync(file).size / 1024)}KB)` : '';
    console.log(`${status} ${file} ${size}`);
});

// Check CSS file
console.log('\n🎨 Checking CSS:');
const cssPath = './css/style.css';
if (fs.existsSync(cssPath)) {
    const cssContent = fs.readFileSync(cssPath, 'utf8');
    
    // Check for background rules
    const heroBg = cssContent.includes('background-image: url(\'./assets/images/Фон.png\')');
    const mediaBg = cssContent.includes('background: #0a0a0a url(\'./assets/images/mediaBg.png\')');
    const contactsBg = cssContent.includes('background: #0a0a0a url(\'./assets/images/contactsBg.png\')');
    
    console.log(`${heroBg ? '✅' : '❌'} Hero background rule`);
    console.log(`${mediaBg ? '✅' : '❌'} Media background rule`);
    console.log(`${contactsBg ? '✅' : '❌'} Contacts background rule`);
    
    // Check WebP rules
    const webpRules = cssContent.includes('html.webp');
    const fallbackRules = cssContent.includes('html.no-webp');
    
    console.log(`${webpRules ? '✅' : '❌'} WebP CSS rules`);
    console.log(`${fallbackRules ? '✅' : '❌'} Fallback CSS rules`);
}

// Create a simple test HTML
const testHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Background Test</title>
    <link rel="stylesheet" href="./css/style.css">
    <style>
        body { margin: 0; padding: 20px; background: #1a1a1a; color: #fff; }
        .test { width: 100%; height: 300px; border: 2px solid #ff6b35; margin: 20px 0; }
    </style>
</head>
<body>
    <h1>Background Images Test</h1>
    
    <h2>Hero Section</h2>
    <div class="hero test"></div>
    
    <h2>Media Section</h2>
    <div class="media test"></div>
    
    <h2>Contacts Section</h2>
    <div class="contacts test"></div>
    
    <script src="./js/webp-init.js"></script>
    <script>
        setTimeout(() => {
            console.log('HTML Classes:', document.documentElement.className);
            const hero = document.querySelector('.hero');
            const computed = window.getComputedStyle(hero);
            console.log('Hero Background:', computed.backgroundImage);
        }, 1000);
    </script>
</body>
</html>`;

fs.writeFileSync('background-test.html', testHTML);
console.log('\n📄 Created background-test.html for testing');

console.log('\n🎯 Next steps:');
console.log('1. Open background-test.html in browser');
console.log('2. Check console for WebP detection');
console.log('3. Check if background images are visible');
console.log('4. Check Network tab for image loading');

