import React, { Component } from "react";
import axios from "axios";
import AnimeList from "./Components/AnimesList/index";
import SearchBar from "./Components/SearchBar/index";

class App extends Component {
  state = {
    isLoaded: false,
    data: []
  };

  componentDidMount() {
    this.getPost();
  }

  getPost = term => {
    axios
      .get(`https://kitsu.io/api/edge/anime/?filter[text]=${term}`)
      .then(res => {
        let data = res.data.data;
        this.setState({ data: data, isLoaded: true });
        console.log(data);
      });
  };

  sayHello = () => {
    console.log("sayHello was triggered!");
  };

  render() {
    return (
      <div className="container">
        <div className="main-title">Browse anime</div>
        <SearchBar getPost={this.getPost} />
        <AnimeList data={this.state.data} isLoaded={this.state.isLoaded} />
        </div>
    );
  }
}
export default App;
