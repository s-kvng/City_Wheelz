"use client"

import React from 'react'
import { Select } from '@mantine/core';

const SelectCarMake = () => {
  return (
   <>
    <Select
        label="Car Make"
        placeholder="All"
        data={['Toyota', 'Range Rover', 'BMW']}
        searchable
        nothingFoundMessage="Nothing found"
    />
   </>
  )
}

export default SelectCarMake