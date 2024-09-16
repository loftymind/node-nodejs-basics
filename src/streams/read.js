import fs from 'fs';
import { stdout } from 'node:process';
import { fileURLToPath } from 'url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);

export const read = async () => {
  let readableStream = fs.createReadStream(
    `${dirname(__filename)}/files/fileToRead.txt`
  );

  readableStream.on('data', (chunk) => {
    stdout.write(chunk);
  });
};

read();
