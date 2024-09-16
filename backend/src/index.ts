import dotenv from 'dotenv';
import express from 'express';
import { join } from 'node:path';

dotenv.config({
    path: join(import.meta.dirname, '..', '.env'),
});

const PORT = Number.parseInt(process.env.PORT ?? '8000', 10);
const app = express();

app.get('/', (_, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {});
