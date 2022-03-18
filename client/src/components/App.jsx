import React from 'react';
import movies from '../data/fakeData.js';
import MovieList from './MovieList.jsx';



const App = () => (
  <div>
    <MovieList movies={movies}/>
  </div>
);

export default App;






















// import React from 'react';
// import movies from '../data/fakeData.js'
// import MovieList from './MovieList.jsx'

// import React from 'react';

// class App extends from React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       'movies': movies,
//       'searchBar': ''
//     }
//   }

//   handleMovieSearch(movie, searchInput) {
//     this.setState {
//       'movies': movie
//       'searchBar': searchInput
//     }
//   }

//   render() {
//     return (
//       <MovieList movies={this.state.movies}/>
//       <Search handleMovieSearch={this.handleMovieSearch}/>
//     )
//   }
// }


// export default App;