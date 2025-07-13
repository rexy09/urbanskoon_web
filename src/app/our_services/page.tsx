"use client";
import {
  Box,
  Button,
  Card,
  Center,
  Container,
  Group,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import ServiceWidget from "../../components/ServiceWidget";
const widgets = [
  {
    title: "Engineering Design & Analysis",
    description:
      "Comprehensive engineering solutions from concept to completion",
    services: [
      "Process engineering and optimization",
      "Structural and mechanical design",
      "Instrumentation and control systems",
      "3D modeling and simulation",
      "Stress analysis and FEA",
      "Regulatory compliance review",
    ],
    industries: "Oil & Gas, Pipeline, Infrastructure",
  },
  {
    title: "Project Management Services",
    description: "End-to-end project management ensuring successful delivery",
    services: [
      "Project planning and scheduling",
      "Budget management and cost control",
      "Risk management and mitigation",
      "Quality assurance and control",
      "Stakeholder communication",
      "Progress monitoring and reporting",
    ],
    industries: "All sectors",
  },
  {
    title: "Technical Consulting",
    description: "Expert guidance for complex engineering challenges",
    services: [
      "Feasibility studies and assessments",
      "Technology selection and evaluation",
      "Operational optimization",
      "Asset integrity management",
      "Regulatory compliance consulting",
      "Due diligence support",
    ],
    industries: "Energy, Infrastructure, Industrial",
  },
  {
    title: "Risk Assessment & Safety",
    description: "Comprehensive risk analysis and safety management",
    services: [
      "Quantitative risk assessment (QRA)",
      "Hazard identification (HAZID)",
      "Hazard and operability studies (HAZOP)",
      "Safety integrity level (SIL) assessment",
      "Emergency response planning",
      "Safety case development",
    ],
    industries: "Oil & Gas, Chemical, Pipeline",
  },
  {
    title: "Pipeline Engineering",
    description: "Specialized pipeline design and integrity services",
    services: [
      "Pipeline route optimization",
      "Hydraulic analysis and modeling",
      "Integrity assessment and monitoring",
      "Corrosion management programs",
      "In-line inspection support",
      "Pipeline rehabilitation",
    ],
    industries: "Oil & Gas, Water, Multi-product",
  },
  {
    title: "CNG/LPG Systems",
    description: "Complete solutions for compressed and liquefied gas systems",
    services: [
      "Storage facility design",
      "Compression and liquefaction systems",
      "Distribution network planning",
      "Safety and emergency systems",
      "Loading/unloading facilities",
      "Transportation solutions",
    ],
    industries: "Natural Gas, Propane, Industrial",
  },
];
function Services() {
  const matches = useMediaQuery("(min-width: 2560px)");
  const matches2 = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      <div className="bg-[url(/images/image_2.png)] bg-cover bg-no-repeat bg-center relative">
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(270deg, #504F4F00 0%, #000000DB 100%)",
            zIndex: 1,
          }}
        />
        <Box
          // size={matches ? "60%" : "xl"}
          m={0}
          mih={700}
          className="relative z-1"
        >
          <Container size="xl">
            <Stack justify="flex-end" h="600" gap="0">
              <Text
                c="white"
                fw={700}
                fz={matches2 ? "64px" : "40px"}
                style={{
                  fontFamily: "Satoshi",
                }}
              >
                Comprehensive
              </Text>

              <Text
                c="#FC6111"
                fw={700}
                fz={matches2 ? "64px" : "40px"}
                style={{
                  fontFamily: "Satoshi",
                }}
              >
                Engineering Services
              </Text>

              <Text
                c="white"
                mt="md"
                fz={matches2 ? "24px" : "16px"}
                fw={500}
                maw={691}
              >
                From initial concept through detailed design, construction
                support, and operational optimization, we deliver integrated
                engineering services that ensure project success.
              </Text>
              <Space h="xl" />

              <Group mt={30}>
                <Button color="#FC6111">Get Started</Button>
                <Button
                  color="#FC6111"
                  variant="subtle"
                  c="white"
                  rightSection={
                    <Image
                      src="/icons/arrow-right-line.svg"
                      alt="Icon"
                      width={24}
                      height={24}
                      color="white"
                    />
                  }
                >
                  Get Quote{" "}
                </Button>
              </Group>
            </Stack>
          </Container>
          <Space h="100px" />
        </Box>
      </div>
      <Container size="xl" mt={-50} mb={100} className="relative z-1">
        <Paper shadow="md" p="xl" radius="0" withBorder>
          <SimpleGrid cols={{ base: 1, md: 4 }} spacing="xl">
            <div>
              <Center>
                <div className="rounded-[10px] bg-[#FC611138]  p-2.5 w-[56px]">
                  <Center>
                    <Image
                      src="/icons/mingcute_settings-1-line.svg"
                      alt="Engineering Icon"
                      width={24}
                      height={24}
                      style={{ height: "auto", width: "auto" }}
                    />
                  </Center>
                </div>
              </Center>
              <Text
                fz={18}
                fw={700}
                mt="md"
                ta={"center"}
                style={{ fontFamily: "Satoshi" }}
              >
                Engineering Design
              </Text>
              <Center>
                <Text fz={18} mt="sm" ta={"center"} maw={400}>
                  Conceptual to Detailed Design
                </Text>
              </Center>
            </div>
            <div>
              <Center>
                <div className="rounded-[10px] bg-[#FC611138]  p-2.5 w-[56px]">
                  <Center>
                    <Image
                      src="/icons/maki_construction.svg"
                      alt="Engineering Icon"
                      width={24}
                      height={24}
                      style={{ height: "auto", width: "auto" }}
                    />
                  </Center>
                </div>
              </Center>
              <Text
                fz={18}
                fw={700}
                mt="md"
                ta={"center"}
                style={{ fontFamily: "Satoshi" }}
              >
                Construction
              </Text>
              <Center>
                <Text fz={18} mt="sm" ta={"center"} maw={400}>
                  Management & Supervision
                </Text>
              </Center>
            </div>
            <div>
              <Center>
                <div className="rounded-[10px] bg-[#FC611138]  p-2.5 w-[56px]">
                  <Center>
                    <Image
                      src="/icons/nimbus_marketing.svg"
                      alt="Engineering Icon"
                      width={24}
                      height={24}
                      style={{ height: "auto", width: "auto" }}
                    />
                  </Center>
                </div>
              </Center>
              <Text
                fz={18}
                fw={700}
                mt="md"
                ta={"center"}
                style={{ fontFamily: "Satoshi" }}
              >
                Commercial
              </Text>
              <Center>
                <Text fz={18} mt="sm" ta={"center"} maw={400}>
                  Market Analysis
                </Text>
              </Center>
            </div>
            <div>
              <Center>
                <div className="rounded-[10px] bg-[#FC611138]  p-2.5 w-[56px]">
                  <Center>
                    <Image
                      src="/icons/mdi_environment.svg"
                      alt="Engineering Icon"
                      width={24}
                      height={24}
                      style={{ height: "auto", width: "auto" }}
                    />
                  </Center>
                </div>
              </Center>
              <Text
                fz={18}
                fw={700}
                mt="md"
                ta={"center"}
                style={{ fontFamily: "Satoshi" }}
              >
                Environmental
              </Text>
              <Center>
                <Text fz={18} mt="sm" ta={"center"} maw={400}>
                  Impact & Risk
                </Text>
              </Center>
            </div>
          </SimpleGrid>
        </Paper>
      </Container>

      <Container>
        <Text ta={"center"} fw={600} fz={42}>
          Core Service Areas
        </Text>
        {/* <Space h={"md"} /> */}
        <Center>
          <Text ta={"center"} fw={400} fz={23} c={"#535862"} maw={850}>
            We provide a full spectrum of engineering services designed to
            address the complex challenges of modern energy infrastructure
            projects.
          </Text>
        </Center>
        <Space h={"100px"} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {widgets.map((widget, index) => (
            <ServiceWidget
              key={index}
              title={widget.title}
              description={widget.description}
              services={widget.services}
              industries={widget.industries}
            />
          ))}
        </div>
      </Container>
      <Space h={"100px"} />

      <Container size={"lg"} mt={matches ? "100px" : "50px"}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <Text
              c="black"
              fw={500}
              fz={"80px"}
              style={{
                fontFamily: "Satoshi",
                lineHeight: "80px",
              }}
            >
              Our Proven Process
            </Text>
            <Space h={"xl"} />
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
              <Card shadow="sm" padding="lg" radius="16px" withBorder>
                <Stack>
                  <div
                    style={{
                      borderRadius: "50%",
                      padding: "16px",
                      backgroundColor: "#FC611138",
                      width: "50px",
                      height: "50px",
                    }}
                  ></div>
                  <div>
                    <Group wrap="nowrap" justify="space-between">
                      <Text
                        fz={20}
                        fw={700}
                        c="#090909"
                        style={{ fontFamily: "Satoshi" }}
                      >
                        Discovery & Planning
                      </Text>
                    </Group>

                    <Text fz={14} fw={400} c="#4A4A4C" mt="sm">
                      Understanding your requirements, constraints, and
                      objectives to develop a comprehensive project strategy.
                    </Text>
                  </div>
                </Stack>
              </Card>
              <Card shadow="sm" padding="lg" radius="16px" withBorder>
                <Stack>
                  <div
                    style={{
                      borderRadius: "50%",
                      padding: "16px",
                      backgroundColor: "#FC611138",
                      width: "50px",
                      height: "50px",
                    }}
                  ></div>
                  <div>
                    <Group wrap="nowrap" justify="space-between">
                      <Text
                        fz={20}
                        fw={700}
                        c="#090909"
                        style={{ fontFamily: "Satoshi" }}
                      >
                        Design & Engineering
                      </Text>
                    </Group>

                    <Text fz={14} fw={400} c="#4A4A4C" mt="sm">
                      Detailed engineering design using advanced tools and
                      methodologies, with regular client review and approval.
                    </Text>
                  </div>
                </Stack>
              </Card>
              <Card shadow="sm" padding="lg" radius="16px" withBorder>
                <Stack>
                  <div
                    style={{
                      borderRadius: "50%",
                      padding: "16px",
                      backgroundColor: "#FC611138",
                      width: "50px",
                      height: "50px",
                    }}
                  ></div>
                  <div>
                    <Group wrap="nowrap" justify="space-between">
                      <Text
                        fz={20}
                        fw={700}
                        c="#090909"
                        style={{ fontFamily: "Satoshi" }}
                      >
                        Review & Optimization
                      </Text>
                    </Group>

                    <Text fz={14} fw={400} c="#4A4A4C" mt="sm">
                      Thorough review of all deliverables, optimization for
                      efficiency, and preparation for implementation.
                    </Text>
                  </div>
                </Stack>
              </Card>
              <Card shadow="sm" padding="lg" radius="16px" withBorder>
                <Stack>
                  <div
                    style={{
                      borderRadius: "50%",
                      padding: "16px",
                      backgroundColor: "#FC611138",
                      width: "50px",
                      height: "50px",
                    }}
                  ></div>
                  <div>
                    <Group wrap="nowrap" justify="space-between">
                      <Text
                        fz={20}
                        fw={700}
                        c="#090909"
                        style={{ fontFamily: "Satoshi" }}
                      >
                        Support & Delivery
                      </Text>
                    </Group>

                    <Text fz={14} fw={400} c="#4A4A4C" mt="sm">
                      Ongoing support during construction and commissioning,
                      ensuring successful project completion.
                    </Text>
                  </div>
                </Stack>
              </Card>
            </SimpleGrid>
          </div>
          <div>
            <Center>
              <Image
                src="/images/image_3.png"
                alt="Image"
                width={638}
                height={638}
                style={{ width: "477.51px", height: "auto" }}
              />
            </Center>
          </div>
        </div>
        <Space h={"100px"} />
      </Container>
      <Container size="xl">
        <div
          style={{
            backgroundColor: "#FC6111",
            maxHeight: "400px",
            width: "100%",
          }}
        >
          <Space h={"100px"} />

          <Text
            ta={"center"}
            fw={700}
            fz={36}
            c={"white"}
            style={{ fontFamily: "satoshi" }}
          >
            Ready to Start Your Next Project?
          </Text>
          {/* <Space h={"md"} /> */}
          <Center>
            <Text
              ta={"center"}
              fw={400}
              fz={20}
              c={"white"}
              maw={700}
              style={{ fontFamily: "satoshi" }}
            >
              Let&apos;s discuss how MOKKO can help you achieve your engineering
              goals with our expertise and innovative solutions.
            </Text>
          </Center>
          <Space h={"50px"} />
          <Group justify="center">
            <Button color="#090909" c={"white"}>
              Get in Touch
            </Button>
            <Button
              color="white"
              // variant="subtle"
              c="#FC6111"
            >
              Learn about us
            </Button>
          </Group>
          <Space h={"100px"} />
        </div>
      </Container>
      <Space h={"100px"} />
    </>
  );
}

export default Services;
