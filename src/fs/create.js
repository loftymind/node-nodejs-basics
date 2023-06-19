import * as fs from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';


const create = async () => {
  const __filename = fileURLToPath(import.meta.url);

  const __dirname = path.dirname(__filename);
    
    const folderPath = path.join(__dirname, '/files');
    const filePath = path.join(folderPath, 'fresh.txt');
    const fileContent = 'I am fresh and young';
  
    try {   
     /*  await fs.access(filePath, fs.constants.F_OK); */
      await fs.writeFile(filePath, fileContent,{flag: 'wx'});
    } catch (error) {
      console.error(error.message);
    }

};

await create();