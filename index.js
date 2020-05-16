const express = require("express");
const path = require("path"); // path (modulo nativo) Para solucionar problemas de compatibilidad
const app = express();
const productsRouter = require('./routes/products'); // Incluir la ruta del router
const productsApiRouter = require('./routes/api/products'); // Incluir la ruta de  la api

// use() metodo para usar middlewares (que prefijo va tener "static" y la ruta de los estaticos con express)
app.use("/static", express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views")); // la carpeta de la aplicacion __dirname
app.set("view engine", "pug");

// Establecer lo endpoints de los productos 
app.use("/products", productsRouter); // ruta de los productos 
app.use("/api/products", productsApiRouter); // ruta de la api

const server = app.listen(3000, function() {
  console.log(`Listening http://localhost:${server.address().port}`);
});
