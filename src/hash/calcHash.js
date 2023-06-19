import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);

export const calculateHash = async () => {
  try {
    const content = await readFile(
      `${dirname(__filename)}/files/fileToCalculateHashFor.txt`,
      { encoding: 'utf8' }
    );
    const hash = createHash('sha256').update(content).digest('hex');
    console.log(hash);
  } catch (e) {
    throw e;
  }
};

calculateHash();
