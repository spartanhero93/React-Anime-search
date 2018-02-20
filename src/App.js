import React, { Component } from 'react';
import axios from "axios";
import Animes from "./Components/Animes";


class App extends React.Component {
  state = {
    searchName: "Ghost%20In%20The%20Shell",
    isLoaded: false,
    data: []
  };

  componentDidMount() {
    console.log("componentDidMount Called!");
    this.getPost();
  }

  getPost = () => {
    axios
      .get(
        `https://kitsu.io/api/edge/anime/?filter[text]=${this.state.searchName}`
      )
      .then(res => {
        console.log("ComponentDidMount called");
        let data = res.data.data;
        this.setState({ data: data, isLoaded: true });
        console.log(this.state.data);
        this.state.data.map(item => {
          console.log(item.links.self);
        });
      });
  };

  onInputChange = name => {
    this.setState({
      searchName: name
    });
    console.log(name);
  };

  render() {
    console.log("render method called! " + this.state.data.length);
    return (
      <div className="container">
        <h1>
          There currently {this.state.data.length} amount of anime matching that
          description!
        </h1>
        <input
          type="text"
          value={this.state.name}
          onChange={event => this.onInputChange(event.target.value)}
        />
        <button onClick={this.getPost}>Search!</button>
        <Animes data={this.state.data} isLoaded={this.state.isLoaded} />
      </div>
    );
  }
}
export default App;