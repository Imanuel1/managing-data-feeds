import express from 'express';
import cors from 'cors';
import { testDBConnection } from './ORM';
import { PORT } from './environment'
import { errorHandler } from './middlewares/error-handler';
import { requestLog } from './middlewares/requestLog';
import router from './router';
import { setupRelations } from './models/relations';

const app = express();

app.use(cors())
    .use(express.json({ limit: "5mb" }))
    .use(express.urlencoded({ extended: false }))
    .use(requestLog)
    // .use(express.static("build"))
    .use("/api", router)
    .use(errorHandler)
    .listen(PORT, () => {
        console.log(`listening to port ${PORT}`)
        testDBConnection()
        setupRelations()
    });