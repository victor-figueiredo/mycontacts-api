const express = require("express");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(routes);

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
