"use client"

import { primaryGradient } from '@/contants'
import { Button, Group } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const excludedPaths = [ "/login", "/signup"];

const AuthButtons = () => {
  const pathname = usePathname();
  const smallScreen = useMediaQuery('(max-width: 991px)')
  return (
    <>
      {
        !excludedPaths.includes(pathname) && (
        <Group grow={smallScreen}>
          <Button variant="default" component={Link} href={"/login"}>Login</Button>
          <Button variant="gradient" gradient={primaryGradient} 
          component={Link} href="/signup">
              Signup
          </Button>
      </Group>
        )
      }
    </>
  )
}

export default AuthButtons