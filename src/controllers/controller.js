import { jsonFileService } from "../services/service.js";
import { externalDataService } from "../services/service.js";


export const jsonFileController = {
  async get(req, res) {
    try {
      const books = await jsonFileService.getBooks();
      res.json(books);
    } catch (error) {
      res.status(500).json({ error: error.message || "Error al leer el archivo JSON" });
    }
  },
};

export const externalDataController = {
  async get(req, res) {
    try {
      const result = await externalDataService.fetchAndSaveCSV();
      res.status(200).json(result);
    } catch (error) {
      console.error("Error en el controller:", error);
      res.status(500).json({ error: "Error al descargar el archivo CSV" });
    }
  },
};
