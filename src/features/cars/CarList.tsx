import { Box, Flex } from '@mantine/core'
import React from 'react'
import CarCard from './CarCard'

const CarList = () => {
  return (
    <Box w={{ base: '100%', md: "calc(100% - 300px)"}}>
        <Flex wrap="wrap" justify="space-between" gap="md">
            <CarCard/>
        </Flex>
    </Box>
  )
}

export default CarList