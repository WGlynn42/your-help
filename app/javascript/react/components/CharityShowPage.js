import React, { useState, useEffect } from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"

import CharityShowTile from './CharityShowTile'
import CharityShowContainer from './CharityShowContainer'

const CharityShowPage = props => {
  const [errorList, setErrorList] = useState([])
  const [charityData, setCharityData] = useState(
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
      setCharityData(json)
    })
  }, [])

  return (
    <div className="row">
      <div className="columns large-5">
        <div className="charity-show-wrapper">
          <CharityShowTile
          charity={charityData}
          />
        </div>
      </div>
        <div className="columns large-7 charity-show-container">
          <CharityShowContainer
            charity={charityData}
          />
        </div>
      </div>
  )
}

export default CharityShowPage
