import { cp, mkdir, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const root = process.cwd();
const clientDir = join(root, 'dist', 'client');
const prerenderedDir = join(root, 'dist', 'server', 'prerendered-routes');

const routes = await readdir(prerenderedDir);
for (const file of routes) {
  if (!file.endsWith('.html')) continue;
  const route = file === 'index.html' ? '' : file.replace(/\.html$/, '');
  const destinationDir = route === '404' ? clientDir : join(clientDir, route);
  await mkdir(destinationDir, { recursive: true });
  await cp(join(prerenderedDir, file), join(destinationDir, route === '404' ? '404.html' : 'index.html'));
}

console.log('Static export ready in dist/client');
