//npm run start

//you can also see app.js server.js

const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

//Handlebars Middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const path = require("path");
const members = require("./Members");

// Homepage
app.get("/", (req, res) =>
  res.render("index", {
    title: "Member APP",
    members
  })
);

const logger = require("./middleware/logger");
//Init middleware
//app.use(logger);

/*
app.get("/", (req, res) => {
  //   res.send("<h1>Hello World!!!</h1>");
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
*/
/*
//set a static folder
*/
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/members", require("./routes/api/members"));

/*
Accès via : 
http://localhost:5000/api/members
*/
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
