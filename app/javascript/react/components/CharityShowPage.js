import React, { useState, useEffect } from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"

import CharityShowTile from './CharityShowTile'
import CharityShowContainer from './CharityShowContainer'

const CharityShowPage = props => {
  const [errorList, setErrorList] = useState([])
  const [charityData, setCharity] = useState(
    {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
      email: "",
      website: "",
      donationPage: "",
      photo: "",
      missionStatement: "",
      contactName: "",
      contactRole: "",
      contactPhone: "",
      contactEmail: "",
    }
  )

  let errors
  if (errorList.length > 0){
    errors = (
      <div className="callout alert">
        {errorList.join(" and ")}
      </div>
    )
  }

  useEffect(() => {
    fetch(`/api/v1/charities/${props.match.params.id}`)
    .then(response => {
      if (response.ok){
        return response
      } else {
        throw new Error(`${response.status} ${response.statusText}`)
      }
    })
    .then(body => {
      return body.json()
    })
    .then(json => {
      setCharity(json)
    })
  }, [])

  return (
    <div>
      <div className="charity-show-wrapper">
        <CharityShowTile
          name={charityData.name}
          address={charityData.address}
          address2={charityData.address2}
          city={charityData.city}
          state={charityData.state}
          zip={charityData.zip}
          phone={charityData.phone}
          email={charityData.email}
          website={charityData.website}
          donationPage={charityData.donation_page}
          photo={charityData.photo}
          missionStatement={charityData.mission_statement}
          contactName={charityData.contact_name}
          contactRole={charityData.contact_role}
          contactPhone={charityData.contact_phone}
          contactEmail={charityData.contact_email}
        />
    </div>

      <div className="charity-show-container">
          <CharityShowContainer
            charityId={charityData.id}
            name={charityData.name}
            address={charityData.address}
            address2={charityData.address2}
            city={charityData.city}
            state={charityData.state}
            zip={charityData.zip}
            phone={charityData.phone}
            email={charityData.email}
            website={charityData.website}
            donationPage={charityData.donation_page}
            photo={charityData.photo}
            missionStatement={charityData.mission_statement}
            contactName={charityData.contact_name}
            contactRole={charityData.contact_role}
            contactPhone={charityData.contact_phone}
            contactEmail={charityData.contact_email}
            />
        </div>
      </div>
  )
}

export default CharityShowPage
