import React from 'react'

const CharityShowTile = props => {

  let image
  if (props.eventPhoto !== null) {
    image = <img src={props.eventPhoto}></img>
  }
  debugger
  return (
    <div>
      <div className="row event-tile">
        <div className="columns large-12 text-center event-show-header">
          <h1><a href={props.eventPage}>{props.name}</a></h1>
          <h4><a href={props.website}>Benefitting {props.charity}</a></h4>
        </div>

        <div className="row">
          <div className="columns large-7">
            <div className="columns event-show-image">
              {image}
           </div>
           <div className="event-show-website text-center columns large-12">
             <p><a href={props.eventPage}>Event Website</a></p>
           </div>
         </div>

          <div className="event-show-description columns large-4">
            <h3> Event Description</h3>
            <p>{props.description}</p>

            <div className="event-show-address columns large-12">
              <hr />
              <h3>Event Venue</h3>
              <h6>{props.venue}</h6>
              <p>{props.address}</p>
              <p>{props.city}, {props.state} {props.zip}</p>
              <p><a href={props.venueWebsite}>{props.venue}</a></p>
              <hr />
            </div>
          </div>
        </div>
       </div>
      </div>


  )
}

export default CharityShowTile
