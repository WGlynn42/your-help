import React from 'react';
import { Link } from 'react-router-dom'

const EventTile = props => {

let formattedDate = (date) => {
  if (date) {
    const nums = date.split("-")
    const year = nums[0]
    const month = nums[1]
    const day = nums[2]

    return(
      <span>{month}-{day}-{year}</span>
    )
  }
}

  let image
  if (props.eventPhoto !== null) {;
    image = <img className="event-tile-image"src={props.eventPhoto}></img>
  }

  let formattedEventDate = formattedDate(props.eventDate)

  return(
    <div className="card event-tile-card small-2 large-3">
      <div className="card-divider event-tile-name">
        <h5 id="event-tile-name"><Link to={`/events/${props.id}`}>{props.name}</Link></h5>
      </div>
        <div className="card-section event-tile-image-tile">
          <div className="event-tile-image">
            <Link to={`/events/${props.id}`}>{image}</Link>
          </div>

      <div className="card-section text-center">
        <p className="event-tile-date">{formattedEventDate}</p>
        <p className="event-tile-time">{props.startTime}</p>
        <p className="event-tile-citystate">{props.city}, {props.state}</p>
      </div>
    </div>
  </div>
  )
}


export default EventTile
