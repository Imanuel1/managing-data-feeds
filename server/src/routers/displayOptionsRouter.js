import express from "express";
import { getAllDisplayOptions, patchDisplayOption, postDisplayOption } from "../controllers";

export const displayOptionsRouter = express.Router();

displayOptionsRouter.route("/display_options").get(getAllDisplayOptions);
displayOptionsRouter.route("/display_option").post(postDisplayOption).patch(patchDisplayOption);
