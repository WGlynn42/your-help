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
    <div className="grid-x grid-padding-x">
      <div className="cell">
      {eventTiles}
      </div>
    </div>
  )
}

export default EventIndexContainer
