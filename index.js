import express from "express";
import axios from 'axios';
import path from 'path';

const app = express()
const port = 3000;
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.render('home.ejs', { movies: null });

});
// searh movies 
app.get('/search', async (req, res) => {
  const query = req.query.query; 
  
  try {
    const options = {
      method: 'GET',
      url: `https://moviedatabase8.p.rapidapi.com/Search/${encodeURIComponent(query)}`, // Incorporate the search query into the URL
      headers: {
        'x-rapidapi-key': '46ca2065f1mshd2c5a311fcc25afp104658jsn4c2605f44c44',
        'x-rapidapi-host': 'moviedatabase8.p.rapidapi.com'
      }
    };

    const response = await axios.request(options);
    const movies = response.data; 
   
    res.render('movies', { movies: movies });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while searching for movies.');
  }

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