const express = require('express');
const app = express();
const port = process.env.PORT || 3000;



app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(port, () => {
  console.log(`Start listening at port --- ${port}`)
})