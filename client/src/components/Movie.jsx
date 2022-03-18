import React from 'react';

//movie obj passed in as props
//display the movie title by putting it inside a div so that when Movie instance is created, the movie title is rendered
var Movie = ({movie}) => (
 <div>{movie.title}</div>
)

export default Movie;


















//each video component will render the title of the video
//video passed in from props and destructured
//video.title = title of the movie
//create a div to hold the title
// import React from 'react';

// var Movie = ({movie}) => (
//   <div> {movie.title} </div>
// )

// export default Movie;