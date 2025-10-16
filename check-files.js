#!/usr/bin/env node

/**
 * File Checker for Helgnar Site
 * Checks if all required image files exist
 */

const fs = require('fs');
const path = require('path');

// Files to check
const filesToCheck = [
    // Original PNG files
    './assets/images/Фон.png',
    './assets/images/1.2 ПО ЦЕНТРУ БЕЗ КРОВИ.png',
    './assets/images/БЕЗ ФИЛЬТРА ФИНАЛ.png',
    './assets/images/mediaBg.png',
    './assets/images/contactsBg.png',
    
    // WebP versions (if they exist)
    './assets/images/Фон.webp',
    './assets/images/1.2 ПО ЦЕНТРУ БЕЗ КРОВИ.webp',
    './assets/images/БЕЗ ФИЛЬТРА ФИНАЛ.webp',
    './assets/images/mediaBg.webp',
    './assets/images/contactsBg.webp'
];

console.log('🔍 Checking image files...\n');

let allExists = true;

filesToCheck.forEach(filePath => {
    const exists = fs.existsSync(filePath);
    const status = exists ? '✅' : '❌';
    const size = exists ? `(${Math.round(fs.statSync(filePath).size / 1024)}KB)` : '';
    
    console.log(`${status} ${filePath} ${size}`);
    
    if (!exists && filePath.endsWith('.png')) {
        allExists = false;
    }
});

console.log('\n📊 Summary:');
console.log(`Original PNG files: ${filesToCheck.filter(f => f.endsWith('.png')).every(f => fs.existsSync(f)) ? '✅ All exist' : '❌ Some missing'}`);
console.log(`WebP files: ${filesToCheck.filter(f => f.endsWith('.webp')).every(f => fs.existsSync(f)) ? '✅ All exist' : '⚠️ Some missing (run npm run convert-webp)'}`);

if (!allExists) {
    console.log('\n❌ Some original PNG files are missing!');
    console.log('Make sure all image files are in the correct locations.');
} else {
    console.log('\n✅ All original PNG files exist!');
    
    const webpExists = filesToCheck.filter(f => f.endsWith('.webp')).every(f => fs.existsSync(f));
    if (!webpExists) {
        console.log('\n💡 To create WebP versions, run: npm run convert-webp');
    }
}

// Check CSS file
console.log('\n🎨 Checking CSS file...');
const cssPath = './css/style.css';
if (fs.existsSync(cssPath)) {
    const cssContent = fs.readFileSync(cssPath, 'utf8');
    const hasWebpRules = cssContent.includes('html.webp');
    const hasFallbackRules = cssContent.includes('html.no-webp');
    
    console.log(`✅ CSS file exists`);
    console.log(`${hasWebpRules ? '✅' : '❌'} WebP CSS rules found`);
    console.log(`${hasFallbackRules ? '✅' : '❌'} Fallback CSS rules found`);
} else {
    console.log('❌ CSS file not found!');
}

