"use client";
import Image from "next/image";
import {
  Button,
  Container,
  Group,
  Text,
  SimpleGrid,
  Space,
  Center,
  Card,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import ReadyToStart from "@/components/ReadyToStart";

export default function Home() {
  const matches = useMediaQuery("(min-width: 2560px)");
  const matches2 = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      <Container size={matches ? "60%" : "xl"} mt={matches ? "100px" : "50px"}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <Text
              c="black"
              fw={700}
            fz={matches2?"64px":"48px"}
              style={{
                fontFamily: "Satoshi",
              }}
            >
              Engineering
            </Text>
            <Text
              c="black"
              fw={700}
              fz={matches2?"64px":"48px"}
              style={{
                fontFamily: "Satoshi",
              }}
            >
              Excellence for
            </Text>
            <Text
              c="#FC6111"
              fw={700}
              fz={matches2?"64px":"48px"}
              style={{
                fontFamily: "Satoshi",
              }}
            >
              Energy Infrastructure
            </Text>

            <Text c="#1A191E" mt="md" fz={matches2?"24px":"18px"} fw={500} maw={691}>
              MOKKO delivers world-class consulting and advisory services for
              energy, oil & gas, and infrastructure projects across Africa and
              beyond.
            </Text>
            <Space h="xl" />
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
              {[
                "20+ Years of Engineering Excellence",
                "Multi-Disciplinary Expert Team",
                "Proven Track Record Across Africa",
                "Cutting-Edge Technology Solutions",
              ].map((text) => (
                <Group wrap="nowrap" key={text}>
                  <Image
                    src="/icons/badge.svg"
                    alt="Icon"
                    width={26}
                    height={26}
                  />
                  <Text fz={matches2?"18px":"14px"} fw={500}>
                    {text}
                  </Text>
                </Group>
              ))}
            </SimpleGrid>

            <Group mt={30}>
              <Button color="#FC6111">Explore our Services</Button>
              <Button
                color="#FC6111"
                variant="subtle"
                c="#090909"
                rightSection={
                  <Image
                    src="/icons/arrow_right.svg"
                    alt="Icon"
                    width={24}
                    height={24}
                  />
                }
              >
                Start your Project{" "}
              </Button>
            </Group>
          </div>
          <div>
            <Center>
              <Image
                src="/images/image_1.png"
                alt="Image"
                width={638}
                height={638}
                style={{ width: "auto", height: "638.13px" }}
              />
            </Center>
          </div>
        </div>
        <Space h={"100px"} />
        <Text ta={"center"} fw={500} fz={18} c={"#535862"}>
          We’ve worked with some great startups
        </Text>
        <Space h={"lg"} />

        <Group justify="center">
          {Array.from({ length: 10 }).map((_, idx) => (
            <Image
              key={idx}
              src={`/company/company${idx + 1}.png`}
              alt="Icon"
              width={26}
              height={26}
              style={{ width: "auto", height: "56px" }}
            />
          ))}
        </Group>
        <Space h={"100px"} />
        <Text ta={"center"} fw={600} fz={42}>
          Your Trusted Engineering Partner
        </Text>
        <Space h={"100px"} />
        <Center>
          <Text ta={"center"} fw={400} fz={23} c={"#535862"} maw={850}>
            We offer our clients consulting, advisory, and specialized
            engineering services with a focus on energy infrastructure, oil &
            gas facilities, and industrial projects.
          </Text>
        </Center>
        <Space h={"100px"} />

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
          <div>
            <Center>
              <div className="rounded-[11px] border border-[#E9EAEB] p-2.5 w-[56px]">
                <Center>
                  <Image
                    src="/icons/gg_check-o.svg"
                    alt="Engineering Icon"
                    width={24}
                    height={24}
                  />
                </Center>
              </div>
            </Center>
            <Text fz={23} fw={600} mt="md" ta={"center"}>
              Proven Expertise
            </Text>
            <Center>
              <Text fz={18} c="#535862" mt="sm" ta={"center"} maw={400}>
                Over two decades of engineering excellence across complex
                infrastructure projects.
              </Text>
            </Center>
          </div>

          <div>
            <Center>
              <div className="rounded-[11px] border border-[#E9EAEB] p-2.5 w-[56px]">
                <Center>
                  <Image
                    src="/icons/zap.svg"
                    alt="Engineering Icon"
                    width={24}
                    height={24}
                  />
                </Center>
              </div>
            </Center>
            <Text fz={23} fw={600} mt="md" ta={"center"}>
              Comprehensive Solutions
            </Text>
            <Center>
              <Text fz={18} c="#535862" mt="sm" ta={"center"} maw={400}>
                From concept to completion, we provide end-to-end engineering
                consulting services.
              </Text>
            </Center>
          </div>
          <div>
            <Center>
              <div className="rounded-[11px] border border-[#E9EAEB] p-2.5 w-[56px]">
                <Center>
                  <Image
                    src="/icons/chart-breakout-square.svg"
                    alt="Engineering Icon"
                    width={24}
                    height={24}
                  />
                </Center>
              </div>
            </Center>
            <Text fz={23} fw={600} mt="md" ta={"center"}>
              Innovation Driven
            </Text>
            <Center>
              <Text fz={18} c="#535862" mt="sm" ta={"center"} maw={400}>
                Leveraging cutting-edge technology and industry best practices
                for optimal results.
              </Text>
            </Center>
          </div>
        </SimpleGrid>
        <Space h={"100px"} />
      </Container>
      <Container size="lg">
        <Text ta={"center"} fw={600} fz={42}>
          Industries We Serve
        </Text>
        {/* <Space h={"md"} /> */}
        <Center>
          <Text ta={"center"} fw={400} fz={23} c={"#535862"} maw={850}>
            Our expertise spans across critical energy and infrastructure
            sectors, delivering specialized solutions for each industry&apos;s
            unique challenges.
          </Text>
        </Center>
        <Space h={"100px"} />
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          <Card
            shadow="sm"
            padding="lg"
            radius="24px"
            style={{ border: "0.5px solid #090909" }}
          >
            <Group wrap="nowrap">
              <div
                style={{
                  borderRadius: "50%",
                  padding: "16px",
                  backgroundColor: "#FC611138",
                }}
              >
                <Image
                  src="/icons/tdesign_secured-filled.svg"
                  alt="secured"
                  width={42.39}
                  height={42.39}
                />
              </div>
              <div>
                <Group wrap="nowrap" justify="space-between">
                  <Text fz={19} fw={700} c="#090909">
                    Oil & Gas
                  </Text>
                  <div
                    style={{
                      borderRadius: "10px",
                      padding: "5px",
                      backgroundColor: "#FC611138",
                    }}
                  >
                    <Text fz={14} fw={700} c="#090909">
                      150+ Projects
                    </Text>
                  </div>
                </Group>

                <Text fz={19} fw={400} c="#4A4A4C" mt="sm">
                  Upstream, midstream, and downstream operations including
                  refineries, processing plants, and distribution systems.
                </Text>
              </div>
            </Group>
          </Card>
          <Card
            shadow="sm"
            padding="lg"
            radius="24px"
            style={{ border: "0.5px solid #090909" }}
          >
            <Group wrap="nowrap">
              <div
                style={{
                  borderRadius: "50%",
                  padding: "16px",
                  backgroundColor: "#FC611138",
                }}
              >
                <Image
                  src="/icons/tdesign_secured-filled.svg"
                  alt="secured"
                  width={42.39}
                  height={42.39}
                />
              </div>
              <div>
                <Group wrap="nowrap" justify="space-between">
                  <Text fz={19} fw={700} c="#090909">
                    Pipeline Infrastructure
                  </Text>
                  <div
                    style={{
                      borderRadius: "10px",
                      padding: "5px",
                      backgroundColor: "#FC611138",
                    }}
                  >
                    <Text fz={14} fw={700} c="#090909">
                      200+ Miles
                    </Text>
                  </div>
                </Group>

                <Text fz={19} fw={400} c="#4A4A4C" mt="sm">
                  Design and implementation of oil, gas, and water pipeline
                  systems with advanced monitoring and control systems.
                </Text>
              </div>
            </Group>
          </Card>
          <Card
            shadow="sm"
            padding="lg"
            radius="24px"
            style={{ border: "0.5px solid #090909" }}
          >
            <Group wrap="nowrap">
              <div
                style={{
                  borderRadius: "50%",
                  padding: "16px",
                  backgroundColor: "#FC611138",
                }}
              >
                <Image
                  src="/icons/tdesign_secured-filled.svg"
                  alt="secured"
                  width={42.39}
                  height={42.39}
                />
              </div>
              <div>
                <Group wrap="nowrap" justify="space-between">
                  <Text fz={19} fw={700} c="#090909">
                    CNG/LPG Systems
                  </Text>
                  <div
                    style={{
                      borderRadius: "10px",
                      padding: "5px",
                      backgroundColor: "#FC611138",
                    }}
                  >
                    <Text fz={14} fw={700} c="#090909">
                      75+ Facilities
                    </Text>
                  </div>
                </Group>

                <Text fz={19} fw={400} c="#4A4A4C" mt="sm">
                  Compressed and liquefied gas storage, transportation, and
                  distribution infrastructure solutions.
                </Text>
              </div>
            </Group>
          </Card>
          <Card
            shadow="sm"
            padding="lg"
            radius="24px"
            style={{ border: "0.5px solid #090909" }}
          >
            <Group wrap="nowrap">
              <div
                style={{
                  borderRadius: "50%",
                  padding: "16px",
                  backgroundColor: "#FC611138",
                }}
              >
                <Image
                  src="/icons/tdesign_secured-filled.svg"
                  alt="secured"
                  width={42.39}
                  height={42.39}
                />
              </div>
              <div>
                <Group wrap="nowrap" justify="space-between">
                  <Text fz={19} fw={700} c="#090909">
                    Infrastructure
                  </Text>
                  <div
                    style={{
                      borderRadius: "10px",
                      padding: "5px",
                      backgroundColor: "#FC611138",
                    }}
                  >
                    <Text fz={14} fw={700} c="#090909">
                      100+ Facilities
                    </Text>
                  </div>
                </Group>

                <Text fz={19} fw={400} c="#4A4A4C" mt="sm">
                  Critical infrastructure development including power
                  generation, water treatment, and industrial facilities.
                </Text>
              </div>
            </Group>
          </Card>
        </SimpleGrid>
      </Container>

      <Space h={"100px"} />
      <ReadyToStart />
      <Space h={"100px"} />
    </>
  );
}
