"use client"

import AdminCarCard from '@/components/cards/AdminCarCard'
import { Grid , Notification } from '@mantine/core'
import { useState ,useEffect} from 'react'

import supabase from "@/config/superBaseClient"

const ManageCarsPage = () => {

  const [cars, setCars] = useState(null)
  const [ errors, setErrors] = useState(null)
  const [ onSuccess , setOnSuccess] = useState(false)

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

  const handleDelete = async  (carId) =>{
    // Delete car logic here
    // Update the state to remove the deleted car
    try {

       // Call the API to delete the car from the database
      const { error } = await supabase
      .from('cars')
      .delete()
      .eq('id', carId)

    // Display a success message or error message based on the API response
    if(!error){
      setOnSuccess(true)
      const updatedCars = cars?.filter((c) => c.id!== carId)
      setCars(updatedCars)
      console.log("Car deleted successfully")
    }

    if(error){
      console.error(error)
      setErrors("Could not delete car")
    }
    } catch (error) {
      console.error(error)
      setErrors("Failed to delete car")
    }finally {
      setErrors(null)
    }
   
  }

  const onCloseNotification = () =>{
    setOnSuccess(false)
    setErrors(null)
  }

  return (
    <>
     { onSuccess && 
        <Notification onClose={onCloseNotification} withBorder title="Success">
          Car Sucessfully deleted
        </Notification>
    }
     <Grid  justify="space-around" px={"md"}>

      { errors && <p>{errors}</p>}
       { cars && cars.map((car) => (
         <Grid.Col key={car.id} span={6}>
            <AdminCarCard car={car} deleteFn={handleDelete}/>
         </Grid.Col>
       ))}
       
    </Grid>
        
    </>
  )
}

export default ManageCarsPage