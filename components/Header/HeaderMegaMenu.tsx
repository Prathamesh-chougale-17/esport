"use client"
import {
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
    SimpleGrid,
    ThemeIcon,
    Anchor,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
    rem,
    useMantineTheme,
    Menu,
    Avatar,
  } from '@mantine/core';
//   import { Esport } from '@mantinex/mantine-logo';
import Esport from '@/public/android-chrome-192x192.png'
  import { useDisclosure } from '@mantine/hooks';
  import {
    IconNotification,
    IconCode,
    IconBook,
    IconChartPie3,
    IconFingerprint,
    IconCoin,
    IconChevronDown,
  } from '@tabler/icons-react';
  import classes from './HeaderMegaMenu.module.css';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import HoverButton from '../HoverButton/HoverButton';
import { useSession } from 'next-auth/react';
  export function HeaderMegaMenu() {
    const [drawerOpened,isDrawerOpened] = React.useState(false);
    const toggleDrawer = () => isDrawerOpened(!drawerOpened);
    const closeDrawer = () => isDrawerOpened(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();
    const { status, data: session } = useSession();
    const image = session?.user?.image;
    return (
      <Box pb={10}>
        <header className={classes.header}>
          <Group justify="space-between" h="100%">
            {/* <Esport size={30} /> */}
            <Image src={Esport} height={80} width={80} alt='Esport'/>  
            <Group visibleFrom="sm">
            <Group h="100%" gap={0} visibleFrom="sm">
              <Link href="/" className={classes.link}>
                Home
              </Link>
              <Link href="/aboutus" className={classes.link}>
                About Us
              </Link>
              <Link href="/events" className={classes.link}>
                Events
              </Link>

              <Link href="/create" className={classes.link}>
                Create Tournament
              </Link>
              {/* write code for stylish background in classname */}


            </Group>
            {status === 'authenticated'?  <Menu>
                <Menu.Target>
                  <Avatar src={image} className={classes.Avatar} />
                </Menu.Target>
                <Menu.Dropdown>
                  <Link href="/api/auth/signout">
                    <Button>Sign out</Button>
                  </Link>
                </Menu.Dropdown>
              </Menu>:<HoverButton/>}
            {/* <HoverButton/> */}
            </Group>
  
            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm"  />
          </Group>
        </header>
  
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Navigation"
          hiddenFrom="sm"
          zIndex={1000000}
          className='bg-black'
        >
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Divider my="sm" />
  
            <Link href="#" className={classes.link}>
              Home
            </Link>
            <UnstyledButton className={classes.link} onClick={toggleLinks}>
              <Center inline>
                <Box component="span" mr={5}>
                  Features
                </Box>
                <IconChevronDown
                  style={{ width: rem(16), height: rem(16) }}
                  color={theme.colors.blue[6]}
                />
              </Center>
            </UnstyledButton>
            {/* <Collapse in={linksOpened}>{links}</Collapse> */}
            <Link href="#" className={classes.link}>
              About Us
            </Link>
            <Link href="#" className={classes.link}>
              Events
            </Link>
            <Link href="#" className={classes.link}>
              Create Tournament
            </Link>
  
            <Divider my="sm" />
  
            <Group justify="center" grow pb="xl" px="md">
              <Button variant="default">Log in</Button>
              <Button className='bg-blue-500'>Sign up</Button>
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
    );
  }