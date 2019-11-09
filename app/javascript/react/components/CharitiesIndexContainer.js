import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import CharityTile from "./CharityTile"

const CharitiesIndexContainer = props => {
  const [charities, setCharities] = useState([])

  useEffect(() => {
    fetch('/api/v1/charities')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      setCharities(body)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const charityTiles = charities.map((charity) => {
    return(
      <CharityTile
        key={charity.id}
        id={charity.id}
        name={charity.name}
        address={charity.address}
        city={charity.city}
        state={charity.state}
        zip={charity.zip}
        phone={charity.phone}
        email={charity.email}
        website={charity.website}
        donationPage={charity.donation_page}
        photo={charity.photo}
        missionStatement={charity.mission_statement}
        contactName={charity.contact_name}
        contactRole={charity.contact_role}
        contactPhone={charity.contact_phone}
        contactEmail={charity.contact_email}
        tagline={charity.tagline}
      />
    )
  })

  return(
    <div>
      <div className="charity-index-page">
        <h2 id="charity-index-title">Local Charities</h2>
        <h4 id="charity-index-line">Select a charity to see more information</h4>
      </div>
        <div className="charity-tile columns large-8">
          <div className="cell">
            {charityTiles}
          </div>
        </div>
        <div className="columns large-4 charity-index-page-background">
      </div>
    </div>
  )
}

export default CharitiesIndexContainer
