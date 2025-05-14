import { readJsonFile } from "../utils/utils.js";
import { config } from "../config/config.js";
import { downloadAndSaveCSV } from "../utils/utils.js";

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
