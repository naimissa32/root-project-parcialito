import express from "express";
import { jsonFileController } from "../controllers/controller.js";
import { externalDataController } from "../controllers/controller.js";


export const router = express.Router();
//Ruta para obtener los datos de un archivo .json ubicado en src/db/.
router.get("/json_file", jsonFileController.get);
//Ruta para descargar un archivo .csv desde una URL Pública y guardarlo en src/db/.
router.get("/data_externa", externalDataController.get);