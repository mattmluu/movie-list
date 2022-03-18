import React from 'react';

//Search bar needs state so that whatever is typed into the search bar can be saved to the state
//when hitting submit button, the search bar state will be used to filter the movies
//search bar has two things: bar for input and then a submit button
//the input bar needs to keep track of state, but the submit doesnt
//the submit needs a event handler to check for submission clicks
//the input bar needs a event handler as well to check for user input
class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTxt: ''
    }

    //need to bind 'this' to the handlers so that when it is invoked, it is invoked with the context of this. Otherwise setState will be undefined
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //create a function to handle user input into the search bar
  //this function will be invoked on changes from user input
  //change the state of searchTxt based on whatever is being inputted
  handleSearchInput(event) {
    event.preventDefault();
    this.setState({searchTxt: event.target.value});
    //console.log(this.state.searchTxt);
  }

  //create a handle submit function that will be invoked whenever the submit button is clicked
  //after clicking submit, the text in the search bar should clear and the movie list should be re-rendered with the filtered movies
  handleSubmit(event) {
    event.preventDefault();
    this.props.liftSearchTxtState(this.state.searchTxt);
    console.log('You clicked submit');
    console.log(`Searching for: ${this.state.searchTxt}`)
    this.setState({searchTxt: ''});
  }

  render() {
    return (
      //on submission click, invoke handle submit function
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.searchTxt} onChange={this.handleSearchInput}/>
        <button type='submit'>Search</button>
      </form>
    )
  }
}

export default Searchbar;

