"use client"

import AdminDriverCard from '@/components/cards/AdminDriverCard'
import supabase from '@/config/superBaseClient'
import { Grid , Notification} from '@mantine/core'
import { useState , useEffect} from 'react'

const Drivers = () => {

  const [drivers, setDrivers] = useState(null)
  const [ errors, setErrors] = useState(null)
  const [ onSuccess , setOnSuccess] = useState(false)

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

  const handleDelete = async  (driverId) =>{
    // Delete driver logic here
    // Update the state to remove the deleted driver
    try {

       // Call the API to delete the car from the database
      const { error } = await supabase
      .from('drivers')
      .delete()
      .eq('id', driverId)

    // Display a success message or error message based on the API response
    if(!error){
      setOnSuccess(true)
      const updatedDrivers = drivers?.filter((d) => d.id!== driverId)
      setDrivers(updatedDrivers)
      console.log("Driver deleted successfully")
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
          Driver Sucessfully deleted
        </Notification>
    }

         <Grid  justify="space-around" px={"md"}>
           { drivers && drivers.map((driver) => (
             <Grid.Col span={6}>
                <AdminDriverCard driver={driver} deleteFn={handleDelete}/>
             </Grid.Col>
            ))}
            {/* <Grid.Col span={6}>
                <AdminDriverCard driver={{}}/>
            </Grid.Col>
            <Grid.Col span={6}>
                <AdminDriverCard driver={{}}/>
            </Grid.Col> */}
        </Grid>
    </>
  )
}

export default Drivers