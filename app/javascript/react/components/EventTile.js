import React from 'react';
import { Link } from 'react-router-dom'

const EventTile = props => {

  let image
  if (props.eventPhoto !== null) {
    image = <img className="event-tile-image" src={props.eventPhoto}></img>
  }

  return(
    <div className="cell small-12 large-6">
      <div className="card event-tile">
        <div className="card-section grid-x grid-padding-x">
          <div className="cell small-2 large-4 center event-index-image">
            {image}
          </div>
          <div className="cell small-10 large-8">
            <h3><Link to={`/events/${props.id}`}>{props.name}</Link></h3>
            <p className="event-index-datetime">{props.eventDate}, {props.startTime}</p>
            <p className="event-index-citystate">{props.city}, {props.state}</p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default EventTile
