import React from 'react';
import movies from '../data/fakeData.js';
import MovieList from './MovieList.jsx';
import Searchbar from './Searchbar.jsx';


//since searchBar has state that is used to alter movie list rendering
//app needs to be stateful and pass its state down to search bar so that app can change the movielist
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchTxt: '',
      movies: movies
    }
  }

  render() {
    return (
      <div>
        <Searchbar />
        <MovieList movies={this.state.movies} />
      </div>
    )
  }
}



export default App;







{/* const App = () => (
  <div>
    <Searchbar />
    <MovieList movies={movies}/>
  </div>
); */}
























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