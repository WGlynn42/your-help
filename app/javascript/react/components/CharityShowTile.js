import React from 'react'

const CharityShowTile = props => {

  let image
  if (props.photo !== null) {
    image = <img className="charity-show-image text-center" src={props.photo} width="180" height="30"></img>
  }

  return (
    <div className="grid-x">
      <div className="cell small-12 text-center" id="charity-name-container">
        <h2>{props.name}</h2>
      </div>
      <div className="grid-x charity-left-container">
        <div className="cell small-6" id="charity-logo">
          {image}
          <div className="charity-show-important-links">
            <div className="charity-show-website-link">
              <p><a href={props.website}>Website</a></p>
            </div>
            <div className="charity-show-donation-link">
              <p><a href={props.donationPage}>Donate Now!</a></p>
            </div>
          </div>
            <div className="charity-show-phone">
              <h4>Phone:</h4>
              <p>{props.phone}</p>
            </div>
              <div className="charity-show-address">
              <h4>Address:</h4>
              <p>{props.address}</p>
              <p>{props.city}, {props.state} {props.zip}</p>
            </div>
          </div>
        <div className="cell small-6" id="red-container">
          <div className="event-show-mission">
            <h4>Mission Statement</h4>
            <p>{props.missionStatement}</p>
          </div>
          <div className="charity-show-contact">
            <h4>Contact Person</h4>
            <p>{props.contactName}</p>
            <p>{props.contactRole}</p>
            <p>{props.contactPhone}</p>
            <p>{props.contactEmail}</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default CharityShowTile
