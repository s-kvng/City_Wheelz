"use client"

import DashboardCard from '@/components/cards/DashboardCard'
import DividerUi from '@/components/ui/DividerUi'
import { Divider, Grid, Text } from '@mantine/core'
import React from 'react'


const list = [
    {
        title: 'Cars In Stock',
        value: 40,
        icon: 'LineChartIcon',
        color: 'primary',
    }
]

const Dashboard = () => {
  return (
    <>
        <Text mb={"1rem"} size='lg' fw={500}>
            Welcome Admin
        </Text>

        <DividerUi  label="Display Data"/>

        <Grid  justify="space-around" px={"md"}>
        <Grid.Col span={6}>
            <DashboardCard/>
        </Grid.Col>

        <Grid.Col span={6}>
            <DashboardCard/>
        </Grid.Col>

        <Grid.Col span={6}>
            <DashboardCard/>
        </Grid.Col>

        <Grid.Col span={6}>
            <DashboardCard/>
        </Grid.Col>

    </Grid>
    </>
  )
}

export default Dashboard