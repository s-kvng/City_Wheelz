"use client"

import { Box, Paper, Stack, Text, TextInput, 
    PaperProps, PasswordInput, Group, Anchor, Button, Checkbox } from '@mantine/core'
import React from 'react'
import Link from 'next/link'

import DividerUi from '@/components/ui/DividerUi'
import classes from './Style.module.css'
import { useSignupForm } from '@/hooks/useSignupForm'
import {  signupWithEmailPassword } from '@/services/auth.service'


const Signup = (props : PaperProps) => {

  const signupForm = useSignupForm();

  const handleSignup = async () =>{
    const {email  , password} = signupForm.values

    const { error } = await signupWithEmailPassword(email , password)

    if(error){
      console.log(error)
    }else {
      console.log("Signup successful")
    }
  }

  return (
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
  )
}

export default Signup