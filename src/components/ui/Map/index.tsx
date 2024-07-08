"use client"

import React from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import classes from "./Map.module.css"
import { Container } from '@mantine/core'

const Map = () => {
  return (
    <Container className={classes.container}>
        <MapContainer 
        className={classes.mapContainer}
        center={[51.505, -0.09]} 
        zoom={13} 
        scrollWheelZoom={false}
        style={{ height: "300px"}}
        >
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                Region Name
                </Popup>
            </Marker>
        </MapContainer>

    </Container>
    
  )
}

export default Map