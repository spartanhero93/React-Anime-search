import React, { Component } from "react";
import Anime from "./Anime";

const Animes = props => {
  console.log("Animes component called! " + props);

  if (!props.isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        {props.data.map((item, index) => <Anime key={index} item={item} />)}
      </div>
    );
  }
};

export default Animes;
