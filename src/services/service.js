import { config } from "../config/config.js";
import { downloadAndSaveCSV } from "../utils/utils.js";
import { v4 as uuidv4 } from "uuid";
import { readJsonFile, writeJsonFile } from "../utils/utils.js";



export const jsonFileService = {
  async getBooks() {
    return await readJsonFile(config.DB_JSON_PATH);
  },
};


export const externalDataService = {
  async fetchAndSaveCSV() {
    await downloadAndSaveCSV(config.CSV_URL, config.CSV_PATH);
    return { message: "CSV descargado y guardado correctamente ✅" };
  },
};

export const bookService = {
  async createBook(data) {
    const books = await readJsonFile(config.DB_JSON_PATH);
    const newBook = { id: uuidv4(), ...data };
    books.push(newBook);
    await writeJsonFile(config.DB_JSON_PATH, books);
    return newBook;
  },

  async getBookById(id) {
    const books = await readJsonFile(config.DB_JSON_PATH);
    const book = books.find((b) => b.id === id);
    if (!book) throw new Error("Libro no encontrado");
    return book;
  },

  async updateBookById(id, newData) {
    const books = await readJsonFile(config.DB_JSON_PATH);
    const index = books.findIndex((b) => b.id === id);

    if (index === -1) throw new Error("Libro no encontrado");

    const updatedBook = { ...books[index], ...newData, id };
    books[index] = updatedBook;
    await writeJsonFile(config.DB_JSON_PATH, books);
    return books[index];
  },

  async deleteBookById(id) {
  const books = await readJsonFile(config.DB_JSON_PATH);
  const index = books.findIndex((b) => b.id === id);
  if (index === -1) throw new Error("Libro no encontrado");

  books.splice(index, 1);
  await writeJsonFile(config.DB_JSON_PATH, books);
}

};
