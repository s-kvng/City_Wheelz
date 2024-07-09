import { Divider } from '@mantine/core'
import React, { ReactNode } from 'react'


interface dividerProps{
  label?: ReactNode;
}

const DividerUi = ({ label }) => {
  return (
    <>
        <Divider my="xs" label={label} labelPosition="center" />
    </>
  )
}

export default DividerUi