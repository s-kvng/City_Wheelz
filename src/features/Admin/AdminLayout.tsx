"use client"

import SideNavLinks from '@/components/shared/SideNav/SideNavLinks';
import { AppShell, Burger, Group, Skeleton, Text } from '@mantine/core';
import { IconGauge, IconSettingsCheck, IconUsersPlus, 
    IconUsersGroup, IconCar, IconCarGarage, IconClipboardList } from '@tabler/icons-react';
// import { useDisclosure } from '@mantine/hooks';
// import { MantineLogo } from '@mantinex/mantine-logo';


const links = [
    {
        label: 'Dashboard',
        href: '/admin/dashboard',
        icon: <IconGauge size="1rem" stroke={1.5} />,
        exact: true,
      },
    {
        label: 'New Driver',
        href: '/admin/add/driver',
        icon: <IconUsersPlus size="1rem" stroke={1.5}/>,
        exact: false,
      },
      {
        label: 'Manage Drivers',
        href: '/admin/drivers',
        icon: <IconUsersGroup size="1rem" stroke={1.5}/>,
        exact: false,
      },
      {
        label: 'Add Car',
        href: '/admin/add/car',
        icon: <IconCar size={"1rem"} stroke={1.5} />,
        exact: false,
      },
      {
        label: 'Manage Cars',
        href: '/admin/cars',
        icon: <IconCarGarage size={"1rem"} stroke={1.5} />,
        exact: false,
      },
      {
        label: 'Bookings',
        href: '/admin/bookings',
        icon: <IconClipboardList size={"1rem"} stroke={1.5} /> ,
        exact: false,
      },
      {
        label: 'Settings',
        href: '/admin/settings',
        icon: <IconSettingsCheck  size={"1rem"} stroke={1.5}/>,
        exact: false,
      }
    
]



export function AdminLayout({ children}) {
//   const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: false } }}
      aside={{ width: 300, breakpoint: 'md', collapsed: { desktop: false, mobile: true } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          {/* <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" /> */}
          city wheelz
          {/* <MantineLogo size={30} /> */}
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Group mb={"3rem"}>
          {/* <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" /> */}
          <Text>Navbar</Text>
        </Group>
          {
            links.map((link, index)=>(
               <div key={index}>
                 <SideNavLinks href={link.href} label={link.label} icon={link.icon}/>
               </div>
            ))
          }
      </AppShell.Navbar>
      <AppShell.Main>
        { children}
      </AppShell.Main>
      <AppShell.Aside p="md">Aside</AppShell.Aside>
      <AppShell.Footer p="md">Footer</AppShell.Footer>
    </AppShell>
  );
}