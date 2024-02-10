import { Button, Menu, rem } from '@mantine/core';
import { IconBuilding, IconShirtSport } from '@tabler/icons-react';

const HoverButton = ()=> {
  return (
    <Menu trigger="click-hover" openDelay={100} closeDelay={400}>
      <Menu.Target>
        <Button>Login / Signup</Button>
      </Menu.Target>

      <Menu.Dropdown>
        {/* <Menu.Label>Application</Menu.Label> */}
        <Menu.Item leftSection={<IconShirtSport style={{ width: rem(14), height: rem(14) }} />}>
          Player
        </Menu.Item>
        <Menu.Item leftSection={<IconBuilding style={{ width: rem(14), height: rem(14) }} />}>
          Organisation
        </Menu.Item>
        </Menu.Dropdown>
    </Menu>
  );
}

export default HoverButton;