import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Running Vercel Deployment Check...');

try {
  console.log('1. Checking TypeScript compilation...');
  execSync('npx tsc --noEmit', { stdio: 'inherit' });
  console.log('✅ TypeScript check passed cleanly!');

  console.log('2. Verifying Storybook static output...');
  const outputPath = path.join(__dirname, '..', 'storybook-static');
  if (fs.existsSync(outputPath) && fs.existsSync(path.join(outputPath, 'index.html'))) {
    console.log('✅ storybook-static directory verified with index.html.');
  } else {
    throw new Error('storybook-static directory or index.html missing!');
  }

  const vercelPath = path.join(__dirname, '..', 'vercel.json');
  if (fs.existsSync(vercelPath)) {
    console.log('✅ vercel.json verified.');
  } else {
    throw new Error('vercel.json missing!');
  }

  console.log('\n🎉 All checks passed! Ready for Vercel deployment!');
} catch (err) {
  console.error('❌ Deployment check failed:', err.message);
  process.exit(1);
}
