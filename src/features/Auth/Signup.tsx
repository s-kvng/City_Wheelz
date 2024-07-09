"use client"

import { Box, Paper, Stack, Text, TextInput, 
    PaperProps, PasswordInput, Group, Anchor, Button, Checkbox } from '@mantine/core'
import React from 'react'
import Link from 'next/link'

import DividerUi from '@/components/ui/DividerUi'
import classes from './Style.module.css'


const Signup = (props : PaperProps) => {
  return (
    <Box px={"md"} py={"xl"}>
        <Paper className={classes.formPaper} withBorder {...props}>
            <Text size='lg' fw={500}>
                Welcome back
            </Text>
            <DividerUi label="Or Continue with Email" />

            <form className='mt-4'>
              <Stack>
                <TextInput 
                  required 
                  label="Email" 
                  placeholder="cargo@gmail.com" 
                  radius={"md"}
                />
                <PasswordInput required   
                  label="Confirm Password" 
                  placeholder="*********" 
                  radius={"md"}
                />

                <PasswordInput required   
                  label="Password" 
                  placeholder="*********" 
                  radius={"md"}
                />

                <Checkbox label="I accept terms and conditions"/>
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