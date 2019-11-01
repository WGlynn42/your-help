import React from 'react'

const CharityShowTile = props => {

  let image
  if (props.photoRef !== null) {
    image = <img className="charity-show-image text-center" src={props.photo} width="180" height="30"></img>
  }

  return (
    <div className="grid-x">
      <div className="cell small-12 text-center" id="event-name-container">
        <h2>{props.name}</h2>
      </div>
      <div className="grid-x">
        <div className="cell small-6" id="color-container">
          {image}
            <h4>Mission Statement</h4>
            <p>{props.missionStatement}</p>
          </div>
        <div className="cell small-6" id="red-container">
          <p>{props.address}</p>
          <p>{props.city}, {props.state} {props.zip}</p>
          <p>Phone: {props.phone}</p>
          <p>Website: {props.website}</p>
          <p>Donation Page: {props.donationPage}</p>
          <h4>Contact Person</h4>
          <p>{props.contactName}</p>
          <p>{props.contactRole}</p>
          <p>{props.contactPhone}</p>
          <p>{props.contactEmail}</p>
        </div>
      </div>
    </div>

  )
}

export default CharityShowTile
