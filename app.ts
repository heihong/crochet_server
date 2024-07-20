import { PatternController } from "./pattern/pattern.controller";

const express = require("express");
const app = express();
const port = 3000;

const patternController = new PatternController();

app.get("/", patternController.getPattern);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
