"use client"

import AdminBookingCard from '@/components/cards/AdminBookingCard'
import supabase from '@/config/superBaseClient'
import { Grid } from '@mantine/core'
import { useState , useEffect} from 'react'

const Bookings = () => {

  const [bookings, setBookings] = useState(null)
  const [ errors, setErrors] = useState(null)

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
  return (
    <>
         <Grid  justify="space-around" px={"md"}>
           { bookings && bookings.map((booking) => (
             <Grid.Col key={booking.id} span={6}>
                <AdminBookingCard booking={booking}/>
             </Grid.Col>
            ))}
        </Grid>
    </>
  )
}

export default Bookings