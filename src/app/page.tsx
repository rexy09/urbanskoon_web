import Image from "next/image";
import { HeaderMenu } from "./components/HeaderMenu";
import {
  Button,
  Container,
  Group,
  Text,
  SimpleGrid,
  Space,
} from "@mantine/core";

export default function Home() {
  return (
    <>
      <HeaderMenu />

      <Container size="80%">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Text
              c="black"
              fw={700}
              fz={"64px"}
              style={{
                fontFamily: "Satoshi",
              }}
            >
              Engineering
            </Text>
            <Text
              c="black"
              fw={700}
              fz={"64px"}
              style={{
                fontFamily: "Satoshi",
              }}
            >
              Excellence for
            </Text>
            <Text
              c="#FC6111"
              fw={700}
              fz={"64px"}
              style={{
                fontFamily: "Satoshi",
              }}
            >
              Energy Infrastructure
            </Text>

            <Text c="#1A191E" mt="md" fz={"24px"} fw={500} maw={691}>
              MOKKO delivers world-class consulting and advisory services for
              energy, oil & gas, and infrastructure projects across Africa and
              beyond.
            </Text>
            <Space h="xl" />
            <SimpleGrid cols={2}>
              <Group>
                <Image
                  src="/icons/badge.svg"
                  alt="Icon"
                  width={26}
                  height={26}
                />
                <Text fz={"18px"} fw={500}>
                  20+ Years of Engineering Excellence
                </Text>
              </Group>
              <Group>
                <Image
                  src="/icons/badge.svg"
                  alt="Icon"
                  width={26}
                  height={26}
                />
                <Text fz={"18px"} fw={500}>
                  Multi-Disciplinary Expert Team
                </Text>
              </Group>
              <Group>
                <Image
                  src="/icons/badge.svg"
                  alt="Icon"
                  width={26}
                  height={26}
                />
                <Text fz={"18px"} fw={500}>
                  Proven Track Record Across Africa
                </Text>
              </Group>
              <Group>
                <Image
                  src="/icons/badge.svg"
                  alt="Icon"
                  width={26}
                  height={26}
                />
                <Text fz={"18px"} fw={500}>
                  Cutting-Edge Technology Solutions
                </Text>
              </Group>
            </SimpleGrid>

            <Group mt={30}>
              <Button color="#FC6111">Explore our Services</Button>
              <Button color="#FC6111" variant="subtle" c="#090909" rightSection={
                <Image
                  src="/icons/arrow_right.svg"
                  alt="Icon"
                  width={24}
                  height={24}
                />
                
              }>Start your Project </Button>
            </Group>
          </div>
          <div>
            <Image
              src="/images/image_1.png"
              alt="Image"
              width={638}
              height={638}
              style={{ width: "auto", height: "638.13px" }}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
