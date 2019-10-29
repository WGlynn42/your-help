import React from 'react';
import { Link } from 'react-router-dom'

const CharityTile = props => {

  let image
  if (props.photo !== null) {
    image = <img className="charity-tile-image" src={props.photo}></img>
  }

  return(
    <div className="cell small-12 large-6">
      <div className="card charity-tile">
        <div className="card-section grid-x grid-padding-x">
          <div className="cell small-2 large-4 center charity-index-image">
            {image}
          </div>
          <div className="cell small-10 large-8">
            <h3><Link to={`/charities/${props.id}`}>{props.name}</Link></h3>
            <p className="charity-index-citystate">{props.city}, {props.state}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharityTile
