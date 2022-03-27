import React from 'react';
import axios from 'axios';
import movies from '../data/fakeData.js';
import MovieList from './MovieList.jsx';
import Searchbar from './Searchbar.jsx';
import AddMovie from './AddMovie.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchTxt: '',
      movies: []
    }

    // this.handleSearchInput = this.handleSearchInput.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.liftSearchTxtState = this.liftSearchTxtState.bind(this);
    this.liftAddMovieState = this.liftAddMovieState.bind(this);
  }

  // const getData = (cb) => {
  //   //fetch(url)
  //   fetch('http://localhost:3000/api/movies').then((response) => {
  //     return response.json();
  //   }).then((data) => {
  //     cb(data)
  //   })
  // }

  componentDidMount() {
    axios('http://localhost:3000/api/movies').then((response) => {
      //response.data;
      this.setState({movies: response.data})
    })
    //getData((data) => {this.setState({movies: data})});
  }

  liftSearchTxtState(searchTxt) {
    this.setState({searchTxt});
  }

  //create movie obj
  //set title to the addMovie argument --> user input
  //add movie to a copy of existing list
  //change state of movieList
  //clear the searchTxt otherwise you can't re-render movies
  liftAddMovieState(addMovie) {
    var newMovie = {'title': addMovie};
    console.log(newMovie);
    var newMovieList = this.state.movies.slice();
    newMovieList.push(newMovie);
    console.log(newMovieList);
    this.setState({movies: newMovieList});
    this.setState({searchTxt: ''})

    //perform a post request to put the movie object into the database
      axios({
        method: 'post',
        url: 'http://localhost:3000/api/movies',
        data: newMovie
      });
  }

  //create a filter method that filters the state of movies based on the state of searchTxt
  filterBySearch() {
    var { searchTxt, movies } = this.state;
    if (!searchTxt.length !== 0) {
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

