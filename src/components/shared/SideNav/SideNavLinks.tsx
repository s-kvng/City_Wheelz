import { usePathname } from 'next/navigation'
import { Group , NavLink, Text} from '@mantine/core'
import { IconChevronRight, IconGauge } from '@tabler/icons-react'
import React from 'react'

const SideNavLinks = ({label, href , icon }) => {
    const pathname = usePathname()
  return (
   <>
    <NavLink
    mb={"1.5rem"}
        href={href}
        label={label}
        leftSection={icon}
        rightSection={
          <IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />
        }
        active={ pathname === href}
        variant='filled'
      />
   </>
  )
}

export default SideNavLinks