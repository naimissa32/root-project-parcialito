import dotenv from "dotenv";
dotenv.config();

export const config = {
  PORT: process.env.PORT || 3003,
  CSV_URL: process.env.CSV_URL,
  DB_JSON_PATH: process.env.DB_JSON_PATH,
  CSV_PATH: process.env.CSV_PATH
};
