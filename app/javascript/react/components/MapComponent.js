import React from 'react'
import GoogleMapReact from 'google-map-react'

const MapComponent = (props) => {

  return (
    <div style={{ height: '300px', width: '450px' }}>
      <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAl0UiANGcBsekHJp61mnmWPfrEwTRCumQ" }}
          defaultCenter={{
            lat:42.364575,
            lng:-71.068661
          }}
          defaultZoom={ 15 }
        >
      </GoogleMapReact>
    </div>
  )
}

export default MapComponent
