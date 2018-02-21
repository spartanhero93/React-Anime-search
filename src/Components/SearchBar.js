import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      term: "" 
    }
  }

  onInputChange = term => {
    this.setState({ term });
    this.props.getPost(term);
    console.log(term + " Is the search term!");
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }
}
export default SearchBar;