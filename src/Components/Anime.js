import React from 'react'
import { Col , Card, CardTitle } from 'react-materialize';


const Anime = (props) => {
  const item = props.item;
  return (
    <Col s={12} m={6} l={4}>
      <Card className="small"
        header={
          <CardTitle
            reveal
            image={item.attributes.posterImage.large}
            waves="light" />} 
            title={item.attributes.canonicalTitle} 
            reveal={<p className="anime-description">
              {item.attributes.synopsis}
            </p>}>
          <p>
            <a href="/">This is a link</a>
          </p>
        </Card>
     </Col>
  )
}

export default Anime;