"use client";
import {
  Text,
  Burger,
  Button,
  Container,
  Divider,
  Drawer,
  Group,
  ScrollArea,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";

export function HeaderMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <Container fluid p={"lg"}>
      <header className={''}>
        <Group justify="space-between" h="100%">
          <Group>

            <Image
              src="/mokko.svg"
              alt="Logo"
              width={54}
              height={54}
              style={{ width: "auto", height: "54px" }}
            />
            <Text c="black" fw={700} fz={"32px"} style={{
              fontFamily: "DM Sans"
            }}>Mokko</Text>
          </Group>

          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="#" className={'font-medium text-[16px] text-[#1A191E] mx-2'}>
              Home
            </a>

            <a href="#" className={'font-medium text-[16px] text-[#1A191E] mx-2'}>
              Services
            </a>
            <a href="#" className={'font-medium text-[16px] text-[#1A191E] mx-2'}>
              About Us
            </a>
            <a href="#" className={'font-medium text-[16px] text-[#1A191E] mx-2'}>
              Sector
            </a>
            <a href="#" className={'font-medium text-[16px] text-[#1A191E] mx-2'}>
              Insights
            </a>
            <a href="#" className={'font-medium text-[16px] text-[#1A191E] mx-2'}>
              Projects
            </a>
            <a href="#" className={'font-medium text-[16px] text-[#1A191E] mx-2'}>
              Contact
            </a>

          </Group>

          <Group visibleFrom="sm">
            <Button color="#FC6111">Get Started</Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
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
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />

          <a href="#" className={""}>
            Home
          </a>

          <a href="#" className={""}>
            Learn
          </a>
          <a href="#" className={""}>
            Academy
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Container>
  );
}
