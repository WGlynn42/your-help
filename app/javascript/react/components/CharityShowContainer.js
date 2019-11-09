import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

import MissionStatementContainer from './MissionStatementContainer'
import ContactInfoContainer from './ContactInfoContainer'
import AddressContainer from './AddressContainer'

const CharityShowContainer = props => {
  const [charity, setCharity] = useState({})
  const [charityView, setCharityView] = useState("missionStatement")


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
    component = <MissionStatementContainer charity={props.charity} resetView={resetView}/>
    missionButton ='selected'
    contactButton = 'unselected'
    addressButton = 'unselected'
  }
  if (charityView === "contact") {
    component = <ContactInfoContainer charity={props.charity} resetView={resetView} />
    missionButton ='unselected'
    contactButton = 'selected'
    addressButton = 'unselected'
  }
  if (charityView === "address") {
    component = <AddressContainer charity={props.charity} resetView={resetView} />
    missionButton ='unselected'
    contactButton = 'unselected'
    addressButton = 'selected'
  }

  return (
    <div className="row">
        <div className = "columns list-block">
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
      </div>
  )
}

export default CharityShowContainer
