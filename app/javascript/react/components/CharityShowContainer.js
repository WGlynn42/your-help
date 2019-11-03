import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

import MissionStatementContainer from './MissionStatementContainer'
import ContactInfoContainer from './ContactInfoContainer'
import AddressContainer from './AddressContainer'

const CharityShowContainer = props => {
  const [charity, setCharity] = useState({})
  const [charityView, setCharityView] = useState("missionStatement")

  let charityId = props.charityId
  debugger

  useEffect(() => {fetch(`/api/v1/charities/${charityId}`, {
    credentials: 'same-origin',
    })
    .then((response) => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(body => {
      setCharity(body.charity)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  },[])
  debugger

  let component = ""

  const switchView = event => {
    setCharityView(event.currentTarget.name)
  }

  const resetView = () => {
    setCharityView("missionStatement")
  }

  let missionButton = 'selected'
  let contactButton = 'unselected'
  let addressButton = 'unselected'

  if (charityView === "missionStatement") {
    component = <MissionStatementContainer charityId={charityId} resetView={resetView}/>
    missionButton ='selected'
    contactButton = 'unselected'
    addressButton = 'unselected'
  }
  if (charityView === "contact") {
    component = <ContactInfoContainer charityId={charityId} resetView={resetView} />
    missionButton ='unselected'
    contactButton = 'selected'
    addressButton = 'unselected'
  }
  if (charityView === "address") {
    component = <AddressContainer charityId={charityId} resetView={resetView} />
    missionButton ='unselected'
    contactButton = 'unselected'
    addressButton = 'selected'
  }


  return (
    <div className="grid-y charity-show-background">
        <div className = "grid-y small-12 medium-6 list-block">
          <div className="charity-show-tabs">
            <button className={missionButton} name="missionStatement" id="mission-block" onClick={switchView}>
              Mission<br/>Statement
            </button>
            <button className={contactButton} name="contact" id="contact-block" onClick={switchView}>
              Contact<br/>Information
            </button>
            <button className={addressButton} name="address" id="address-block" onClick={switchView}>
              See<br/>Address
            </button>
          </div>
          <div className="show-component">
            {component}
          </div>
        </div>
        <div className="charity-show-comtainer-button button">
          <Link to="/" style={{color: "white"}}> Return to Homepage </Link>
        </div>
      </div>
  )
}

export default CharityShowContainer
