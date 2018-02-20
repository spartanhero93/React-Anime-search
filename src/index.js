import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import axios from 'axios';
import Animes from './Components/Animes';
import "./index.css";
import registerServiceWorker from './registerServiceWorker';


class App extends React.Component {
  state = {
    searchName: "Ghost%20In%20The%20Shell",
    isLoaded: false,
    data: [],
    
  };

  componentDidMount() {
    console.log("componentDidMount Called!")
    this.getPost();
  }

  getAnime() {
    
  }

  getPost = () => {
    axios
      .get(`https://kitsu.io/api/edge/anime/?filter[text]=${this.state.searchName}`)
      .then(res => {
        console.log("ComponentDidMount called")
        let data = res.data.data
        this.setState({ data: data, isLoaded: true })

        console.log(this.state.data)
        this.state.data.map(item => {
          console.log(item.links.self)
        })
      });
  };

  onInputChange = term => {
    this.setState({
      id: term
    });
    console.log(term);
  };

  render() {
    console.log("render method called! " + this.state.data.length)
    return ( 
    <div>
      <h1>There currently {this.state.data.length} amount of anime matching that description!</h1>
      <Animes 
        animes = {this.state.data}
      />
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
