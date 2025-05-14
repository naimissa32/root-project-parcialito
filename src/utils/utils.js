import { readFile } from "fs/promises";
import { writeFile } from "fs/promises";
import axios from "axios";

export const readJsonFile = async (path) => {
  try {
    const data = await readFile(path, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error leyendo archivo:", error);
    throw error;
  }
};

export const downloadAndSaveCSV = async (url, destinationPath) => {
  try {
    const response = await axios.get(url);
    await writeFile(destinationPath, response.data);
  } catch (error) {
    console.error("ERROR AL DESCARGAR CSV:", error);
    throw new Error("Error al descargar o guardar el CSV");
  }
};
