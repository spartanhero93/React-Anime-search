import React, { Component } from 'react';
import './App.css';
import axios from "axios";


class App extends Component {
  state = {
    id: 1,
    data: "",
    imgs: "",
    name: ""
  };

  componentDidMount() {
    this.getPost();
  }

  getPost = () => {
    axios.get(`https://kitsu.io/api/edge/anime/${this.state.id}`).then(res => {
      let data = res.data.data.attributes;
      let imgs = data.posterImage;
      this.setState({ data: data });
      this.setState({ imgs: imgs });
      console.log(this.state.data);
      console.log(this.state.imgs.tiny);
      console.log("ComponentDidMount called");
      console.log(typeof this.state.imgs.tiny);
    });
  };
  
  onInputChange= (term) => {
    this.setState({
      id: term
    })
    console.log(term)
  }

  render() {
    console.log("Render method called, the new ID state is " + this.state.id);
    return <div className="container">
        <figure>
          <img src={this.state.imgs.original} />
        </figure>
        <input type="number" value={this.state.term} onChange={event => this.onInputChange(event.target.value)} />
        <button onClick={this.getPost}>Change posts!</button>
        <h1>{this.state.data.canonicalTitle}</h1>
        <h2>Age rating is {this.state.data.ageRating}</h2>
        <h3>Summary: {this.state.data.synopsis}</h3>
      </div>;
  }
}
export default App;