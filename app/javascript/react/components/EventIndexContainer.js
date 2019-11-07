import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import EventTile from "./EventTile"

const EventIndexContainer = props => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch('/api/v1/events')
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
    .then(body => {
      setEvents(body)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const deleteEvent = (thisEvent) => {
  fetch(`api/v1/events/${thisEvent}.json`, {
    credentials: 'same-origin',
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'}
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
  .then(parkBody => {
    setEvents(eventBody.event)
    setCurrentUserId(parkBody.scope[0].id)
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`))
}

// let image = <img className="event-index-image" src="https://scontent.fbed1-2.fna.fbcdn.net/v/t31.0-8/13064646_10154248557159036_8143815623671485795_o.jpg?_nc_cat=106&_nc_oc=AQmrRXtXAhmGv50HhtgkonA2D7z0W9OWJhrX4YBdpcDKK376cJGsDlU1Brqpv8MXYKUQZzM8SUR9GoA4VtMGCfj1&_nc_ht=scontent.fbed1-2.fna&oh=cfa9f2a354f7edc68f4be98a3b96e3d2&oe=5E56F970"></img>

  const eventTiles = events.map((event) => {
    return(
      <EventTile
        key={event.id}
        id={event.id}
        name={event.name}
        description={event.description}
        eventDate={event.event_date}
        startTime={event.start_time}
        endTime={event.end_time}
        venue={event.venue}
        address={event.address}
        city={event.city}
        state={event.state}
        zip={event.zip}
        venueWebsite={event.website}
        eventPage={event.event_page}
        eventPhoto={event.event_photo}
      />
    )
  })

  return(
    <div>
      <div className="columns large-8 event-index-page-tiles">
        {eventTiles}
      </div>
      <div className="columns large-4 event-index-page-background">
      </div>
    </div>
  )
}

export default EventIndexContainer
