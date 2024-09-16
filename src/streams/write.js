import fs from 'fs';
import { stdin } from 'node:process';
import { fileURLToPath } from 'url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);

export const write = async () => {
  let writable = fs.createWriteStream(
    `${dirname(__filename)}/files/fileToWrite.txt`
  );
  stdin.pipe(writable);
};

write();
