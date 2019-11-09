import React from 'react';
import { Link } from 'react-router-dom'

const EventTile = props => {

  let image
  if (props.eventPhoto !== null) {;
    image = <img className="event-tile-image"src={props.eventPhoto}></img>
  }

  return(
    <div className="card event-tile-card small-2 large-3">
      <div className="card-divider event-tile-name">
        <h5 id="event-tile-name"><Link to={`/events/${props.id}`}>{props.name}</Link></h5>
      </div>
        <div className="card-section event-tile-image-image">
          <p>{props.charity}</p>
          {image}
        </div>
      <div className="card-section text-center">
        <p className="event-tile-date">{props.eventDate}</p>
        <p className="event-tile-time">{props.startTime}</p>
        <p className="event-tile-citystate">{props.city}, {props.state}</p>
      </div>
    </div>
  )
}


export default EventTile
