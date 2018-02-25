import React from "react";
// import Anime from "../Anime/index";
import './styles.css'

const Anime = props => {
  const item = props.item.attributes;
  return (
    <div className="anime-wrapper">
      <div className="anime-picture">
        <img src={item.posterImage.original} />
      </div>
      <div className="anime-title">
        <h1>{item.canonicalTitle}</h1>
      </div>
      <div className="anime-discription">
        <p>{item.synopsis}</p>
      </div>
    </div>
  );
};

const AnimeList = props => {
  if(props.isLoaded === false){
    return <h1>Loading...</h1>
  } else {
    return <div className="anime-container" >
        {props.data.map((item, index) => (
          <Anime key={index} item={item} />
        ))}
      </div>
  }
};

export default AnimeList;
