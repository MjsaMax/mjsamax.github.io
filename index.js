// index.js
const express = require("express");
const app = express();
const basicAuth = require("express-basic-auth");

app.use(express.static("public")); // Carpeta con HTML público

app.use("/private", basicAuth({
  users: { "admin": "miclave123" },
  challenge: true
}));
app.use("/private", express.static("private")); // Carpeta privada

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});
