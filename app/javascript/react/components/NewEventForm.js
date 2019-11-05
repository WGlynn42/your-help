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
    <div className="row">
      <div className="columns large-12">
          <h3>Add a new event!</h3>

        <div className="row new-event-form columns large-12">
          <form onSubmit={onSubmitHandler}>

            <div className="columns large-12 new-event-form-event-info">
            <h4>Event Information</h4>
            </div>

            <div className="columns large-6">
            <label htmlFor="name">Event Name: </label>
            <input name="name" id="name" type="text" value={newEvent.name} onChange={handleChange}/>
            </div>

            <div className="columns large-6">
            <label>Charity: </label>
            <select  name="charity_id" id="charity_id" onChange={handleChange}>
              {charityOptions}
            </select>
            </div>

            <div className="columns large-4">
            <label htmlFor="event_date">Event Date: </label>
            <input name="event_date" id="event_date" type="text" value={newEvent.event_date} onChange={handleChange}/>
            </div>

            <div className="columns large-4">
            <label htmlFor="start_time">Start Time: </label>
            <input name="start_time" id="start_time" type="text" value={newEvent.start_time} onChange={handleChange}/>
            </div>

            <div className="columns large-4">
            <label htmlFor="end_time">End Time: </label>
            <input name="end_time" id="end_time" type="text" value={newEvent.end_time} onChange={handleChange}/>
            </div>


            <div className="columns large-12">
            <label htmlFor="description">Event Description: </label>
            <textarea name="description" id="description" value={newEvent.description} onChange={handleChange}/>
            </div>

            <div className="columns large-6">
            <label htmlFor="event_page">Event Website: </label>
            <input name="event_page" id="event_page" type="text" value={newEvent.event_page} onChange={handleChange}/>
            </div>

            <div className="columns large-6">
            <label htmlFor="event_photo">Event Photo(URL): </label>
            <input name="event_photo" id="event_photo" type="text" value={newEvent.event_photo} onChange={handleChange}/>
            </div>

            <div className="columns large-12 new-event-form-venue-info">
            <hr />
            <h4>Venue Information</h4>
            </div>

            <div className="columns large-6">
            <label htmlFor="venue">Event Venue: </label>
            <input name="venue" id="venue" type="text" value={newEvent.venue} onChange={handleChange}/>
            </div>

            <div className="columns large-6">
            <label htmlFor="venue_website">Venue Website: </label>
            <input name="venue_website" id="venue_website" type="text" value={newEvent.venue_website} onChange={handleChange}/>
            </div>

            <div className="columns large-12">
            <label htmlFor="address">Street Address: </label>
            <input name="address" id="address" type="text" value={newEvent.address} onChange={handleChange}/>
            </div>

            <div className="columns large-6">
            <label htmlFor="city">City/Town: </label>
            <input name="city" id="city" type="text" value={newEvent.city} onChange={handleChange}/>
            </div>

            <div className="columns large-3">
            <label htmlFor="state">State: </label>
            <input name="state" id="state" type="text" value={newEvent.state} onChange={handleChange}/>
            </div>

            <div className="columns large-3">
            <label htmlFor="zip">Zip: </label>
            <input name="zip" id="zip" type="text" value={newEvent.zip} onChange={handleChange}/>
            </div>

            <div className="columns large-12 new-event-form-button">
            <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewEventForm
