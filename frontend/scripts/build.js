#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting production build...\n');

try {
  // Clean previous build
  if (fs.existsSync('dist')) {
    console.log('🧹 Cleaning previous build...');
    fs.rmSync('dist', { recursive: true, force: true });
  }

  // Type check
  console.log('🔍 Running TypeScript check...');
  execSync('npx tsc --noEmit', { stdio: 'inherit' });

  // Build
  console.log('📦 Building for production...');
  execSync('vite build', { stdio: 'inherit' });

  // Check build output
  if (fs.existsSync('dist')) {
    const files = fs.readdirSync('dist');
    console.log('\n✅ Build completed successfully!');
    console.log(`📁 Output directory: ${path.resolve('dist')}`);
    console.log(`📄 Files generated: ${files.length}`);
    
    // Show file sizes
    console.log('\n📊 Build size summary:');
    files.forEach(file => {
      const filePath = path.join('dist', file);
      const stats = fs.statSync(filePath);
      const sizeKB = (stats.size / 1024).toFixed(2);
      console.log(`  ${file}: ${sizeKB} KB`);
    });
  }

  console.log('\n🎉 Ready for deployment!');
  console.log('💡 Run "npm run preview" to test the production build locally');

} catch (error) {
  console.error('\n❌ Build failed:', error.message);
  process.exit(1);
}
