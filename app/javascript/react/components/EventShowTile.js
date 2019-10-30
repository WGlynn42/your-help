import React from 'react'

const CharityShowTile = props => {

  let image
  if (props.eventPhoto !== null) {
    image = <img src={props.eventPhoto} width="180" height="30"></img>
  }
  return (
    <div>
      <div className="event-tile primary card cell">
        <div className="card-divider text-center event-show-header" id="show-name">
          <div className="float-left">
            <h1>{props.name}</h1>
            <p>Benefitting {props.charity}</p>
            <div className="cell small-12 medium-6">
              {image}
            </div>
            <div className="event-show-description">
              <p>{props.description}</p>
            </div>
          </div>
        </div>
        <div className="card-section grid-x grid-padding-x">
          <div className="float-right">
            <div className="event-show-info cell small-12 medium-6">
              <div className="event-show-address">
                <h4>{props.venue}</h4>
                <p>{props.address}</p>
                <p>{props.city}, {props.state} {props.zip}</p>
                <p>{props.venueWebsite}</p>
              </div>
              <hr/>
              <div className="event-show-website">
                <p>Event Website: {props.eventPage}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharityShowTile
