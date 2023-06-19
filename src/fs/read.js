import {readFile} from 'node:fs/promises'
import {fileURLToPath} from 'url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);

export const read = async () => {
    try {
        await readFile(`${dirname(__filename)}/files/fileToRead.txt`, {encoding: 'utf8'}).then(data => console.log(data));
    }
    catch {
        throw new Error('FS operation failed');
    }
};

read()