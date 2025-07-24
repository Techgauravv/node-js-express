let express = require("express");
let app = express();
let dotenv = require("dotenv");
dotenv.config(); // for accessing the env variable

let categoryRouter = require("./src/controller/categoryRouter");
let productRouter = require("./src/controller/productRouter");
let port = process.env.PORT || 6700;

app.get("/", (req, res) => {
  res.send("Hi From Express");
});
// app.get("/category", (req, res) => {
//   res.send(category);
// });

// app.get("/details", (req, res) => {
//   res.send("First");
// });

app.use("/category", categoryRouter);
app.use("/products", productRouter);

// app.get("/product", (req, res) => {
//   res.send(product);
// });

app.listen(port, (err) => {
  if (err) throw err;
  else console.log(`server is running on ${port} port`);
});
