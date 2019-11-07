import React, { useState } from 'react'
import MapComponent from "./MapComponent"


const AddressContainer = props => {
  return(
    <div className="address-info-container">
      <div>
        <h4 className="show-container-info"> Address Info </h4>
        <p className="show-container-info">{props.charity.address}</p>
        <p className="show-container-info">{props.charity.city}, {props.charity.state} {props.charity.zip}</p>
      </div>
      <div className="address-container-google-maps">
        <MapComponent />
      </div>
    </div>
  )
}

export default AddressContainer
