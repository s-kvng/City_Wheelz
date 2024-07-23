import DriverCard from '@/components/ui/DriverCard'
import { Container, Grid, GridCol } from '@mantine/core'
import React from 'react'

const DriversSection = () => {
  return (
    <Container bg={"red"} my={"3rem"}>
        <Grid justify="space-around">
            <GridCol span={{ base: 12, md: 6, lg: 6 }}>
                <DriverCard/>
            </GridCol>
            <GridCol span={{ base: 12, md: 6, lg: 6 }}>
                <DriverCard/>
            </GridCol>
            <GridCol span={{ base: 12, md: 6, lg: 6 }}>
                <DriverCard/>
            </GridCol>
            <GridCol span={{ base: 12, md: 6, lg: 6 }}>
                <DriverCard/>
            </GridCol>
            
        </Grid>
    </Container>
  )
}

export default DriversSection