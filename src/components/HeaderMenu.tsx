"use client";
import {
  Box,
  Burger,
  Button,
  Divider,
  Drawer,
  Group,
  ScrollArea,
  Text
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function HeaderMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <Box  p={"lg"}>
      <header className={''}>
        <Group justify="space-between" h="100%">
          <Link href="/" >
            <Group>

              <Image
                src="/logo.svg"
                alt="Logo"
                width={54}
                height={54}
                style={{ width: "auto", height: "28px" }}
              />
              {/* <Text c="white" fw={700} fz={"32px"} style={{
              }}>UrbanSkoon</Text> */}
            </Group>
          </Link>

          <Group h="100%" gap={0} visibleFrom="sm">


            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium text-[16px] ${pathname === link.href ? "text-[#ffffff]" : "text-[#ffffff]"
                  }  mx-2 px-3 py-2 rounded transition-colors`}
                style={{
                  // background: pathname === link.href ? "#F8F8F8" : undefined,
                }}
              >
                {link.label}
              </a>
            ))}

          </Group>

          <Group visibleFrom="sm">
            <Button size="md" color="white" c={"black"}>Book</Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
            color="white"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title={<Link href="/" 
        onClick={closeDrawer}>
          <Group>
            <Image
              src="/logo_black.svg"
              alt="Logo"
              width={54}
              height={54}
              style={{ width: "auto", height: "28px" }}
            />
              {/* <Text c="black" fw={700} fz={"32px"} style={{
              }}>UrbanSkoon</Text> */}
          </Group>
        </Link>}
        hiddenFrom="sm"
      >
        <ScrollArea h="calc(100vh - 80px)" mx="-md">
          <Divider my="0" />
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeDrawer}
              className={`block font-medium text-[16px] text-[#1A191E] px-4 py-3 rounded transition-colors `}
             
            >
              {link.label}
            </a>
          ))}

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button size="md" color="white" variant="default" c={"black"}>Book</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}

export default HeaderMenu;