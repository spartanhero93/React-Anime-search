import React from 'react'

const Anime = (props) => {
  const item = props.item;
  return (
    <figure>
      <img src={item.attributes.posterImage.tiny} />
    </figure>
  )
}

export default Anime;