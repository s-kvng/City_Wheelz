"use client"
import React from 'react'
import Hero from './Hero'
import Map from '@/components/ui/Map'
import { Box, Container } from '@mantine/core'
import dynamic from 'next/dynamic'
import DividerUi from '@/components/ui/DividerUi'
import DriversSection from './DriversSection'
import CarList from '../cars/CarList'

// const Map = dynamic(()=> import('@/components/ui/Map'))

const Landing = () => {
  return (
    <>
    <Hero/>
    <Box  px={"13rem"} mb="3rem">
      <CarList/>
    </Box>
    <DividerUi  label="Request a Driver"/>
    <DriversSection/>
    </>
  )
}

export default Landing