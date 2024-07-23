import React from 'react'
import { Box , Card, Container, Divider, Flex, Title } from '@mantine/core';
import classes from './Style.module.css'
import SearchEngine from '@/components/shared/SearchEngine';
import CarList from './CarList';

const CarsLayout = () => {
  return (
    <Container className={ classes.parentContainer} size={"xl"} my={"sm"} py="md">
        <SearchEngine/>
        {/* Search engine */}

        <Flex direction={{ base : 'column' , md: 'row'}} className={classes.container}>
            {/* Filters */}

            <Card w={{ base : '100%', md: '350px'}}>

                <Flex align={"center"} justify={"space-between"}>
                    <Title order={4}>Filters</Title>
                    <Box display={{ base: "none", md: 'inline-block'}}>
                        Reset Filters Button
                    </Box>
                </Flex>
                <Box display={{ base: 'none', md: 'block'}}>
                    Filter Components
                </Box>
            </Card>
            <CarList/>
        </Flex>
    </Container>
  )
}

export default CarsLayout