"use client"

import {PaperProps,  Box, Button, Group, LoadingOverlay, Paper, Stack, TextInput, Text } from '@mantine/core'
import  { useState } from 'react'

import classes from './Style.module.css'
import { useCreateCarForm } from '@/hooks/useCreateCarForm'

const Car = (props : PaperProps) => {

    const [ isSubmitted , setIsSubmitted ] = useState<boolean>(false)
    const [ isSubmitting , setIsSubmitting ] = useState<boolean>(false)

    const carForm = useCreateCarForm();

    const handleSignup = async () =>{
      const { make,
        model,
        year,
        description,
        color,
        transmission,
        seatingCapacity,  
    } = carForm.values

    }

  return (
    <>
      <LoadingOverlay visible={isSubmitting} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
      <Box px={"md"} py={"xl"}>
          <Paper className={classes.formPaper}  withBorder {...props}>
              <Text size='lg' fw={500}>
                  Create Car
              </Text>
              

              <form className='mt-4' onSubmit={carForm.onSubmit(()=> handleSignup())}>
                <Stack>
                <TextInput 
                    required 
                    label="Make" 
                    placeholder="John Doe" 
                    radius={"md"}
                    value= {carForm.values.make}
                    onChange={(event) => carForm.setFieldValue('make', event.currentTarget.value)}
                    
                  />

                  <TextInput 
                    required 
                    label="Model" 
                    placeholder="Sudan" 
                    radius={"md"}
                    value= {carForm.values.model}
                    onChange={(event) => carForm.setFieldValue('model', event.currentTarget.value)}
                    
                  />

                  <TextInput 
                    required 
                    label="Year" 
                    placeholder="20**" 
                    radius={"md"}
                    value= {carForm.values.year}
                    onChange={(event) => carForm.setFieldValue('year', event.currentTarget.value)}
                    
                  />

                  <TextInput  
                    label="Description" 
                    placeholder="Anything about the car" 
                    radius={"md"}
                    value= {carForm.values.description}
                    onChange={(event) => carForm.setFieldValue('description', event.currentTarget.value)}
                    
                  />

                  <TextInput 
                    label="Color" 
                    placeholder="Red / Green / Blue" 
                    radius={"md"}
                    value= {carForm.values.color}
                    onChange={(event) => carForm.setFieldValue('color', event.currentTarget.value)}
                    />

                    
                  <TextInput 
                    required 
                    label="Transmission" 
                    placeholder="Automatic / Manual" 
                    radius={"md"}
                    value= {carForm.values.transmission}
                    onChange={(event) => carForm.setFieldValue('transmission', event.currentTarget.value)}
                    
                  />

                  <TextInput 
                    required 
                    label="No. of Seats" 
                    placeholder="5" 
                    radius={"md"}
                    value= {carForm.values.seatingCapacity}
                    onChange={(event) => carForm.setFieldValue('seatingCapacity', event.currentTarget.value)}
                    
                  />

                <TextInput 
                    required 
                    label="Price Per Day" 
                    placeholder="$300" 
                    radius={"md"}
                    value= {carForm.values.pricePerDay}
                    onChange={(event) => carForm.setFieldValue('pricePerDay', event.currentTarget.value)}
                    
                  />

                <TextInput 
                    required 
                    label="Fuel Type" 
                    placeholder="5" 
                    radius={"md"}
                    value= {carForm.values.fuelType}
                    onChange={(event) => carForm.setFieldValue('fuelType', event.currentTarget.value)}
                    
                  />
                  
                </Stack>

                <Group  justify='space-between' mt="xl">
               
                  <Button type='submit' radius={"xl"}>
                    Submit
                  </Button>
                </Group>


              </form>
          </Paper>
      </Box>
    </>
  )
}

export default Car