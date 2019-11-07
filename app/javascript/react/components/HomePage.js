import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = props => {
  return (
    <div className="home-page-background">
      <div className="row">
        <div className="home-page-first-row columns large-6">
          <div className="home-page-title">
            <h1 className="page-title">Find a charity!</h1>
          </div>
            <div className="home-page-text">
              <p>Hello from the first row!</p>
            </div>
            <div className="home-charities-link">
              <Link to="/charities" style={{color: "white"}}>Charities</Link>
            </div>
          </div>


        <div className="home-page-second-row columns large-6 text-right">
          <div className="cell home-page-title">
            <h1 className="page-title">Find an event!</h1>
          </div>
          <div className="home-page-text">
            <p>Hello from the second row!</p>
          </div>
          <div className="home-events-link">
              <Link to="/events"  style={{color: "white"}}>Events</Link>
            </div>
          </div>
        </div>
      </div>


)
}

export default HomePage
