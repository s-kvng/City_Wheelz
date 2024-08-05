import { Box, Flex, Grid } from '@mantine/core'
import { useEffect, useState } from 'react'
import CarCard from './CarCard'
import supabase from '@/config/superBaseClient'

const CarList = () => {
  const [cars, setCars] = useState(null)
  const [ errors, setErrors] = useState(null)

  useEffect(() => {
    const fetchCars = async () =>{
      
      let { data: cars, error } = await supabase
      .from('cars')
      .select('*')
        

      if(error) {
        console.error(error)
        setErrors("Could not fetch cars")
        setCars(null)
        return  // Abort the function if the request fails.
      }

      if(cars){
        setCars(cars)
        setErrors(null)
        console.log(cars)
      }
    }

    fetchCars()
  }, [])


  return (
    <Box  w={{ base: '100%', md: "100%"}}>
        <Grid  justify="space-around" px={"md"}>
      { errors && <p>{errors}</p>}
       { cars && cars.map((car) => (
         <Grid.Col key={car.id} span={6}>
            <CarCard car={car}/>
         </Grid.Col>
       ))}
       
    </Grid>
    </Box>
  )
}

export default CarList