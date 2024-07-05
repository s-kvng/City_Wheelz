import { primaryGradient } from '@/contants'
import { Button, Group } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

const AuthButtons = () => {
  return (
    <Group>
        <Button variant="default" component={Link} href={"/login"}>Login</Button>
        <Button variant="gradient" gradient={primaryGradient} 
        component={Link} href="/signup">
            Signup
        </Button>
    </Group>
  )
}

export default AuthButtons