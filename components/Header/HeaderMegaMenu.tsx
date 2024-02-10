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
  
  const mockdata = [
    {
      icon: IconCode,
      title: 'Open source',
      description: 'This Pokémon’s cry is very loud and distracting',
    },
    {
      icon: IconCoin,
      title: 'Free for everyone',
      description: 'The fluid of Smeargle’s tail secretions changes',
    },
    {
      icon: IconBook,
      title: 'Documentation',
      description: 'Yanma is capable of seeing 360 degrees without',
    },
    {
      icon: IconFingerprint,
      title: 'Security',
      description: 'The shell’s rounded shape and the grooves on its.',
    },
    {
      icon: IconChartPie3,
      title: 'Analytics',
      description: 'This Pokémon uses its flying ability to quickly chase',
    },
    {
      icon: IconNotification,
      title: 'Notifications',
      description: 'Combusken battles with the intensely hot flames it spews',
    },
  ];
  
  export function HeaderMegaMenu() {
    const [drawerOpened,isDrawerOpened] = React.useState(false);
    const toggleDrawer = () => isDrawerOpened(!drawerOpened);
    const closeDrawer = () => isDrawerOpened(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();
  
    const links = mockdata.map((item) => (
      <UnstyledButton className={classes.subLink} key={item.title}>
        <Group wrap="nowrap" align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500}>
              {item.title}
            </Text>
            <Text size="xs" c="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    ));
  
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
            <HoverButton/>
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
            <Collapse in={linksOpened}>{links}</Collapse>
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