import React from 'react';
import { Link } from 'react-router-dom'

const CharityTile = props => {

  let image
  if (props.photo !== null) {
    image = <img className="charity-tile-image" src={props.photo}></img>
  }

  return(
        <div className="card small-4 large-3">
          <div className="card-divider charity-index-name">
            <h5><Link to={`/charities/${props.id}`}>{props.name}</Link></h5>
          </div>
          <div className="card-section charity-index-image">
            {image}
          </div>
          <div className="card-section text-center">
            <p className="charity-index-citystate">
              {props.city}, {props.state}
            </p>
          </div>
        </div>
  )
}

export default CharityTile
