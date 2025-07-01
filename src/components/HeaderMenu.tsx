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
import Link from "next/link";
import { usePathname } from "next/navigation";

export function HeaderMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/our_services", label: "Services" },
    { href: "/about_us", label: "About Us" },
    // { href: "#", label: "Sector" },
    // { href: "#", label: "Insights" },
    // { href: "#", label: "Projects" },
    { href: "/contacts", label: "Contact" },
  ];
  return (
    <Container fluid p={"lg"}>
      <header className={''}>
        <Group justify="space-between" h="100%">
          <Link href="/" >
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
          </Link>

          <Group h="100%" gap={0} visibleFrom="sm">


            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium text-[16px] text-[#1A191E] mx-2 px-3 py-2 rounded transition-colors ${pathname === link.href ? "bg-[#F8F8F8]" : ""
                  }`}
                style={{
                  background: pathname === link.href ? "#F8F8F8" : undefined,
                }}
              >
                {link.label}
              </Link>
            ))}

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
        title={<Link href="/" >
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
        </Link>}
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px)" mx="-md">
          <Divider my="0" />
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`block font-medium text-[16px] text-[#1A191E] px-4 py-3 rounded transition-colors ${
                pathname === link.href ? "bg-[#F8F8F8]" : ""
              }`}
              style={{
                background: pathname === link.href ? "#F8F8F8" : undefined,
              }}
            >
              {link.label}
            </a>
          ))}

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button color="#FC6111">Get Started</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Container>
  );
}

export default HeaderMenu;