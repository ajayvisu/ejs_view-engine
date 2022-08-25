const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// app.use('/public',express.static(path.join(__dirname, 'static')));

app.set("view engine", "ejs");

app.get("/:userQuery", (req, res) => {
  res.render("index", {data: { userQuery: req.params.userQuery, name: "Bala", }, });
}); 

// app.get("/user", (req, res) => {
//   res.render("index1", { data: { userName: req.body.userName } });
// });

app.listen(3000);
