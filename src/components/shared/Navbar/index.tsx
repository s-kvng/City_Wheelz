import { Group, MantineThemeContext } from '@mantine/core'
import React from 'react'

import classes from "./Style.module.css"
import Logo from './Logo'
import AuthButtons from './AuthButtons'
import ThemeSwitcher from './ThemeSwitcher'

const Navbar = () => {
  return (
    <nav  className={`${classes.header}`}>
       <Group justify="space-between" h={"100%"}>
       <div>
            <Logo/>
        </div>
        <div className='flex items-center gap-x-5'>
            <div>
                <ThemeSwitcher/>
            </div>
            <div>
                <AuthButtons/>
            </div>
        </div>
       </Group>
    </nav>
  )
}

export default Navbar