const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const calculator = require("./router/calculator")

app.use("/calculator", calculator)

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(port, () => {
  console.log(`Start listening at port --- ${port}`)
})