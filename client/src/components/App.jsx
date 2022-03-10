import React from 'react';
import movies from '../data/fakeData.js'
import MovieList from './MovieList.jsx'

// const App = (props) => (
//   <div>
//     <ul>MovieList
//       <MovieList movies={movies}/>
//     </ul>
//   </div>
// );

class App extends from React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'movies': movies,
      'searchBar': ''
    }
  }

  handleMovieSearch(movie, searchInput) {
    this.setState {
      'movies': movie
      'searchBar': searchInput
    }
  }

  render() {
    return (
      <MovieList movies={this.state.movies}/>
      <Search handleMovieSearch={this.handleMovieSearch}/>
    )
  }
}


export default App;