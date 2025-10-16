#!/usr/bin/env node

/**
 * CSS Diagnosis Script
 * Checks for potential CSS conflicts and issues
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Diagnosing CSS issues...\n');

// Read CSS file
const cssPath = './css/style.css';
if (!fs.existsSync(cssPath)) {
    console.log('❌ CSS file not found!');
    process.exit(1);
}

const cssContent = fs.readFileSync(cssPath, 'utf8');

// Check for potential issues
console.log('📊 CSS Analysis:');
console.log(`File size: ${cssContent.length} characters`);
console.log(`Lines: ${cssContent.split('\n').length}`);

// Check for background rules
const backgroundRules = cssContent.match(/background[^;]*;/g) || [];
console.log(`\n🎨 Background rules found: ${backgroundRules.length}`);

// Check for hero rules
const heroRules = cssContent.match(/\.hero[^{]*{[^}]*}/g) || [];
console.log(`Hero rules found: ${heroRules.length}`);

// Check for media rules
const mediaRules = cssContent.match(/\.media[^{]*{[^}]*}/g) || [];
console.log(`Media rules found: ${mediaRules.length}`);

// Check for contacts rules
const contactsRules = cssContent.match(/\.contacts[^{]*{[^}]*}/g) || [];
console.log(`Contacts rules found: ${contactsRules.length}`);

// Check for WebP rules
const webpRules = cssContent.match(/html\.webp[^{]*{[^}]*}/g) || [];
console.log(`WebP rules found: ${webpRules.length}`);

// Check for no-webp rules
const noWebpRules = cssContent.match(/html\.no-webp[^{]*{[^}]*}/g) || [];
console.log(`No-WebP rules found: ${noWebpRules.length}`);

// Check for potential conflicts
console.log('\n⚠️ Potential Issues:');

// Check for multiple background rules on same element
const heroBackgroundCount = (cssContent.match(/\.hero[^{]*{[^}]*background[^}]*}/g) || []).length;
if (heroBackgroundCount > 1) {
    console.log(`❌ Multiple background rules for .hero: ${heroBackgroundCount}`);
}

// Check for !important usage
const importantCount = (cssContent.match(/!important/g) || []).length;
console.log(`!important declarations: ${importantCount}`);

// Check for CSS syntax errors (basic check)
const openBraces = (cssContent.match(/{/g) || []).length;
const closeBraces = (cssContent.match(/}/g) || []).length;
if (openBraces !== closeBraces) {
    console.log(`❌ CSS syntax error: mismatched braces (${openBraces} open, ${closeBraces} close)`);
} else {
    console.log(`✅ CSS syntax: braces balanced (${openBraces} pairs)`);
}

// Check for specific background images
const backgroundImages = [
    'Фон.png',
    'Фон.webp',
    'mediaBg.png',
    'mediaBg.webp',
    'contactsBg.png',
    'contactsBg.webp'
];

console.log('\n🖼️ Background Image References:');
backgroundImages.forEach(image => {
    const count = (cssContent.match(new RegExp(image.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
    console.log(`${image}: ${count} references`);
});

// Check for encoding issues
const hasNonAscii = /[^\x00-\x7F]/.test(cssContent);
if (hasNonAscii) {
    console.log('\n⚠️ CSS contains non-ASCII characters (Russian text in file paths)');
}

// Create a minimal test CSS
const minimalCSS = `
/* Minimal test CSS */
.hero {
    background-image: url('./assets/images/Фон.png');
    background-size: cover;
    background-position: center;
    min-height: 200px;
}

.media {
    background: #0a0a0a url('./assets/images/mediaBg.png');
    background-size: cover;
    background-position: center;
    min-height: 200px;
}

.contacts {
    background: #0a0a0a url('./assets/images/contactsBg.png');
    background-size: cover;
    background-position: center;
    min-height: 200px;
}

html.webp .hero {
    background-image: url('./assets/images/Фон.webp') !important;
}

html.webp .media {
    background: #0a0a0a url('./assets/images/mediaBg.webp') !important;
}

html.webp .contacts {
    background: #0a0a0a url('./assets/images/contactsBg.webp') !important;
}
`;

fs.writeFileSync('./css/minimal-test.css', minimalCSS);
console.log('\n📄 Created minimal-test.css for testing');

console.log('\n🎯 Recommendations:');
console.log('1. Test with minimal-test.css to isolate the issue');
console.log('2. Check browser console for CSS loading errors');
console.log('3. Verify file paths are correct');
console.log('4. Check for CSS conflicts in DevTools');

