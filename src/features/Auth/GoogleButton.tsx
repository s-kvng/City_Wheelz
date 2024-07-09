import { Button, Group } from '@mantine/core'
import { IconBrandGoogle } from '@tabler/icons-react'
import React from 'react'

const GoogleButton = () => {
  return (
    <Group>
        <Button leftSection={<IconBrandGoogle/>} 
        variant='default'
        color='gray'
        radius={"xl"}
        >
            Google
        </Button>
    </Group>
  )
}

export default GoogleButton