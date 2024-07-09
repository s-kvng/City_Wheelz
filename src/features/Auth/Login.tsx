"use client"

import { Box, Paper, Stack, Text, TextInput, 
  PaperProps, PasswordInput, Group, Anchor, Button } from '@mantine/core'
import React from 'react'
import Link from 'next/link'

import DividerUi from '@/components/ui/DividerUi'
import classes from './Style.module.css'


const Login = (props : PaperProps) => {
  return (
    <Box>
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
                  label="Password" 
                  placeholder="*********" 
                  radius={"md"}
                />
              </Stack>

              <Group justify='space-between' mt="xl">
                <Anchor
                  component={Link}
                  href={"signup"}
                  type='button'
                  c={"dimmed"}
                  size='xs'
                >
                  Don{`'`}t have an account ? Register
                </Anchor>
                <Button type='submit' radius={"xl"}>
                  Login
                </Button>
              </Group>


            </form>
        </Paper>
    </Box>
  )
}

export default Login