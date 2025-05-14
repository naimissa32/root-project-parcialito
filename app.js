import express from "express";
import { config } from "./src/config/config.js";
import { router } from "./src/routes/routes.js";

const app = express();
app.use(express.json());
app.use("/api", router);

app.listen(config.PORT, () => {
  console.log(`🚀 Servidor en http://localhost:${config.PORT}`);
});