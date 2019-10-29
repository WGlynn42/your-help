import React from 'react'

const CharityShowTile = props => {

  let image
  if (props.photoRef !== null) {
    image = <img src={props.photo} width="180" height="30"></img>
  }

  return (
    <div>
      <div className="charity-tile primary card cell">
        <div className="card-divider text-center charity-show-header" id="show-name">
          <div className="float-left">
            <h2>{props.name}</h2>
            <div className="cell small-12 medium-6">
              {image}
            </div>
          </div>
        </div>
        <div className="card-section grid-x grid-padding-x">
          <div className="float-right">
            <div className="charity-show-info cell small-12 medium-6">
              <div className="charity-show-address">
                <p>{props.address}</p>
                <p>{props.city}, {props.state} {props.zip}</p>
              </div>
              <div className="charity-show-phone">
                <p>Phone: {props.phone}</p>
              </div>
              <div className="charity-show-website">
                <p>Website: {props.website}</p>
                <p>Donation Page: {props.donationPage}</p>
              </div>
              <hr/>
              <div className="charity-show-contact-person">
                <h4>Contact Person</h4>
                <p>{props.contactName}</p>
                <p>{props.contactRole}</p>
                <p>{props.contactPhone}</p>
                <p>{props.contactEmail}</p>
              </div>
              <hr />
              <div className="charity-show-rating">
                <h4>Mission Statement</h4>
                <p>{props.missionStatement}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharityShowTile
