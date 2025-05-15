import { jsonFileService } from "../services/service.js";
import { externalDataService } from "../services/service.js";
import { bookService } from "../services/service.js";



export const jsonFileController = {
  async get(req, res) {
    try {
      const books = await jsonFileService.getBooks();
      res.json({ json_file: books });
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

export const bookController = {
  async create(req, res) {
    try {
      const book = req.body;
      const createdBook = await bookService.createBook(book);
      res.status(201).json(createdBook);
    } catch (error) {
      res.status(500).json({ error: "Error al crear el libro" });
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const book = await bookService.getBookById(id);
      res.status(200).json(book);
    } catch (error) {
      const status = error.message === "Libro no encontrado" ? 404 : 500;
      res.status(status).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const updatedData = req.body;
      const updatedBook = await bookService.updateBookById(id, updatedData);
      res.status(200).json(updatedBook);
    } catch (error) {
      const status = error.message === "Libro no encontrado" ? 404 : 500;
      res.status(status).json({ error: error.message });
    }
  },
  
  async remove(req, res) {
  try {
    const { id } = req.params;
    await bookService.deleteBookById(id);
    res.status(200).json({ message: "Libro eliminado correctamente" });
  } catch (error) {
    const status = error.message === "Libro no encontrado" ? 404 : 500;
    res.status(status).json({ error: error.message });
  }
}
};



