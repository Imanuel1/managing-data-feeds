import express from "express";
import { columnsRouter } from "./routers/columnsRouter";
import { displayOptionsRouter } from "./routers/displayOptionsRouter";

const router = express.Router();

router.use(columnsRouter).use(displayOptionsRouter);

export default router;
