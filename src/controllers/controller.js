import { jsonFileService } from "../services/service.js";

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
