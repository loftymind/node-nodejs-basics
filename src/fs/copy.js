import fs from 'fs/promises';
import  path  from 'path';
import { fileURLToPath } from 'url';



const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);

  const __dirname = path.dirname(__filename);
  const sourceFolderPath = path.join(__dirname, 'files');
  const targetFolderPath = path.join(__dirname, 'files_copy');

  try {
   
    if (await fs.stat(targetFolderPath).catch(() => false)) {
      throw new Error('FS operation failed: Target folder already exists');
    }

    await fs.mkdir(targetFolderPath);

    const files = await fs.readdir(sourceFolderPath);
    for (const file of files) {
      const sourceFilePath = path.join(sourceFolderPath, file);
      const targetFilePath = path.join(targetFolderPath, file);
      await fs.copyFile(sourceFilePath, targetFilePath);
    }

    console.log('Folder copied successfully!');
  } catch (error) {
    console.error(error.message);
  }
}

await copy();
