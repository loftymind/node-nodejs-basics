import {rename} from 'node:fs/promises';
import {fileURLToPath} from 'url';
import { dirname } from 'node:path';


const __filename = fileURLToPath(import.meta.url);

export const renameFile = async () => {
    try {
        await rename(`${dirname(__filename)}/files/wrongFilename.txt`, `${dirname(__filename)}/files/properFilename.md`);
    }
    catch {
        throw new Error('FS operation failed');
    }
};

renameFile()