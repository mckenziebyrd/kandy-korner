import React, { useState } from 'react'
import { useEffect } from 'react'

export const Locations = () => {
    const [locations, assignLocations] = useState([])
    
    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
                .then(res => res.json())
                .then(
                    (locationsArray) => {
                        assignLocations(locationsArray)
                     }
                )
        },
        []
    )
  
    return (
    <>
    {
        locations.map(
            (locationObj) => {
                return <h3 key={`customer--${locationObj.id}`}>{locationObj.address}</h3>
            }
        )
    }
    </>
  )
}
