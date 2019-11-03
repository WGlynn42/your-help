import React, { useState } from 'react'

const AddressContainer = props => {
  debugger
  return(
    <div className="row text-center address-info-container">
      <p> Hello Address!</p>
      <p>{props.address}</p>
      <p>{props.city}, {props.state} {props.zip}</p>
    </div>
  )
}

export default AddressContainer
