import { Alert, Button, Divider, Flex } from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

const Verified = () => {
  return (
    <Flex mih={"300px"} justify={"center"} align={"center"}>
        <Alert 
            icon={<IconCheck/>}
            title="UserVerified"
            color='green'
            w={{ base : "90%" , md : "60%"}}
        >
            Your Account has been confirmed. You can now login
        </Alert>
        <Divider my="lg"/>
        <Button component={Link} href={"/login"}>
            Login
        </Button>
    </Flex>
  )
}

export default Verified