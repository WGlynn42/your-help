import React from 'react'

import { Link } from 'react-router-dom'


const HomePage = props => {
  return (
    <div className="grid-y">
      <div className="home-page-first-row grid-x">
        <div className="cell home-page-first-row-text cell">
          <h2 style={{color: "white"}}>Find a charity!</h2>
          <p id= "home-page-row-2-text" style={{color: "white"}}>Find a charity</p>
          <p style={{color: "white"}}>Hello from the first row!</p>
          <div className="home-page-first-row-link">
            <Link to="/charities">Charities</Link>
          </div>
        </div>
      </div>

      <div className="home-page-second-row grid-x cell">
        <div className="cell home-page-second-row-text">
          <p style={{color: "white"}}>Hello from the second row!</p>
          <div className="home-page-second-row-link">
            <Link to="/events">Events</Link>
          </div>
        </div>
      </div>
    </div>


)
}

export default HomePage
