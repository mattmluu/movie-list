
class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    }

    this.domListener = this.domListener.bind(this);
  }

  submitForm(){
    this.preventDefault()
    
  }


  domListener(event) {
    const newValue = event.target.value;
    this.setState({
      searchText: newValue;
    })
  }

  render() {
    return (
      <form>
        <input>
          onChange={this.domListener}
          value={this.state.searchText}
          type='text'
        </input>
      </form>
    )
  }

}
