import React from 'react'
import Slider from './Slider'
import { Box, Center, Container } from '@mantine/core'
import SearchEngine from '@/components/shared/SearchEngine'
import classes from './Style.module.css'

const Hero = () => {
  return (
    <Box className={classes.box} pos={"relative"} h={450} >
        <Slider/>

        {/* <Center w={"100%"} pb="4rem" pos={"absolute"} bottom={{ base : -150 , sm: 0}} >
            <SearchEngine/>
        </Center> */}
    </Box>
  )
}

export default Hero