import React from 'react';
import { Link } from 'react-router-dom'

const CharityTile = props => {

  let image
  if (props.photo !== null) {
    image = <img className="charity-tile-image" src={props.photo}></img>
  }

  return(
    <div>
      <div className="card">
        <div className="card-divider text-center">
          <h4><Link to={`/charities/${props.id}`}>{props.name}</Link></h4>
        </div>
        <div className="charity-index-image image-center">
          {image}
        </div>
        <div className="card-section text-center">
          <p className="charity-index-citystate">{props.city}, {props.state}</p>
        </div>
      </div>
    </div>
  )
}

export default CharityTile


//
// <div className="cell large-4">
//     <div className="card charity-tile">
//       <div className="card-section">
//         <div className="charity-index-image">
//           {image}
//         </div>
//         <div className="card-section">
//
//
//         </div>
//       </div>
//     </div>
//   </div>
