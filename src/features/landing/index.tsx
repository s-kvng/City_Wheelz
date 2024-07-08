"use client"
import React from 'react'
import Hero from './Hero'
// import Map from '@/components/ui/Map'
import { Container } from '@mantine/core'
import dynamic from 'next/dynamic'

const Map = dynamic(()=> import('@/components/ui/Map'))

const Landing = () => {
  return (
    <>
    <Hero/>
    <Container px="1rem" mb="2rem">
    <Map/>
    </Container>
    </>
  )
}

export default Landing