import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// import ReviewTile from './ReviewTile'
// import EditReviewContainer from './EditReviewContainer'

const MissionStatementContainer = props => {
  const [charities, setCharities] = useState([])

  // useEffect(() => {fetch(`/api/v1/charities/${props.charityId}`)
  //   .then((response) => {
  //     if (response.ok) {
  //       return response
  //     } else {
  //       let errorMessage = `${response.status} (${response.statusText})`,
  //         error = new Error(errorMessage)
  //       throw(error)
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(body => {
  //     setCharities(body)
  //   })
  //   .catch(error => console.error(`Error in fetch: ${error.message}`))
  // }, [])

    return (
      <div>
        <div className="mission-statement-container">
          <h4 className="show-container-info"> Mission Statement </h4>
          <p className="show-container-info">{props.charity.mission_statement}</p>
        </div>
      </div>
    )

}
export default MissionStatementContainer
