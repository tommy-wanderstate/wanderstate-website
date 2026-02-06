/**
 * WANDER STATE - Image Optimization Script
 *
 * This script compresses PNG and JPEG images and generates WebP versions
 * for better performance. Original files are preserved.
 *
 * Usage: node build/optimize-images.js
 * Requires: npm install sharp glob --save-dev
 */

const sharp = require('sharp');
const glob = require('glob');
const path = require('path');
const fs = require('fs');

// Configuration
const CONFIG = {
  // Source directories to scan for images
  sourceDirs: [
    'docs/assets/*.png',
    'docs/assets/*.jpg',
    'docs/assets/*.jpeg',
    'docs/assets/Brand Assets/Logos/**/*.png',
    'docs/assets/Brand Assets/Color Palettes/*.png'
  ],

  // Output directory for optimized images
  outputDir: 'docs/assets/optimized',

  // Compression settings
  png: {
    quality: 80,
    compressionLevel: 9,
    effort: 10
  },
  jpeg: {
    quality: 80,
    mozjpeg: true
  },
  webp: {
    quality: 80,
    effort: 6
  },

  // Size limits - images larger than this will be resized
  maxWidth: 1200,
  maxHeight: 1200,

  // Product images get special treatment (smaller max size)
  productImageMaxWidth: 600
};

// Statistics tracking
const stats = {
  processed: 0,
  skipped: 0,
  totalOriginalSize: 0,
  totalOptimizedSize: 0,
  errors: []
};

/**
 * Ensure output directory exists
 */
function ensureOutputDir() {
  const outputPath = path.resolve(CONFIG.outputDir);
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
    console.log(`Created output directory: ${outputPath}`);
  }
}

/**
 * Get file size in human-readable format
 */
function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

/**
 * Check if file is a product image (needs smaller dimensions)
 */
function isProductImage(filePath) {
  const productPatterns = ['Lemon-Mint', 'Chamomile', 'Yuzu', 'Hibiscus', '_Center'];
  return productPatterns.some(pattern => filePath.includes(pattern));
}

/**
 * Optimize a single image
 */
async function optimizeImage(inputPath) {
  const fileName = path.basename(inputPath);
  const ext = path.extname(inputPath).toLowerCase();
  const baseName = path.basename(inputPath, ext);

  // Get original file size
  const originalStats = fs.statSync(inputPath);
  const originalSize = originalStats.size;
  stats.totalOriginalSize += originalSize;

  console.log(`\nProcessing: ${fileName} (${formatSize(originalSize)})`);

  try {
    // Determine max dimensions
    const maxWidth = isProductImage(inputPath) ? CONFIG.productImageMaxWidth : CONFIG.maxWidth;
    const maxHeight = isProductImage(inputPath) ? CONFIG.productImageMaxWidth : CONFIG.maxHeight;

    // Load image
    let image = sharp(inputPath);
    const metadata = await image.metadata();

    // Resize if needed
    if (metadata.width > maxWidth || metadata.height > maxHeight) {
      image = image.resize(maxWidth, maxHeight, {
        fit: 'inside',
        withoutEnlargement: true
      });
      console.log(`  Resizing from ${metadata.width}x${metadata.height} to max ${maxWidth}x${maxHeight}`);
    }

    // Output paths
    const optimizedPath = path.join(CONFIG.outputDir, fileName);
    const webpPath = path.join(CONFIG.outputDir, baseName + '.webp');

    // Optimize based on format
    if (ext === '.png') {
      await image
        .png({
          quality: CONFIG.png.quality,
          compressionLevel: CONFIG.png.compressionLevel,
          effort: CONFIG.png.effort
        })
        .toFile(optimizedPath);
    } else if (ext === '.jpg' || ext === '.jpeg') {
      await image
        .jpeg({
          quality: CONFIG.jpeg.quality,
          mozjpeg: CONFIG.jpeg.mozjpeg
        })
        .toFile(optimizedPath);
    }

    // Generate WebP version
    await sharp(inputPath)
      .resize(maxWidth, maxHeight, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({
        quality: CONFIG.webp.quality,
        effort: CONFIG.webp.effort
      })
      .toFile(webpPath);

    // Get optimized sizes
    const optimizedStats = fs.statSync(optimizedPath);
    const webpStats = fs.statSync(webpPath);

    stats.totalOptimizedSize += optimizedStats.size;
    stats.processed++;

    const savings = ((originalSize - optimizedStats.size) / originalSize * 100).toFixed(1);
    const webpSavings = ((originalSize - webpStats.size) / originalSize * 100).toFixed(1);

    console.log(`  Optimized: ${formatSize(optimizedStats.size)} (${savings}% smaller)`);
    console.log(`  WebP: ${formatSize(webpStats.size)} (${webpSavings}% smaller)`);

  } catch (error) {
    console.error(`  ERROR: ${error.message}`);
    stats.errors.push({ file: fileName, error: error.message });
  }
}

/**
 * Main function
 */
async function main() {
  console.log('========================================');
  console.log('WANDER STATE - Image Optimization');
  console.log('========================================');

  // Ensure output directory exists
  ensureOutputDir();

  // Find all images
  let allFiles = [];
  for (const pattern of CONFIG.sourceDirs) {
    const files = glob.sync(pattern, { nocase: true });
    allFiles = allFiles.concat(files);
  }

  // Remove duplicates
  allFiles = [...new Set(allFiles)];

  console.log(`\nFound ${allFiles.length} images to process`);

  // Process each image
  for (const file of allFiles) {
    await optimizeImage(file);
  }

  // Print summary
  console.log('\n========================================');
  console.log('OPTIMIZATION SUMMARY');
  console.log('========================================');
  console.log(`Images processed: ${stats.processed}`);
  console.log(`Original total size: ${formatSize(stats.totalOriginalSize)}`);
  console.log(`Optimized total size: ${formatSize(stats.totalOptimizedSize)}`);

  if (stats.totalOriginalSize > 0) {
    const totalSavings = ((stats.totalOriginalSize - stats.totalOptimizedSize) / stats.totalOriginalSize * 100).toFixed(1);
    console.log(`Total savings: ${totalSavings}%`);
  }

  if (stats.errors.length > 0) {
    console.log(`\nErrors (${stats.errors.length}):`);
    stats.errors.forEach(e => console.log(`  - ${e.file}: ${e.error}`));
  }

  console.log(`\nOptimized images saved to: ${path.resolve(CONFIG.outputDir)}`);
  console.log('\nTo use optimized images:');
  console.log('1. Replace image paths in HTML with optimized versions');
  console.log('2. Use <picture> element for WebP with PNG/JPEG fallback');
  console.log('\nExample:');
  console.log('<picture>');
  console.log('  <source srcset="docs/assets/optimized/image.webp" type="image/webp">');
  console.log('  <img src="docs/assets/optimized/image.png" alt="Description" loading="lazy">');
  console.log('</picture>');
}

// Run
main().catch(console.error);
