import { readJsonFile } from "../utils/utils.js";
import { config } from "../config/config.js";

export const jsonFileService = {
  async getBooks() {
    return await readJsonFile(config.DB_JSON_PATH);
  },
};