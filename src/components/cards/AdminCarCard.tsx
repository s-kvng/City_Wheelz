import supabase from '@/config/superBaseClient'
import { ghCurrency } from '@/contants'
import { Card, Flex, Box, Title, Text, Image, Button, Divider } from '@mantine/core'
import {  IconEdit, IconManualGearbox, IconTrash, IconUsers } from '@tabler/icons-react'
import React from 'react'

const AdminCarCard = ({car, deleteFn }) => {


  
  return (
    <Card miw={{ base : '100%', lg:"30%"}}>
        <Flex align="flex-end" justify="space-between">
            <Box>
                <Title order={5}>{ car.model} {car.year}</Title>
                <Text c="gray.6">{car.make}</Text>
            </Box>
        </Flex>
        <Flex align="flex-end" justify="space-between">
            <Image
            miw={{ base : 200 , md : 150}}
            height="120px"
            radius="md"
            my={8}
            src={car.imageSrc}
            alt='Toyota Camry'
            />

            <Box>
              <Box style={{ textAlign: "center"}} my="md">
                rented
                {/* Status renderer */}
              </Box>

              <Box style={{ textAlign: "center" , display: "flex", flexDirection: "column"}} >

              <Button variant='' mb="xs">
                <IconEdit/>
              </Button>
              
              <Button onClick={()=>deleteFn(car.id)} variant='outline' color='red' mb="xs">
                <IconTrash/>
              </Button>
              </Box>
            </Box>
        </Flex>

        <Divider/>
        
        <Flex align="center" justify="space-between">
          <Flex align="center" gap={{ base : 4 , md: 16}}>
            <Flex my={8} align="center" title="seating capacity">
              <IconUsers size="16px" color='gray'/>
              <Text c="gray.6" size='sm' mx={4}>
                {car.seats}
              </Text>
            </Flex>

            <Flex my={8} align="center" title='transmission'>
              <IconManualGearbox size="16px" color='gray'/>
              <Text c="gray.6" size='sm' mx={4}>
                {car.transmission}
              </Text>
            </Flex>
            <Flex>
              {/* <BsFuelPump size="16px" color="gray"/> */}
              <Text c="gray.6" size='sm' mx={4}>
                {car.fuel_type}
              </Text>
            </Flex>
          </Flex>

          <Flex align="flex-end">
            <Text fw="bold" size='lg'>
              { ghCurrency}
              { car.price}
            </Text>
            <Text size='xs'>/day</Text>            
          </Flex>
        </Flex>
    </Card>
  )
}

export default AdminCarCard