import React from 'react'

const Anime = (props) => {
  const item = props.item;
  return (
    <figure className="anime-pictures">
      <img src={item.attributes.posterImage.tiny} />
      <figcaption>
        <p>{item.attributes.canonicalTitle}</p>
      </figcaption>
    </figure>
  )
}

export default Anime;