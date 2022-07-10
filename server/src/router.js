import express from "express";
import { apisRouter } from './routers/apisRouter'
import { displayOptionsRouter } from "./routers/displayOptionsRouter";

const router = express.Router();

router.use(apisRouter).use(displayOptionsRouter);

export default router;
