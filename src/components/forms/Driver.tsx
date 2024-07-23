"use client"

import {PaperProps,  Box, Button, Group, LoadingOverlay, Paper, Stack, TextInput, Text } from '@mantine/core'
import  { useState } from 'react'

import { useCreateDriverForm } from '@/hooks/useCreateDriverForm'
import classes from './Style.module.css'

const Driver = (props : PaperProps) => {

    const [ isSubmitted , setIsSubmitted ] = useState<boolean>(false)
    const [ isSubmitting , setIsSubmitting ] = useState<boolean>(false)

    const driverForm = useCreateDriverForm();

    const handleSignup = async () =>{
      const {email  } = driverForm.values
    }

  return (
    <>
      <LoadingOverlay visible={isSubmitting} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
      <Box px={"md"} py={"xl"}>
          <Paper className={classes.formPaper}  withBorder {...props}>
              <Text size='lg' fw={500}>
                  Create Driver
              </Text>
              

              <form className='mt-4' onSubmit={driverForm.onSubmit(()=> handleSignup())}>
                <Stack>
                <TextInput 
                    required 
                    label="First Name" 
                    placeholder="John Doe" 
                    radius={"md"}
                    value= {driverForm.values.firstname}
                    onChange={(event) => driverForm.setFieldValue('firstname', event.currentTarget.value)}
                    
                  />

                  <TextInput 
                    required 
                    label="Last Name" 
                    placeholder="Doe" 
                    radius={"md"}
                    value= {driverForm.values.lastname}
                    onChange={(event) => driverForm.setFieldValue('lastname', event.currentTarget.value)}
                    
                  />

                  <TextInput 
                    required 
                    label="Address" 
                    placeholder="EN-111-***" 
                    radius={"md"}
                    value= {driverForm.values.address}
                    onChange={(event) => driverForm.setFieldValue('address', event.currentTarget.value)}
                    
                  />

                  <TextInput 
                    required 
                    label="License Number" 
                    placeholder="******" 
                    radius={"md"}
                    value= {driverForm.values.licenseNumber}
                    onChange={(event) => driverForm.setFieldValue('licenseNumber', event.currentTarget.value)}
                    
                  />

                  <TextInput 
                    required 
                    label="Phone Number" 
                    placeholder="+1 123 456 7890" 
                    radius={"md"}
                    value= {driverForm.values.phone}
                    onChange={(event) => driverForm.setFieldValue('phone', event.currentTarget.value)}
                    />

                    
                  <TextInput 
                    required 
                    label="Email" 
                    placeholder="cargo@gmail.com" 
                    radius={"md"}
                    value= {driverForm.values.email}
                    onChange={(event) => driverForm.setFieldValue('email', event.currentTarget.value)}
                    error={driverForm.errors.email && driverForm.errors.email }
                  />

                  <TextInput 
                    required 
                    label="Ghana Card No." 
                    placeholder="GHA-**********" 
                    radius={"md"}
                    value= {driverForm.values.ghanaCard}
                    onChange={(event) => driverForm.setFieldValue('ghanaCard', event.currentTarget.value)}
                    
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

export default Driver