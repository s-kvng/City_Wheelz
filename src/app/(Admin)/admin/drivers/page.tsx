"use client"

import AdminDriverCard from '@/components/cards/AdminDriverCard'
import { Grid } from '@mantine/core'
import React from 'react'

const Drivers = () => {
  return (
    <>
         <Grid  justify="space-around" px={"md"}>
            <Grid.Col span={6}>
                <AdminDriverCard/>
            </Grid.Col>
            <Grid.Col span={6}>
                <AdminDriverCard/>
            </Grid.Col>
        </Grid>
    </>
  )
}

export default Drivers