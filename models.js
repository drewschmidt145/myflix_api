 const mongoose = require('mongoose');

 let movieSchema = mongoose.Schema({
    Title: {type: String, Required: true},
    Description: {type: String, Required: true},
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
    Username: {type: String, Required: true},
    Password: {type: String, Required: true},
    Email: {type: String, Required: true},
    Birthday: Date,
    FavoriteMovies: [{type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },]
 });

 let Movie = mongoose.model('Movie', movieSchema);
 let User = mongoose.model('User', userSchema);

 module.exports.Movie = Movie;
 module.exports.User = User;
