"use client"

import React from 'react'
import { Select } from '@mantine/core';

const SelectCountry = () => {
  return (
   <>
    <Select
        label="Country"
        placeholder="Ghana"
        data={['Ghana', 'USA', 'UK', 'France']}
        searchable
        nothingFoundMessage="Nothing found"
    />
   </>
  )
}

export default SelectCountry