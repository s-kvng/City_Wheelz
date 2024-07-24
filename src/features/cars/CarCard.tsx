import { ghCurrency } from '@/contants'
import { Card, Flex, Box, Title, Text, Image, Button, Divider } from '@mantine/core'
import { IconManualGearbox, IconUsers } from '@tabler/icons-react'
import React from 'react'

const CarCard = () => {
  return (
    <Card miw={{ base : '100%', lg:"40%"}}>
        <Flex align="flex-end" justify="space-between">
            <Box>
                <Title order={5}>Toyota Camry 2023</Title>
                <Text c="gray.6">Sedan</Text>
            </Box>
        </Flex>
        <Flex align="flex-end" justify="space-between">
            <Image
            miw={{ base : 200 , md : 250}}
            height="150px"
            radius="md"
            my={8}
            src={"/images/camry.png"}
            alt='Toyota Camry'
            />

            <Box>
              <Box style={{ textAlign: "center"}} my="md">
                rented
                {/* Status renderer */}
              </Box>
              
              <Button variant='gradient' mb="xs">
                Rent Now
              </Button>
            </Box>
        </Flex>

        <Divider/>
        
        <Flex align="center" justify="space-between">
          <Flex align="center" gap={{ base : 4 , md: 16}}>
            <Flex my={8} align="center" title="seating capacity">
              <IconUsers size="16px" color='gray'/>
              <Text c="gray.6" size='sm' mx={4}>
                {5}
              </Text>
            </Flex>

            <Flex my={8} align="center" title='transmission'>
              <IconManualGearbox size="16px" color='gray'/>
              <Text c="gray.6" size='sm' mx={4}>
                {"Automatic"}
              </Text>
            </Flex>
            <Flex>
              {/* <BsFuelPump size="16px" color="gray"/> */}
              <Text c="gray.6" size='sm' mx={4}>
                {"Gasoline"}
              </Text>
            </Flex>
          </Flex>

          <Flex align="flex-end">
            <Text fw="bold" size='lg'>
              { ghCurrency}
              {300}
            </Text>
            <Text size='xs'>/day</Text>            
          </Flex>
        </Flex>
    </Card>
  )
}

export default CarCard