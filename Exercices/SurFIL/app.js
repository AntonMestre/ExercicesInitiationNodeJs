const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const fs = require('fs');

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static('public'));
app.use("/", router);

router.get("/", (req, res) => {
  res.render("index");
});

app.listen(process.env.port || 3000);

console.log("Running at Port 3000");