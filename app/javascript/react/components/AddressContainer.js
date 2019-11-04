import React, { useState } from 'react'

const AddressContainer = props => {
  return(
    <div className="address-info-container">
      <div>
        <h4> Address Info </h4>
        <p>{props.charity.address}</p>
        <p>{props.charity.city}, {props.charity.state} {props.charity.zip}</p>
      </div>
    </div>
  )
}

export default AddressContainer
