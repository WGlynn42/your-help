import React from 'react'

const CharityShowTile = props => {

  let image
  if (props.charity.photo !== null) {
    image = <img className="charity-show-image text-center" src={props.charity.photo} width="180" height="30"></img>
  }

  return (
    <div className="row charity-container">
      <div className="columns large-12 text-center charity-name-container">
        <h2 id="charity-name-container">{props.charity.name}</h2>
      </div>
      <div className="row large-12 columns charity-image-container">
        <div className="columns large-9" id="charity-logo">
          {image}
          <div>
            <div className="charity-show-website-link columns large-6">
              <p><a href={props.charity.website}>Website</a></p>
            </div>
            <div className="charity-show-donation-link columns large-6">
              <p><a href={props.charity.donationPage}>Donate Now!</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>



  )
}

export default CharityShowTile
