import express from "express";
import { getAllapis } from "../controllers/apisController";

export const apisRouter = express.Router();

apisRouter.route("/apiList").get(getAllapis);
