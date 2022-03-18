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
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //create a function to handle user input into the search bar
  //this function will be invoked on changes from user input
  //change the state of searchTxt based on whatever is being inputted
  handleInput(event) {
    event.preventDefault();
    this.setState({searchTxt: event.target.value})
    //console.log(this.state.searchTxt);
  }

  //create a handle submit function that will be invoked whenever the submit button is clicked
  //after clicking submit, the text in the search bar should clear and the movie list should be re-rendered with the filtered movies
  handleSubmit(event) {
    event.preventDefault();
    this.setState({searchTxt: ''});
    console.log('You clicked submit');
    console.log(`Searching for: ${this.state.searchTxt}`)
  }

  render() {
    return (
      //on submission click, invoke handle submit function
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.searchTxt} onChange={this.handleInput}/>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Searchbar;




















// class Search extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       searchText: ''
//     }

//     this.domListener = this.domListener.bind(this);
//   }

//   submitForm(){
//     this.preventDefault()

//   }


//   domListener(event) {
//     const newValue = event.target.value;
//     this.setState({
//       searchText: newValue;
//     })
//   }

//   render() {
//     return (
//       <form>
//         <input>
//           onChange={this.domListener}
//           value={this.state.searchText}
//           type='text'
//         </input>
//       </form>
//     )
//   }

// }
