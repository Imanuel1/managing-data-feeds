import express from "express";
import { apisRouter } from './routers/apisRouter'

const router = express.Router();

router.use(apisRouter);

export default router;
