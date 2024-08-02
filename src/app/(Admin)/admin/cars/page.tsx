"use client"

import AdminCarCard from '@/components/cards/AdminCarCard'
import { Grid } from '@mantine/core'
import { useState ,useEffect} from 'react'

import supabase from "@/config/superBaseClient"

const ManageCarsPage = () => {

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
    <>
     <Grid  justify="space-around" px={"md"}>
      { errors && <p>{errors}</p>}
       { cars && cars.map((car) => (
         <Grid.Col key={car.id} span={6}>
            <AdminCarCard car={car}/>
         </Grid.Col>
       ))}
       
    </Grid>
        
    </>
  )
}

export default ManageCarsPage