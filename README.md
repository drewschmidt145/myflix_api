# Movie API Documentation

## Description

This is the API backend for the MyFlix client. This pulls the data from the database and uses endpoints that for the URL that the client can read. Using this, the client can access different parts of the database to get information and data for the movies and users on the website.

## Endpoints

### Get all movies

- **URL**: `/movies`
- **Request**: None
- **Response**: A JSON object holding data about all movies.

### Get a single movie

- **URL**: `/movies/[title]`
- **Request**: None
- **Response**: A JSON object holding data about a single movie, containing title, year, genre, director.

### Get genre information

- **URL**: `/movies/genre/[genreName]`
- **Request**: None
- **Response**: A JSON object holding data about a single genre, containing genre name, description.

### Get director information

- **URL**: `/movies/directors/[directorName]`
- **Request**: None
- **Response**: A JSON object holding data about a single director, containing director name, bio, birth and death year.

### Get all users

- **URL**: `/users`
- **Request**: None
- **Response**: A JSON object holding data about all users.

### Get a single user

- **URL**: `/users/[Username]`
- **Request**: None
- **Response**: A JSON object holding data about a single user, containing username, password, email, birthday, favorite movies.

### Post new user (register)

- **URL**: `/users`
- **Request**: A JSON object holding data about the user to add.
- **Response**: A JSON object holding data about the user that was added, including an ID.

### Put user information (update)

- **URL**: `/users/[Username]`
- **Request**: A JSON object holding data about the user which needs to be updated.
- **Response**: A JSON object holding data about the updated user information.

### Post movie to users favorite movies list

- **URL**: `/users/[Username]/movies/[MovieID]`
- **Request**: None
- **Response**: A JSON object holding data about the updated user information.

### Delete movie from users favorite movie list

- **URL**: `/users/[Username]/movies/[MovieID]`
- **Request**: None
- **Response**: A JSON object holding data about the updated user information.

### Delete user

- **URL**: `/users/[Username]`
- **Request**: None
- **Response**: Text message indicating whether the user deregister successfully.
