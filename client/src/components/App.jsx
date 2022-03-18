import React from 'react';
import movies from '../data/fakeData.js';
import MovieList from './MovieList.jsx';
import Searchbar from './Searchbar.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchTxt: '',
      movies: movies,
    }

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearchInput(event) {
    event.preventDefault();
    this.setState({searchTxt: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(`Searching for: ${this.state.searchTxt}`)
    this.setState({movies: this.filterBySearch(), searchTxt: ''});
    console.log('You clicked submit');
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

    // const { searchTxt, movies } = this.state;
    // if (searchTxt) {
    //   return movies.filter((movie) => {
    //     if (movie.title.toLowerCase().includes(searchTxt.toLowerCase())) {
    //       return true;
    //     }
    //     return false;
    //   })
    // }
    // return movies;

    // var filterResult = [];
    // if (searchTxt.length !== 0) {
    //   filterResult = this.state.movies.filter((movie) => {
    //     if (movie.title.toLowerCase().includes(this.state.searchTxt.toLowerCase())) {
    //       filterResult.push(movie);
    //     }
    //   })
    // }

    // this.setState({movies: filterResult})
  }


  render() {
    return (
      <div>
        <Searchbar searchTxt={this.state.searchTxt} handleSearchInput={this.handleSearchInput} handleSubmit={this.handleSubmit} />
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