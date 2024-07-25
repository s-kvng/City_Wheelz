import { Box, Flex } from '@mantine/core'
import React from 'react'
import CarCard from './CarCard'

const CarList = () => {
  return (
    <Box  w={{ base: '100%', md: "100%"}}>
        <Flex wrap="wrap" justify="space-between" gap="lg">
            <CarCard/>
            <CarCard/>
            <CarCard/>
            <CarCard/>
            <CarCard/>
            <CarCard/>
        </Flex>
    </Box>
  )
}

export default CarList