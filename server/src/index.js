import express from 'express';
import cors from 'cors';
import { testDBConnection } from './ORM';

const app = express();
const PORT = 3000;

app.use(cors())
    .listen(PORT, () => {
        console.log(`listening to port ${PORT}`)
        testDBConnection()
    });