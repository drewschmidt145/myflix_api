 const mongoose = require('mongoose');

 let movieSchema = mongoose.Schema({
    Title: {type: String, Required: True},
    Description: {type: String, Required: True},
    Genre: {
        Name: String,
        Description: String,
    },
    Director: {
        Name: String,
        Bio: String,
    },
    Actors: [String],
    ImagePath: String,
    Featured: Boolean
 });

 let userSchema = mongoose.Schema({
    Username: {type: String, Required: True},
    Password: {type: String, Required: True},
    Email: {type: String, Required: True},
    Birthday: Date,
    FavoriteMovies: [{type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },]
 });

 let Movie = mongoose.modal('Movie', movieSchema);
 let User = mongoose.modal('User', userSchema);

 module.exports.Movie = Movie;
 module.exports.User = User;
