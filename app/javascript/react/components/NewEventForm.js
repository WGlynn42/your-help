import React, { useState } from 'react';

const NewEventForm = (props) => {
  const [newEvent, setNewEvent] = useState({
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

  const handleChange = event => {
    setNewEvent({
      ...newEvent,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const clearForm = () => {
    setNewEvent({
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
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    let payload = {
      'event': newEvent
    }
    props.onEventSubmitted(payload, clearForm)
  }

  let charityOptions = props.charities.map((charity) =>
        <option key={charity.id} value={charity.id}>{charity.name}</option>
    );

  return(
    <div className="grid-x grid-padding-x">
      <div className="cell">
        <div className="callout primary" id="new-event-form">
          <h3>Add a new event!</h3>
          <form onSubmit={onSubmitHandler}>

            <label htmlFor="name">Event Name: </label>
            <input name="name" id="name" type="text" value={newEvent.name} onChange={handleChange}/>

            <label>Charity: </label>
            <select  name="charity_id" id="charity_id" onChange={handleChange}>
              {charityOptions}
            </select>

            <label htmlFor="description">Event Description: </label>
            <textarea name="description" id="description" value={newEvent.description} onChange={handleChange}/>

            <label htmlFor="event_date">Event Date: </label>
            <input name="event_date" id="event_date" type="text" value={newEvent.event_date} onChange={handleChange}/>

            <label htmlFor="start_time">Start Time: </label>
            <input name="start_time" id="start_time" type="text" value={newEvent.start_time} onChange={handleChange}/>

            <label htmlFor="end_time">End Time: </label>
            <input name="end_time" id="end_time" type="text" value={newEvent.end_time} onChange={handleChange}/>

            <label htmlFor="venue">Event Venue: </label>
            <input name="venue" id="venue" type="text" value={newEvent.venue} onChange={handleChange}/>

            <label htmlFor="address">Street Address: </label>
            <input name="address" id="address" type="text" value={newEvent.address} onChange={handleChange}/>

            <label htmlFor="city">City/Town: </label>
            <input name="city" id="city" type="text" value={newEvent.city} onChange={handleChange}/>

            <label htmlFor="state">State: </label>
            <input name="state" id="state" type="text" value={newEvent.state} onChange={handleChange}/>

            <label htmlFor="zip">Zip: </label>
            <input name="zip" id="zip" type="text" value={newEvent.zip} onChange={handleChange}/>

            <label htmlFor="venue_website">Venue Website: </label>
            <input name="venue_website" id="venue_website" type="text" value={newEvent.venue_website} onChange={handleChange}/>

            <label htmlFor="event_page">Event Website: </label>
            <input name="event_page" id="event_page" type="text" value={newEvent.event_page} onChange={handleChange}/>

            <label htmlFor="event_photo">Event Photo(URL): </label>
            <input name="event_photo" id="event_photo" type="text" value={newEvent.event_photo} onChange={handleChange}/>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewEventForm
