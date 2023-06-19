import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

export const spawnChildProcess = async (args) => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const path = join(__dirname, 'files');
  const spaw = spawn('node', [join(path, 'script.js'), ...args]);
  process.stdin.pipe(spaw.stdin);

  spaw.stdout.setEncoding('utf8');

  spaw.stdout.on('data', (data) => {
    process.stdout.write(data);
  });
};

spawnChildProcess(['Pig', 'Deer']);
