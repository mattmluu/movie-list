import React from 'react';
import movies from '../data/fakeData.js';
import MovieList from './MovieList.jsx';
import Searchbar from './Searchbar.jsx';
import AddMovie from './AddMovie.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchTxt: '',
      movies: [{title: 'Harry Potter'}]
    }

    // this.handleSearchInput = this.handleSearchInput.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.liftSearchTxtState = this.liftSearchTxtState.bind(this);
    this.liftAddMovieState = this.liftAddMovieState.bind(this);
  }

  componentDidMount() {
    console.log('mounted')
   }

   liftSearchTxtState(searchTxt) {
    this.setState({searchTxt});
   }

   liftAddMovieState(addMovie) {
     var newMovie = {'title': addMovie};
     console.log(newMovie);
     var newMovieList = this.state.movies.slice();
     newMovieList.push(newMovie);
     console.log(newMovieList);
     this.setState({movies: newMovieList});
   }

  //create a filter method that filters the state of movies based on the state of searchTxt
  filterBySearch() {
    const { searchTxt, movies } = this.state;
    if (searchTxt.length !== 0) {
      return movies.filter((movie) => {
        if (movie.title.toLowerCase().includes(searchTxt.toLowerCase())) {
          return true;
        }
        return false;
      })
    }
    return movies;
  }


  render() {
    return (
      <div>
        <AddMovie liftAddMovieState={this.liftAddMovieState}/>
        <Searchbar liftSearchTxtState={this.liftSearchTxtState} />
        <MovieList movies={this.filterBySearch()} />
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