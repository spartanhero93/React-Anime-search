import React from "react";
import Anime from "./Anime";
import { Row, Col, ProgressBar } from "react-materialize";

const AnimeList = props => {
  if(props.isLoaded === false){
    return <ProgressBar />;
  } else {
    return <Row>
        {props.data.map((item, index) => (
          <Anime key={index} item={item} />
        ))}
      </Row>
  }
};

export default AnimeList;
