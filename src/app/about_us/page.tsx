"use client";
import ReadyToStart from "@/components/ReadyToStart";
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

function AboutUs() {
  const matches = useMediaQuery("(min-width: 2560px)");
  const matches2 = useMediaQuery("(min-width: 1024px)");

  return (
    <>

      <Box
        // size={matches ? "60%" : "xl"}
        m={0}
        mih={700}
        className="relative z-1"
      >
        <Container size="xl">

          <Stack justify="flex-end" h="600" gap="0">
            <Text
              c="black"
              fw={700}
              fz={matches2 ? "58px" : "40px"}
              style={{
                fontFamily: "Satoshi",
              }}
            >
              Engineering the
            </Text>
            <Group>

              <Text
                c="#FC6111"
                fw={700}
                fz={matches2 ? "58px" : "40px"}
                style={{
                  fontFamily: "Satoshi",
                }}
              >
                Future of Energy
              </Text>
              <Text
                c="black"
                fw={700}
                fz={matches2 ? "58px" : "40px"}
                style={{
                  fontFamily: "Satoshi",
                }}
              >
                Infrastructure
              </Text>
            </Group>

            <Text
              c="#667085"
              mt="md"
              fz={matches2 ? "22px" : "16px"}
              fw={400}
              maw={691}
            >
              We offer our clients consulting, advisory and engineering services on their most complex and critical challenges – covering all commercial, regulatory, environmental and technical matters.
            </Text>
            <Text
              c="#667085"
              mt="md"
              fz={matches2 ? "22px" : "16px"}
              fw={400}
              maw={691}
            >
              With a focus on asset-intensive businesses that operate in the oil and gas, energy (old and new), and infrastructure sectors, our team brings relevant industry experience to each project.
            </Text>
            <Space h="xl" />

            <Group mt={0}>
              <Button color="black">Start your Project </Button>

            </Group>
          </Stack>
          <Space h="70px" />
          <Image
            src="/images/image_4.png"
            alt="Engineering Icon"
            width={1412}
            height={604}
            style={{ height: "auto", width: "100%" }}
          />
        </Container>
        <Space h="100px" />

      </Box>
      <Container size="xl" mt={0} mb={100} className="relative z-1">
        <SimpleGrid cols={{ base: 1, md: 4 }} spacing="xl">
          <div>
            <Center>
              <Text
                c="#FC6111"
                fw={600}
                fz={matches2 ? "67px" : "40px"}

              >
                20+
              </Text>
            </Center>
            <Text
              fz={20}
              fw={600}
              ta={"center"}
            >
              Years of Experience
            </Text>

          </div>
          <div>
            <Center>
              <Text
                c="#FC6111"
                fw={600}
                fz={matches2 ? "67px" : "40px"}

              >
                100%
              </Text>
            </Center>
            <Text
              fz={20}
              fw={600}
              ta={"center"}
            >
              Project Certainty
            </Text>

          </div>
          <div>
            <Center>
              <Text
                c="#FC6111"
                fw={600}
                fz={matches2 ? "67px" : "40px"}

              >
                50+
              </Text>
            </Center>
            <Text
              fz={20}
              fw={600}
              ta={"center"}
            >
              Projects Delivered
            </Text>

          </div>
          <div>
            <Center>
              <Text
                c="#FC6111"
                fw={600}
                fz={matches2 ? "67px" : "40px"}

              >
                15+
              </Text>
            </Center>
            <Text
              fz={20}
              fw={600}
              ta={"center"}
            >
              Countries Served
            </Text>

          </div>
        </SimpleGrid>
      </Container>
     
      <div className="bg-black relative">
        <img
          src="/mokko.svg" // Replace with your image path
          alt="Background Circle"
          className="absolute right-[-340] top-1/2 transform -translate-y-1/2  h-[600] object-cover opacity-50 "
        />
        <Container size="xl">
          <div
            style={{
              backgroundColor: "black",
              width: "100%",
            }}
          >
            <Space h={"100px"} />

            <Text
              fw={700}
              fz={78}
              c={"white"}
              style={{
                fontFamily: "Satoshi",
                background: "linear-gradient(90deg, #FC6111 0%, #963A0A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline-block",
              }}
            >
              Our Story
            </Text>
            <Text

              fw={500}
              fz={20}
              c={"white"}
              maw={700}
              style={{ fontFamily: "satoshi", lineHeight: "25px" }}
            >
              Mokko Engineering was built with a clear vision: to provide smart, reliable, and forward-thinking engineering solutions for Africa’s growing energy and infrastructure needs.
            </Text>
            <Text

              fw={400}
              fz={20}
              c={"white"}
              maw={700}
              style={{ fontFamily: "satoshi", lineHeight: "25px" }}
            >
              What began as a small advisory unit has evolved into a multidisciplinary engineering firm trusted by governments, energy providers, and infrastructure developers across the continent.
            </Text>
            <Text

              fw={400}
              fz={20}
              c={"white"}
              maw={700}
              style={{ fontFamily: "satoshi", lineHeight: "25px" }}
            >
              Our breakthrough came with a major natural gas infrastructure project in East Africa, where we delivered end-to-end consulting, design, and project supervision. The success of that project opened doors to larger opportunities across sectors including pipelines, LPG and CNG systems, and retail fuel infrastructure.
            </Text>
            <Text

              fw={400}
              fz={20}
              c={"white"}
              maw={700}
              style={{ fontFamily: "satoshi", lineHeight: "25px" }}
            >
              Today, Mokko has supported over 200 energy and infrastructure projects across 10 African countries, delivering everything from feasibility studies to full-scale engineering and construction management.
            </Text>
            <Text

              fw={400}
              fz={20}
              c={"white"}
              maw={700}
              style={{ fontFamily: "satoshi", lineHeight: "25px" }}
            >
              Each project deepens our experience and sharpens our commitment—to build sustainable, innovative, and efficient solutions that power industries and communities for the long term.
            </Text>

            <Space h={"100px"} />
          </div>
        </Container>
      </div>
      <Space h={"100px"} />
      <Container>
        <Text ta={"center"} fw={600} fz={42}>
          Complete Project Lifecycle Expertise
        </Text>
        <Center>
          <Text ta={"center"} fw={400} fz={23} c={"#535862"} maw={850}>
            Our multi-disciplinary engineering team provides design services across all parts of the project life-cycle, from concept to as-built engineering drawings.
          </Text>
        </Center>
        <Space h={"100px"} />
        <div className="max-w-6xl mx-auto lg:relative">
          {/* Phase 1 - Top Left */}
            <div className="w-full lg:w-90 h-60 bg-white rounded-lg shadow-lg border-1 border-[#C3C3C3] p-6 transition-transform hover:scale-105 hover:shadow-xl lg:absolute lg:top-0 lg:left-0 mb-6 lg:mb-0">
            <div className="inline-block px-4 py-2 rounded-lg bg-[#FFF6C4] font-semibold text-sm mb-4">
              Phase 1
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Conceptual
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Screening, Scoping, Site Selection, Concept Option Development, Multi-Criteria Assessment, Master planning
            </p>
            </div>

            {/* Phase 2 - Center (overlapping) */}
            <div className="w-full lg:w-90 h-60 bg-white rounded-lg shadow-lg border-1 border-[#C3C3C3] p-6 transition-transform hover:scale-105 hover:shadow-xl z-10 lg:absolute lg:top-50 lg:left-110 lg:transform lg:-translate-x-1/2 mb-6 lg:mb-0">
            <div className="inline-block px-4 py-2 rounded-lg bg-[#C4D9FF]  font-semibold text-sm mb-4">
              Phase 2
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Pre-Feasibility
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Pre-FEED, Project Scope, Planning Objectives, User Requirements, Options Development, Cost Estimating
            </p>
            </div>

            {/* Phase 3 - Bottom Left */}
            <div className="w-full lg:w-80 h-60 bg-white rounded-lg shadow-lg border-1 border-[#C3C3C3] p-6 transition-transform hover:scale-105 hover:shadow-xl lg:absolute lg:top-100 lg:left-0 mb-6 lg:mb-0">
            <div className="inline-block px-4 py-2 rounded-lg bg-green-200 font-semibold text-sm mb-4">
              Phase 3
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Feasibility
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              FEED, Site Investigations, Implementation Planning, Cost Estimating, Bankability
            </p>
            </div>

            {/* Phase 4 - Bottom Right */}
            <div className="w-full lg:w-80 h-60 bg-white rounded-lg shadow-lg border-1 border-[#C3C3C3] p-6 transition-transform hover:scale-105 hover:shadow-xl lg:absolute lg:top-100 lg:right-0">
            <div className="inline-block px-4 py-2 rounded-lg bg-purple-200 font-semibold text-sm mb-4">
              Phase 4
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Execution
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Detailed Engineering, Construction Supervision, Commissioning
            </p>
          </div>

          {/* Container height spacer */}
          <div className="h-screen"></div>
        </div>

      </Container>
      <Space h={"100px"} />
      <div className="bg-[#FAFAFA]">
        <Container size={"lg"} className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <Text
                c="black"
                fw={700}
                fz={"58px"}
                style={{
                  fontFamily: "Satoshi",
                  lineHeight: "58px",
                }}
              >
                Our Core Values
              </Text>
              <Space h={"md"} />
              <Text
                c="#667085"
                fw={400}
                fz={"22px"}

              >
                The principles that guide our multi-disciplinary approach to complex engineering challenges
              </Text>
              <Space h={"xl"} />

            </div>
            <div>
              <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
                <Card
                  shadow="sm"
                  padding="lg"
                  radius="41px"
                  withBorder
                  style={{
                    background: "linear-gradient(180deg, #000000 0%, #474545 100%)",
                  }}
                >
                  <Stack>
                    <div
                      style={{
                        borderRadius: "50%",
                        padding: "10px",
                        backgroundColor: "#FC611138",
                        width: "50px",
                        height: "50px",
                      }}
                    >
                      <Center>
                        <Image
                          src="/icons/hugeicons_nano-technology.svg"
                          alt="Engineering Icon"
                          width={24}
                          height={24}
                          style={{ height: "auto", width: "auto" }}
                        />
                      </Center>
                    </div>
                    <div>
                      <Group wrap="nowrap" justify="space-between">
                        <Text
                          fz={22}
                          fw={700}
                          c="#FC6111"
                          style={{ fontFamily: "Satoshi" }}
                        >
                          Technical Excellence
                        </Text>
                      </Group>

                      <Text fz={12} fw={400} c="white" mt="sm">
                        Understanding your requirements, constraints, and
                        objectives to develop a comprehensive project strategy.
                      </Text>
                    </div>
                  </Stack>
                </Card>
                <Card
                  shadow="sm"
                  padding="lg"
                  radius="41px"
                  withBorder
                  style={{
                    background: "linear-gradient(180deg, #000000 0%, #474545 100%)",
                  }}
                >
                  <Stack>
                    <div
                      style={{
                        borderRadius: "50%",
                        padding: "10px",
                        backgroundColor: "#FC611138",
                        width: "50px",
                        height: "50px",
                      }}
                    >
                      <Center>
                        <Image
                          src="/icons/fluent-color_people-team-16.svg"
                          alt="Engineering Icon"
                          width={24}
                          height={24}
                          style={{ height: "auto", width: "auto" }}
                        />
                      </Center>
                    </div>
                    <div>
                      <Group wrap="nowrap" justify="space-between">
                        <Text
                          fz={22}
                          fw={700}
                          c="#FC6111"
                          style={{ fontFamily: "Satoshi" }}
                        >
                          Multi-Disciplinary Team
                        </Text>
                      </Group>

                      <Text fz={12} fw={400} c="white" mt="sm">
                        Bringing relevant industry experience from concept to as-built engineering drawings.
                      </Text>
                    </div>
                  </Stack>
                </Card>
                <Card
                  shadow="sm"
                  padding="lg"
                  radius="41px"
                  withBorder
                  style={{
                    background: "linear-gradient(180deg, #000000 0%, #474545 100%)",
                  }}
                >
                  <Stack>
                    <div
                      style={{
                        borderRadius: "50%",
                        padding: "10px",
                        backgroundColor: "#FC611138",
                        width: "50px",
                        height: "50px",
                      }}
                    >
                      <Center>
                        <Image
                          src="/icons/token_solve.svg"
                          alt="Engineering Icon"
                          width={24}
                          height={24}
                          style={{ height: "auto", width: "auto" }}
                        />
                      </Center>

                    </div>
                    <div>
                      <Group wrap="nowrap" justify="space-between">
                        <Text
                          fz={22}
                          fw={700}
                          c="#FC6111"
                          style={{ fontFamily: "Satoshi" }}
                        >
                          Comprehensive Solutions
                        </Text>
                      </Group>

                      <Text fz={12} fw={400} c="white" mt="sm">
                        Covering all commercial, regulatory, environmental and technical matters in one place.
                      </Text>
                    </div>
                  </Stack>
                </Card>
                <Card
                  shadow="sm"
                  padding="lg"
                  radius="41px"
                  withBorder
                  style={{
                    background: "linear-gradient(180deg, #000000 0%, #474545 100%)",
                  }}
                >
                  <Stack>
                    <div
                      style={{
                        borderRadius: "50%",
                        padding: "16px",
                        backgroundColor: "#FC611138",
                        width: "50px",
                        height: "50px",
                      }}
                    >
                      <Center>
                        <Image
                          src="/icons/octicon_project-16.svg"
                          alt="Engineering Icon"
                          width={24}
                          height={24}
                          style={{ height: "auto", width: "auto" }}
                        />
                      </Center>

                    </div>
                    <div>
                      <Group wrap="nowrap" justify="space-between">
                        <Text
                          fz={22}
                          fw={700}
                          c="#FC6111"
                          style={{ fontFamily: "Satoshi" }}
                        >
                          Project Certainty
                        </Text>
                      </Group>

                      <Text fz={12} fw={400} c="white" mt="sm">
                        Delivering capital efficiency and project certainty across the entire value chain.
                      </Text>
                    </div>
                  </Stack>
                </Card>
              </SimpleGrid>
            </div>
          </div>
        </Container>
      </div>
      <Space h={"100px"} />
      <ReadyToStart />
      <Space h={"100px"} />
    </>
  );
}

export default AboutUs;
