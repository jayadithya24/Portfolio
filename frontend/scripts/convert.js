import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const scriptDir = fileURLToPath(new URL('.', import.meta.url));
const rootDir = resolve(scriptDir, '..');
const input = resolve(rootDir, 'public', 'portfolio-preview.svg');
const output = resolve(rootDir, 'public', 'portfolio-preview.png');

if (!existsSync(input)) {
  console.error(`Missing input file: ${input}`);
  process.exit(1);
}

if (existsSync(output)) {
  console.log(`Preview image already exists at ${output}`);
  process.exit(0);
}

try {
  execFileSync('magick', [input, '-background', 'none', '-resize', '1200x630', output], {
    stdio: 'inherit',
  });
  console.log(`Created ${output}`);
} catch (error) {
  console.error('Failed to run ImageMagick. Make sure `magick` is installed and available on PATH.');
  process.exit(1);
}