import express from "express";
const app = express()
const port = 3000;
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home.ejs");

});
app.get("/originals", (req, res) => {
    res.render("originals.ejs");

});
app.get("/movies", (req, res) => {
    res.render("movies.ejs");

});
app.get("/contact", (req, res) => {
    res.render("contact.ejs");

});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});