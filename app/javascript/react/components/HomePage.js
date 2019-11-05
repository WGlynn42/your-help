import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = props => {
  return (
    <div className="home-page-background">
      <div className="row">
        <div className="home-page-first-row columns large-6">
          <div className="home-page-first-row-text">
            <h2 style={{color: "white"}}>Find a charity!</h2>
            <p id= "home-page-row-2-text" style={{color: "white"}}>Find a charity</p>
            <p style={{color: "white"}}>Hello from the first row!</p>
            <div className="home-page-first-row-link">
              <Link to="/charities" style={{color: "white"}}>Charities</Link>
            </div>
          </div>
        </div>

        <div className="home-page-second-row columns large-6">
          <div className="cell home-page-second-row-text">
            <h2 style={{color: "white"}}>Find an event!</h2>
            <p style={{color: "white"}}>Hello from the second row!</p>
            <div className="home-page-second-row-link">
              <Link to="/events" style={{color: "white"}}>Events</Link>
            </div>
          </div>
        </div>
      </div>
    </div>

)
}

export default HomePage
