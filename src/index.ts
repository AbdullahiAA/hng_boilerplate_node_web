import { Request, Response } from "express";

const express = require("express");
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const YAML = require("yaml");

const file = fs.readFileSync("./src/swagger.yaml", "utf8");
const swaggerDocument = YAML.parse(file);

const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Welcome to API Specification 1.0");
});

app.listen(Number(PORT), () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
