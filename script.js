const express = require("express");
const app = express();


app.set("view engine", "ejs");
app.use(express.static('/public'));

app.get("/",function name(req, res) {
    res.render("index");
});

app.get("/error",function name(req, res, next) {
    throw Error("something went wrong");
});

app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  });

app.listen(3000);