import { readFile } from "fs/promises";
import { writeFile } from "fs/promises";

export const readJsonFile = async (path) => {
  try {
    const data = await readFile(path, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error leyendo archivo:", error);
    throw error;
  }
};
