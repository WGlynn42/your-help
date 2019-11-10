import React from 'react'

const ContactInfoContainer = props => {
  return(
    <div>
      <div className="contact-info-container">
        <div>
          <h3 className="show-container-info-header"> Main Contact </h3>
          <p className="show-container-info">{props.charity.contact_name}, {props.charity.contact_role}</p>
        </div>
        <div>
          <p className="show-container-info">{props.charity.contact_phone}</p>
          <p className="show-container-info">{props.charity.contact_email}</p>
        </div>
      </div>
    </div>
  )
}

export default ContactInfoContainer
