"use client"

import React from 'react'
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, Burger, Box, Center } from '@mantine/core';
import AuthButtons from './AuthButtons';
import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';


const NavigationMobile = () => {
    const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Drawer size={"xs"} opened={opened} onClose={close} title={<Logo/>} transitionProps={{
        transition: 'slide-right'
      }}>
        {/* Drawer content */}
        <AuthButtons/>

        <Center hiddenFrom='sm' pos={"fixed"} bottom={0} w={"90%"} py={8}>
          <ThemeSwitcher/>
        </Center>
      </Drawer>

     
      <Burger opened={opened} onClick={open} aria-label="Toggle navigation" />

    </>
  )
}

export default NavigationMobile