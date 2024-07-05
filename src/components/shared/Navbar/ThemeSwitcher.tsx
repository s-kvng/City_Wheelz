"use client"


import { Center, SegmentedControl, useMantineColorScheme } from '@mantine/core'
import React from 'react'
import { IconSun , IconMoon } from '@tabler/icons-react'


const ThemeSwitcher = () => {
    const {colorScheme , setColorScheme } = useMantineColorScheme()

  return (
    <SegmentedControl
    value={colorScheme}
    onChange={(value)=> setColorScheme(value as any)}
     data={[{value : "light" , label : <Center> <IconSun size={"1rem"}  stroke={1.5}/> </Center>},
         { value : "dark" , label: <Center> <IconMoon size={"1rem"}  stroke={1.5}/> </Center> }]} />
  )
}

export default ThemeSwitcher