import DriverCard from '@/components/ui/DriverCard'
import supabase from '@/config/superBaseClient'
import { Container, Grid, GridCol } from '@mantine/core'
import React, { useEffect, useState } from 'react'

const DriversSection = () => {

    const [drivers, setDrivers] = useState(null)
    const [ errors, setErrors] = useState(null)
  
    useEffect(() => {
      const fetchDrivers = async () =>{
        
        let { data, error } = await supabase
        .from('drivers')
        .select('*')
          
  
        if(error) {
          console.error(error)
          setErrors("Could not fetch cars")
          setDrivers(null)
          return  // Abort the function if the request fails.
        }
  
        if(data){
          setDrivers(data)
          setErrors(null)
          console.log(data)
        }
      }
  
      fetchDrivers()
    }, [])

  return (
    <Container  my={"3rem"}>
        <Grid justify="space-around">
            {
                drivers && drivers.map((driver) => (
                    <GridCol key={driver.id} span={{ base: 12, md: 6, lg: 6 }}>
                        <DriverCard driver={driver}/>
                    </GridCol>
                ))
            }
        
            {/* <GridCol span={{ base: 12, md: 6, lg: 6 }}>
                <DriverCard driver={{}}/>
            </GridCol>
            <GridCol span={{ base: 12, md: 6, lg: 6 }}>
                <DriverCard dri/>
            </GridCol>
            <GridCol span={{ base: 12, md: 6, lg: 6 }}>
                <DriverCard/>
            </GridCol> */}
            
        </Grid>
    </Container>
  )
}

export default DriversSection