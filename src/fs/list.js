import {readdir} from 'node:fs/promises';
import {fileURLToPath} from 'url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);

export const list = async () => {
    try {
        await readdir(`${dirname(__filename)}/files`).then(data => console.log(data));
    }
    catch {
        throw new Error('FS operation failed');
    }
};

list();