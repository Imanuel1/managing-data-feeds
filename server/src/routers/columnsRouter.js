import express from "express";
import { getAllColumns, patchColumn, postColumn } from "../controllers";

export const columnsRouter = express.Router();

columnsRouter.route("/columns").get(getAllColumns);
columnsRouter.route("/column").post(postColumn).patch(patchColumn);
