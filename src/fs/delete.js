import { unlink } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);

export const remove = async () => {
  try {
    await unlink(`${dirname(__filename)}/files/fileToRemove.txt`);
  } catch {
    throw new Error('FS operation failed');
  }
};

remove();
