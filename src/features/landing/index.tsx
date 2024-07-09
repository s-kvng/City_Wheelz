"use client"
import React from 'react'
import Hero from './Hero'
import Map from '@/components/ui/Map'
import { Container } from '@mantine/core'
import dynamic from 'next/dynamic'
import DividerUi from '@/components/ui/DividerUi'
import DriversSection from './DriversSection'

// const Map = dynamic(()=> import('@/components/ui/Map'))

const Landing = () => {
  return (
    <>
    <Hero/>
    <Container px="1rem" mb="3rem">
    <Map/>
    </Container>
    <DividerUi  label="Request a Driver"/>
    <DriversSection/>
    </>
  )
}

export default Landing