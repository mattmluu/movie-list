import React from 'react';

//movie obj passed in as props
//display the movie title by putting it inside a div so that when Movie instance is created, the movie title is rendered
var Movie = ({movie}) => (
 <div>{movie.title}</div>
)

export default Movie;