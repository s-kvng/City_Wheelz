"use client"

import AdminBookingCard from '@/components/cards/AdminBookingCard'
import supabase from '@/config/superBaseClient'
import { Grid , Notification} from '@mantine/core'
import { useState , useEffect} from 'react'

const Bookings = () => {

  const [bookings, setBookings] = useState(null)
  const [ errors, setErrors] = useState(null)
  const [ onSuccess , setOnSuccess] = useState(false)

  useEffect(() => {
    const fetchBookings = async () =>{
      
      let { data, error } = await supabase
      .from('booking')
      .select('*')
        

      if(error) {
        console.error(error)
        setErrors("Could not fetch cars")
        setBookings(null)
        return  // Abort the function if the request fails.
      }

      if(data){
        setBookings(data)
        setErrors(null)
        console.log(data)
      }
    }

    fetchBookings()
  }, [])

  const handleDelete = async  (bookingId) =>{
    // Delete driver logic here
    // Update the state to remove the deleted driver
    try {

       // Call the API to delete the car from the database
      const { error } = await supabase
      .from('booking')
      .delete()
      .eq('id', bookingId)

    // Display a success message or error message based on the API response
    if(!error){
      setOnSuccess(true)
      const updatedBookings = bookings?.filter((b) => b.id!== bookingId)
      setBookings(updatedBookings)
      console.log("Bookings deleted successfully")
    }

    if(error){
      console.error(error)
      setErrors("Could not delete booking")
    }
    } catch (error) {
      console.error(error)
      setErrors("Failed to delete booking")
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
            Booking Sucessfully deleted
          </Notification>
        }
         <Grid  justify="space-around" px={"md"}>
           { bookings && bookings.map((booking) => (
             <Grid.Col key={booking.id} span={6}>
                <AdminBookingCard booking={booking} deleteFn={handleDelete}/>
             </Grid.Col>
            ))}
        </Grid>
    </>
  )
}

export default Bookings