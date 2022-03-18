import React from 'react';
import Movie from './Movie.jsx';

//create a component that renders the list of movies
//app.js will pass movies prop into the movieList component instance
//create a new file for new movie component
//create a new component instance for all movie objects inside the movies prop

var MovieList = ({movies}) => (
  <div>
    {movies.map((movie) => <Movie movie={movie}/> )}
  </div>
)

export default MovieList;


























//props will have videos passed in.
//destructor videos from props
//create a div that holds the instance of the video components we create
//map thru the videos passed in from App and create a video component
//instance for each of the videos in the list
//pass each video as a prop into each instance of the Video component

// import Movie from './Movie.jsx'
// import React from 'react';

// var MovieList = ({movies}) => (
//   <div> {movies.map((movie) => (<Movie movie={movie} key={movie.title}/> ))} </div>
// )

// export default MovieList;