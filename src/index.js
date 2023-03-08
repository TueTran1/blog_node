const path = require("path");
const express = require("express");
const morgan = require("morgan");
const hbs = require("express-handlebars");
const serveStatic = require('serve-static')
const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname,"resource","public")));

//HTTP logger
app.use(morgan("combined"));

//Template engine
app.engine("hbs", hbs.engine({defaultLayout: 'main', extname:'.hbs'}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname,"resource","views"));

app.get("/", (req, res) => {
  res.render('home');
});
app.get("/news", (req, res) => {
  res.render('news');
});
app.listen(port, () => {
  console.log(`excample app listening at http://localhost:${port}`);
});

