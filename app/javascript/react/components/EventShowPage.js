import React, { useState, useEffect } from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"

import EventShowTile from './EventShowTile'

const EventShowPage = props => {
  const [errorList, setErrorList] = useState([])
  const [eventData, setEventData] = useState(
    {
      name: "",
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
    }
  )

  const [charityData, setCharityData] = useState (
    {
      name: ""
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
    fetch(`/api/v1/events/${props.match.params.id}`)
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
      setEventData(json.event)
      setCharityData(json.charity)
    })
  }, [])

  return (
    <div className="event-show-wrapper">
      <EventShowTile
        charity={charityData.name}
        website={charityData.website}
        name={eventData.name}
        description={eventData.description}
        eventDate={eventData.event_date}
        startTime={eventData.start_time}
        endTime={eventData.end_time}
        venue={eventData.venue}
        address={eventData.address}
        city={eventData.city}
        state={eventData.state}
        zip={eventData.zip}
        venueWebsite={eventData.venue_website}
        eventPage={eventData.event_page}
        eventPhoto={eventData.event_photo}
      />
    </div>
  )
}

export default EventShowPage
