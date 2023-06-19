import { cpus } from 'os';
import { Worker } from "worker_threads";
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const performCalculations = async () => {
    const cpu = cpus()
    let num = 10;
    const workers = await Promise.allSettled(cpu.map(() => {
        return new Promise((res, rej) => {
            const worker = new Worker(join(__dirname, 'worker.js'), {
                workerData: num += 1
            })
            worker.on('message', (data) => res(data))
            worker.on('error', (err) => rej(err))

        })
    }))

    const results = workers.map(({ status, value }) => ({
        status: status === 'fulfilled' ? 'resolved' : 'error',
        data: status === 'fulfilled' ? value : null,
      }));
    console.log(results);
};

performCalculations();
