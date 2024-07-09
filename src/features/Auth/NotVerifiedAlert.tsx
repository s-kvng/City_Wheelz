import { Alert } from '@mantine/core'
import { IconAlertCircle } from '@tabler/icons-react'
import React from 'react'

const NotVerifiedAlert = () => {
  return (
    <Alert 
    icon={<IconAlertCircle/>}
    title="User Account Not Confirmed"
    color='orange'
    my={"sm"}
    w={{ base : "90%" , md : "60%"}}
>
    Sorry! We are unable to log you in. 
    Please check if your account is confirmed and try again
</Alert>
  )
}

export default NotVerifiedAlert