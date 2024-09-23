import { primaryGradient } from '@/contants'
import { Text } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Text href={"/"} fz={"lg"} variant='gradient' gradient={primaryGradient} fw={"bold"} component={Link}>City Wheelz</Text>
  )
}

export default Logo