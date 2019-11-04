import React from 'react'

const CharityShowTile = props => {

  let image
  if (props.charity.photo !== null) {
    image = <img className="charity-show-image text-center" src={props.charity.photo} width="180" height="30"></img>
  }

  return (
    <div className="grid-x">
      <div className="cell small-12 text-center" id="charity-name-container">
        <h2>{props.charity.name}</h2>
      </div>
      <div className="grid-x charity-left-container">
        <div className="cell small-6" id="charity-logo">
          {image}
          <div className="charity-show-important-links">
            <div className="charity-show-website-link">
              <p><a href={props.charity.website}>Website</a></p>
            </div>
            <div className="charity-show-donation-link">
              <p><a href={props.charity.donationPage}>Donate Now!</a></p>
            </div>
          </div>
            <div className="charity-show-phone">
              <h4>Phone:</h4>
              <p>{props.charity.phone}</p>
            </div>
              <div className="charity-show-address">
              <h4>Address:</h4>
              <p>{props.charity.address}</p>
              <p>{props.charity.city}, {props.charity.state} {props.charity.zip}</p>
            </div>
          </div>
        <div className="cell small-6" id="red-container">
          <div className="event-show-mission">
            <h4>Mission Statement</h4>
            <p>{props.charity.mission_statement}</p>
          </div>
          <div className="charity-show-contact">
            <h4>Contact Person</h4>
            <p>{props.charity.contact_name}</p>
            <p>{props.charity.contact_role}</p>
            <p>{props.charity.contact_phone}</p>
            <p>{props.charity.contact_email}</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default CharityShowTile
