import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addMovieTxt: ''
    }
    this.handleAddMovieInput = this.handleAddMovieInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAddMovieInput(event) {
    event.preventDefault();
    this.setState({addMovieTxt: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    //logic that adds code a movie to the list
    this.props.liftAddMovieState(this.state.addMovieTxt);
    this.setState({addMovieTxt: ''})

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.addMovieTxt} onChange={this.handleAddMovieInput} />
        <button type='submit'>Add Movie</button>
      </form>
    );
  }
}

export default AddMovie;