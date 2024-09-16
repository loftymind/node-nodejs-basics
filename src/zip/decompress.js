import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputFile = path.join(__dirname,'files','fileToCompress.txt');
const inputFile = path.join(__dirname,'files','archive.gz')

export const decompress = async () => {
  const unzip = createUnzip();
  const readStream = createReadStream(inputFile);
  const writeStream = createWriteStream(outputFile);
  readStream.pipe(unzip).pipe(writeStream);
};

decompress();
