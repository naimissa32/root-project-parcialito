import express from "express";
import { jsonFileController } from "../controllers/controller.js";


export const router = express.Router();

router.get("/json_file", jsonFileController.get);
