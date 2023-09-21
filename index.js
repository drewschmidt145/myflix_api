const express = require('express');
const morgan = require('morgan');

const app = express();

// for logging in terminal
app.use(morgan('common'));

// start endpoint
app.get('/', (req, res) => {
    res.send('Welcome to myFlix!');
});

// endpoints

// get a list of all movies
app.get('/movies', (req, res) => {
    res.send('Successful GET request for list of movies');
});
// get information on 1 movie
app.get('/movies/:Title', (req, res) => {
    res.send('Successful GET request for movie');
});
// get information and sort by genre
app.get('/genres/:Name', (req, res) => {
    res.send('Successful GET request for genre');
});
// get information regarding specific director
app.get('/directors/:Name', (req, res) => {
    res.send('Successful GET request for director');
});
// create user using information provided
app.post('/users', (req, res) => {
    res.send('Successfully created user.');
});
// updated user information with new data provided
app.put('/users/:id', (req, res) => {
    res.send('Successfully updated users account.');
});
// add a movie to users favorite movie list
app.post('/users/:Username/movies/:MovieID', (req, res) => {
    res.send('Successfully added movie from favorites list.')
});
// delete a movie from users favorite movie list
app.delete('/users/:Username/movies/:MovieID', (req, res) => {
    res.send('Successfully deleted movie from favorites list.')
});
// deletes users accounts
app.delete('/users/:id', (req, res) => {
    res.send('Successfully deleted users account.');
});

// for getting files in public file
app.use(express.static('public'));


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something Broke!');
});

// port
app.listen(8080, () => {
    console.log('Your app is listening on Port 8080.');
});