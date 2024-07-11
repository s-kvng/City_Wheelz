"use client"

import { Box, Paper, Stack, Text, TextInput, 
    PaperProps, PasswordInput, Group, Anchor, Button, Checkbox, 
    LoadingOverlay} from '@mantine/core'
import React, { useState } from 'react'
import Link from 'next/link'

import DividerUi from '@/components/ui/DividerUi'
import classes from './Style.module.css'
import { useSignupForm } from '@/hooks/useSignupForm'
import {  signupWithEmailPassword } from '@/services/auth.service'
import { EmailConfirmation } from '@/components/ui/EmailConfirmation'


const Signup = (props : PaperProps) => {
  const [ isSubmitted , setIsSubmitted ] = useState<boolean>(false)
  const [ isSubmitting , setIsSubmitting ] = useState<boolean>(false)

  const signupForm = useSignupForm();

  const handleSignup = async () =>{
    const {email  , password} = signupForm.values

  setIsSubmitting(true)
  try {
    const { error } = await signupWithEmailPassword(email , password)

    if(error){
      console.log(error)
    }else {
      setIsSubmitted(true)
      console.log("Signup successful")
    }
   } catch (error) {
    console.log(error)
   }finally{
    setIsSubmitting(false)
 
   }
  }

  return (
    <>
    {isSubmitted ? <EmailConfirmation email={signupForm.values.email}/> : 
    <>
      <LoadingOverlay visible={isSubmitting} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
      <Box px={"md"} py={"xl"}>
          <Paper className={classes.formPaper} withBorder {...props}>
              <Text size='lg' fw={500}>
                  Welcome back
              </Text>
              <DividerUi label="Or Continue with Email" />

              <form className='mt-4' onSubmit={signupForm.onSubmit(()=> handleSignup())}>
                <Stack>
                  <TextInput 
                    required 
                    label="Email" 
                    placeholder="cargo@gmail.com" 
                    radius={"md"}
                    value= {signupForm.values.email}
                    onChange={(event) => signupForm.setFieldValue('email', event.currentTarget.value)}
                    error={signupForm.errors.email && signupForm.errors.email}
                  />
      
                  <PasswordInput required   
                    label="Password" 
                    placeholder="*********" 
                    radius={"md"}
                    value= {signupForm.values.password}
                    onChange={(event) => signupForm.setFieldValue('password', event.currentTarget.value)}
                    error={signupForm.errors.password && signupForm.errors.password}
                  />

                  <PasswordInput required   
                    label="Confirm Password" 
                    placeholder="*********" 
                    radius={"md"}
                    value= {signupForm.values.confirmPassword}
                    onChange={(event) => signupForm.setFieldValue('confirmPassword', event.currentTarget.value)}
                    error={signupForm.errors.confirmPassword && signupForm.errors.confirmPassword}
                  />

                  <Checkbox label="I accept terms and conditions" 
                  onChange={(event) => signupForm.setFieldValue('terms', event.currentTarget.checked)}
                  checked={signupForm.values.terms}
                  error={signupForm.errors.terms && signupForm.errors.terms}
                  />
                </Stack>

                <Group  justify='space-between' mt="xl">
                  <Anchor
                    component={Link}
                    href={"/login"}
                    type='button'
                    c={"dimmed"}
                    size='xs'
                  >
                    Already have an account ? Login
                  </Anchor>
                  <Button type='submit' radius={"xl"}>
                    Signup
                  </Button>
                </Group>


              </form>
          </Paper>
      </Box>
    </>}
    </>
  )
}

export default Signup