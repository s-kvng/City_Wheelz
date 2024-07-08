import { Group, MantineThemeContext,Box } from '@mantine/core'
import React from 'react'

import classes from "./Style.module.css"
import Logo from './Logo'
import AuthButtons from './AuthButtons'
import ThemeSwitcher from './ThemeSwitcher'
import NavigationMobile from './NavigationMobile'

const Navbar = () => {
  return (
    <nav  className={`${classes.header}`}>
       <Group justify="space-between" h={"100%"}>
       <div>
            <Logo/>
        </div>
        <div className='flex items-center gap-x-5'>
            <Box visibleFrom='sm'>
                <ThemeSwitcher/>
            </Box>
            <Box visibleFrom='md'>
                <AuthButtons/>
            </Box>
        </div>

        <Box hiddenFrom='md'>
        <NavigationMobile/>
        </Box>
       </Group>
    </nav>
  )
}

export default Navbar