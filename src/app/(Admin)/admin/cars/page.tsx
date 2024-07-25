"use client"

import AdminCarCard from '@/components/cards/AdminCarCard'
import { Grid } from '@mantine/core'
import React from 'react'

const ManageCarsPage = () => {
  return (
    <>
     <Grid  justify="space-around" px={"md"}>
        <Grid.Col span={6}>
            <AdminCarCard/>
        </Grid.Col>
        <Grid.Col span={6}>
            <AdminCarCard/>
        </Grid.Col>
    </Grid>
        
    </>
  )
}

export default ManageCarsPage