"use client"

import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { IconCar } from '@tabler/icons-react';
import React from 'react'

const DashboardCard = () => {
  return (
    <>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
       

        <Group justify="space-between" mt="md" mb="xs">
            <Text size='1.5rem' fw={500}>Cars In Stock</Text>
            <Badge color="pink"><IconCar size={"1rem"} stroke={1.5}/></Badge>
        </Group>

        <div className=' text-center'>
            <Text fw={"700"} size="2rem" c="dimmed">
                40
            </Text>
        </div>

    </Card>

    </>
  )
}

export default DashboardCard