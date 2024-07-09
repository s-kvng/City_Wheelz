"use client"

import React from 'react'
import { Select } from '@mantine/core';

const SelectRegion = () => {
  return (
   <>
    <Select
        label="Region"
        placeholder="Eastern"
        data={['Eastern', 'Ashanti', 'Central']}
        searchable
        nothingFoundMessage="Nothing found"
    />
   </>
  )
}

export default SelectRegion