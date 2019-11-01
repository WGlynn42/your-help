import React, { useState, useEffect } from 'react'
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom"

import NewEventForm from './NewEventForm'

const NewEventContainer = props => {
  const [errorList, setErrorList] = useState([])
  const [charities, setCharities] = useState([])
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [events, setEvents] = useState({
      name: "",
      charity_id: "",
      description: "",
      event_date: "",
      start_time: "",
      end_time: "",
      venue: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      venue_website: "",
      event_page: "",
      event_photo: ""
    })

  let errors
  if (errorList.length > 0){
    errors = (
      <div className="callout alert">
        {errorList.join(" and ")}
      </div>
    )
  }

  useEffect(() => {
    fetch("/api/v1/charities")
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
      setCharities(json)
    })
  }, [charities.length])

  const onEventSubmitted = (newEvent, clearForm) => {
    fetch(`/api/v1/events/`, {
      method: 'POST',
      credentials: "same-origin",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newEvent)
    })
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
    .then(eventBody => {
      if (eventBody.new_event){
        debugger
        // clearForm()
        // setErrorList([])
        setEvents(eventBody.new_event)
        setShouldRedirect(true)
        console.log(shouldRedirect)
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
    }
    if (shouldRedirect){
      debugger
      return <Redirect to="/events" />
    }

  return (
    <div className="event-form-wrapper">
      <NewEventForm
        onEventSubmitted={onEventSubmitted}
        charities={charities}
      />
    </div>
  )
}


export default NewEventContainer
