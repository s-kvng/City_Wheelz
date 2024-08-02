"use client"

import AdminDriverCard from '@/components/cards/AdminDriverCard'
import supabase from '@/config/superBaseClient'
import { Grid } from '@mantine/core'
import { useState , useEffect} from 'react'

const Drivers = () => {

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
    <>
         <Grid  justify="space-around" px={"md"}>
           { drivers && drivers.map((driver) => (
             <Grid.Col span={6}>
                <AdminDriverCard driver={driver}/>
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