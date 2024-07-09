import { primaryGradient } from '@/contants'
import { Button, Container, Flex } from '@mantine/core'
import React from 'react'

import classes from "./SearchEngine.module.css"
import SelectCountry from '@/components/ui/SelectCountry'
import SelectRegion from '@/components/ui/SelectRegion'
import SelectCarMake from '@/components/ui/SelectCarMake'
import SelectDate from '@/components/ui/SelectDate'

const SearchEngine = () => {
  return (
    <Container className={classes.container}>
        <Flex 
        direction={{ base : "column" , sm : "row"}} 
        justify={"center"} align={{base: "stretch" , sm : "flex-end"}} 
        gap={{ base: "sm", sm: "lg"}}>

        <div>
            <SelectCountry/>
        </div>
        <div>
            <SelectRegion/>
        </div>
        <div>
            <SelectCarMake/>
        </div>
        <div>
            <SelectDate label="Pickup Date"/>
        </div>
        <div>
            <SelectDate label="Return Date"/>
        </div>

        <Button w={100} variant='gradient' gradient={primaryGradient}>
            Search
        </Button>
    </Flex>
    </Container>
  )
}

export default SearchEngine