import React from 'react';
import Movie from './Movie.jsx';

//create a component that renders the list of movies
//app.js will pass movies prop into the movieList component instance
//create a new file for new movie component
//create a new component instance for all moviezobjects inside the movies prop

var MovieList = ({movies}) => (
  <div>
    {movies.map((movie, key) => <Movie movie={movie} key={key}/>)}
  </div>
)

export default MovieList;


