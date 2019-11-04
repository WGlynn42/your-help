import React from 'react'

const ContactInfoContainer = props => {
  return(
    <div>
      <div className="contact-info-container">
        <div>
          <h4> Main Contact </h4>
          <p>{props.charity.contact_name}, {props.charity.contact_role}</p>
        </div>
        <div>
          <p>{props.charity.contact_phone}</p>
          <p>{props.charity.contact_email}</p>
        </div>
      </div>
    </div>
  )
}

export default ContactInfoContainer
