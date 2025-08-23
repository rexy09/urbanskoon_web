"use client";
import HeaderMenu from "@/components/HeaderMenu";
import ServiceCard from "@/components/ServiceCard";
import {
  Box,
  Button,
  Center,
  Container,
  Group,
  Paper,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function Home() {
  const matches = useMediaQuery("(min-width: 2560px)");
  const matches2 = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      <div className="bg-[url(/images/car_bg.jpg)] bg-cover bg-no-repeat bg-center relative">
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
        <Box m={0} mih={700} className="relative z-1">
          <Container size="xl">
            <HeaderMenu />
            <Stack justify="flex-end" h="600" gap="0">
              <Text
                c="white"
                fw={700}
                fz={matches2 ? "64px" : "40px"}
               
              >
                Quality car service
              </Text>
              <Text
                c="white"
                fw={700}
                fz={matches2 ? "64px" : "40px"}
               
              >
                you can trust.
              </Text>

              <Text
                c="white"
                mt="md"
                fz={matches2 ? "24px" : "16px"}
                fw={500}
                maw={691}
              >
                Ensuring you drive away with confidence, we guarantee a spotless
                vehicle wash in just 30 minutes or less Premium car care,
                delivered with speed, precision, and attention to detail.
              </Text>
              <Space h="xl" />
            </Stack>
          </Container>
          <Space h="100px" />
        </Box>
      </div>
      <div className="bg-[#212020]">
        <Container size={matches ? "60%" : "xl"}>
          <Group
            justify="space-around"
            mt={-30}
            style={{ zIndex: 2, position: "relative" }}
          >
            {["Sharp", "Professionals", "Precision"].map((badge) => (
              <div
                key={badge}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  color: "#333",
                  padding: "0.75rem 2rem",
                  fontSize: "28px",
                  fontWeight: "600",
                  border: "none",
                  minWidth: "250px",
                  textAlign: "center",
                }}
              >
                {badge}
              </div>
            ))}
          </Group>
          <div
            style={{
              color: "white",
            }}
          >
            <div
              style={{
                margin: "0 auto",
                padding: "4rem 2rem",
              }}
            >

              <Group justify="space-between">
                {/* Left Column - Main Content */}
                <div style={{ paddingTop: "2rem" }}>
                  <h1
                    style={{
                      fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                      fontWeight: "700",
                      lineHeight: "1.1",
                      marginBottom: "2rem",
                      margin: "0 0 2rem 0",
                    }}
                  >
                    Restoring Brilliance,
                    <br />
                    Inside and Out.
                  </h1>

                  <p
                    style={{
                      fontSize: "1.25rem",
                      color: "#d1d5db",
                      maxWidth: "500px",
                      lineHeight: "1.6",
                      marginBottom: "3rem",
                    }}
                  >
                    Nestled in the heart of the city, our premier car wash hub
                    is dedicated to transforming every vehicle that drives
                    through our gates into a gleaming masterpiece.
                  </p>

                  {/* Service Features */}
                  <div
                    style={{
                      display: "flex",
                      gap: "3rem",
                      marginTop: "3rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                        alignItems: "flex-start",
                      }}
                    >
                      <img src={"/icons/02.svg"} className="w-10 h-10 " />
                      <div>
                        <h3
                          style={{
                            fontSize: "1.125rem",
                            fontWeight: "600",
                            margin: "0 0 0.5rem 0",
                          }}
                        >
                          Quality.
                        </h3>
                        <p
                          style={{
                            color: "#d1d5db",
                            fontSize: "0.875rem",
                            maxWidth: "200px",
                            margin: "0",
                            lineHeight: "1.4",
                          }}
                        >
                          Where every detail shine with fragrance.
                        </p>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                        alignItems: "flex-start",
                      }}
                    >
                      <img src={"/icons/03.svg"} className="w-10 h-10 " />
                      <div>
                        <h3
                          style={{
                            fontSize: "1.125rem",
                            fontWeight: "600",
                            margin: "0 0 0.5rem 0",
                          }}
                        >
                          Responsible.
                        </h3>
                        <p
                          style={{
                            color: "#d1d5db",
                            fontSize: "0.875rem",
                            maxWidth: "200px",
                            margin: "0",
                            lineHeight: "1.4",
                          }}
                        >
                          Eco-friendly, safety and transparency.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Statistics */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "3rem",
                    paddingTop: "2rem",
                    minWidth: "200px",
                  }}
                >
                  {[
                    { number: "6", label: "PROFESSIONALS" },
                    { number: "100", label: "HAPPY CUSTOMERS", sup: "+" },
                    { number: "44", label: "PROJECTS" },
                  ].map((stat, index) => (
                    <div key={index}>
                      <div
                        style={{
                          fontSize: "4rem",
                          fontWeight: "700",
                          color: "white",
                          lineHeight: "1",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {stat.number}<sup style={{ fontSize: "2rem" }}>{stat.sup}</sup>
                      </div>
                      <div
                        style={{
                          fontSize: "1.125rem",
                          fontWeight: "500",
                          color: "#d1d5db",
                          letterSpacing: "0.05em",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {stat.label}
                      </div>
                      <div
                        style={{
                          height: "1px",
                          backgroundColor: "white",
                          width: "100%",

                        }}
                      />
                    </div>
                  ))}
                </div>
              </Group>
            </div>
          </div>
        </Container>
      </div>
      <div
        id="services"
        style={{
          backgroundColor: "#1a1a1a",
          color: "white",
          padding: "4rem 2rem",
        }}
      >
        <Container size={matches ? "60%" : "xl"}>
          {/* Header */}
          <div
            style={{
              textAlign: "left",
              marginBottom: "3rem",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: "700",
                margin: "0 0 2rem 0",
                lineHeight: "1.1",
              }}
            >
              Our Car Detailing Services
            </h1>

            {/* Divider line */}
            <div
              style={{
                height: "2px",
                backgroundColor: "#444",
                width: "100%",
              }}
            />
          </div>

          {/* Service Card */}
          <ServiceCard
            title={"Interior Refresh"}
            services={[
              "Disinfection",
              "Quick Fresh",
              "A/C pro (vents clean)",
              "Vacuum",
              "Polishing",
              "Free Wash",
            ]}
            price={"70,000/="}
            backgroundImage={"bg-[url(/images/close-up-car-care-dusting.png)]"}
          />
          <Space h="50px" />
          <div
            style={{
              position: "relative",
              borderRadius: "2rem",
              border: "2px solid #444",
              padding: "2rem",
              overflow: "hidden",
            }}
            className="bg-[url(/images/835B3B99.jpg)] bg-cover bg-no-repeat bg-center relative"
          >
            {/* Black opacity tint overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.5)",
                borderRadius: "2rem",
                zIndex: 1,
                pointerEvents: "none",
              }}
            />
            {/* Content goes here */}
            <div style={{ position: "relative", zIndex: 2 }}>
              <Group justify="space-between" align="center">
                <Text
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "700",
                    margin: "0 0 10px 0",
                    color: "white",
                  }}
                >
                  Express
                  <br />
                  Roof
                  <br />
                  Cleaning.
                </Text>
                <Stack align="end">
                  <Group gap={"xl"} align="center">
                    <Text
                      ta={"end"}
                      size="34px"
                      fw={700}
                      style={{
                        color: "white",
                      }}
                    >
                      Small Cars
                    </Text>
                    <Paper
                      p={"lg"}
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        color: "#333",
                        textAlign: "center",
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      <Text
                        ta={"end"}
                        style={{
                          fontSize: "1rem",
                          fontWeight: "400",
                          fontStyle: "italic",
                        }}
                      >
                        I Need This
                      </Text>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "1rem",
                        }}
                      >
                        <img src={"/icons/01.svg"} className="w-10 h-10 " />

                        <Text fz={"34"} fw={700} c={"dark"}>
                          79,000/=
                        </Text>
                      </div>
                    </Paper>
                  </Group>
                  <Group gap={"xl"} align="center">
                    <Text
                      ta={"end"}
                      size="34px"
                      fw={700}
                      style={{
                        color: "white",
                      }}
                    >
                      Big Cars
                    </Text>
                    <Paper
                      p={"lg"}
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        color: "#333",
                        textAlign: "center",
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      <Text
                        ta={"end"}
                        style={{
                          fontSize: "1rem",
                          fontWeight: "400",
                          fontStyle: "italic",
                        }}
                      >
                        I Need This
                      </Text>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "1rem",
                        }}
                      >
                        <img src={"/icons/01.svg"} className="w-10 h-10 " />

                        <Text fz={"34"} fw={700} c={"dark"}>
                          99,000/=
                        </Text>
                      </div>
                    </Paper>
                  </Group>
                </Stack>
              </Group>
            </div>
          </div>

          <Space h="50px" />
          <ServiceCard
            title={"Deep Clean Deluxe"}
            services={[
              "Disinfection",
              "Engine steaming",
              "Plastic restoration",
              "Free Wash",
            ]}
            price={"130,000/="}
            backgroundImage={"bg-[url(/images/Eco-Steam-Detailing.png)]"}
          />
          <Space h="50px" />
          <ServiceCard
            title={"Urbanskoon Premium"}
            services={[
              "Rim Restoration",
              "Disinfection",
              "A/C pro(Vents Clean)",
              "Interior Foam Cleaning(Seat & Roof)",
              "Quick Fresh",
              "Engine Steam Wash",
              "Free Car Wash + Cup of Poridge",
            ]}
            price={"180,000/="}
            backgroundImage={"bg-[url(/images/car-wash-detailing.png)]"}
          />
        </Container>
      </div>
      <div id="about" className="bg-[url(/images/beautiful-car.jpg)] bg-cover bg-no-repeat bg-center relative">
        {/* Black opacity tint overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
        <Box m={0} mih={"70vh"} className="relative z-1">
          <Container size="xl">
            <Stack justify="end" align="center" h="600" gap="0">
              <Text
                c="white"
                mt="md"
                fz={matches2 ? "24px" : "16px"}
                fw={500}
                ta={"center"}
              >
                A clean car isn’t just about looks it’s about protecting your
                investment and enjoying every drive. For over 6years, we’ve
                provided professional car cleaning and detailing services that
                keep your car looking brand new, inside and out. Whether you’re
                after a quick wash or a full detail, our team is passionate
                about delivering outstanding results every time.
              </Text>
              <Space h="xl" />
            </Stack>
          </Container>
        </Box>
      </div>
      <div
        style={{
          backgroundColor: "#1a1a1a",
          color: "white",
          padding: "4rem 2rem",
        }}
      >
        <Center>
          <Button
            size="xl"
            color="white"
            radius={0}
            c={"black"}
            fw={"900"}
            fz={"34px"}
          >
            Checkout
          </Button>
        </Center>
      </div>
      <div id="contact" >

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.02429279651!2d39.223670475932614!3d-6.766892093229869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4f002aeba2ed%3A0x402317c5e273ad1d!2sUrbanSkoon!5e0!3m2!1sen!2stz!4v1755955025183!5m2!1sen!2stz"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div
        style={{
          backgroundColor: "#1a1a1a",
          color: "white",
          padding: "4rem 2rem",
        }}
      >
        <Container size={matches ? "60%" : "xl"}>
          <Group justify="space-between">
            <Text fw={700} fz={"xl"}>
              Mwenge, Mpakani
              <br />
              Oil Com
              <br />
              Dar es Salaam, Tanzania
            </Text>
            <Text fw={700} fz={"xl"}>
              Book Now, Get a free Quote.
              <br />
              Eco-friendly products and
              <br />
              Expert hands.
            </Text>
          </Group>
        </Container>
      </div>
      <div
        style={{
          backgroundColor: "#101010",
          color: "white",
          padding: "4rem 2rem",
        }}
      >
        <Container size={"xl"}>
          <Stack justify="center" align="center">
            <Text fw={700} fz={"xl"} ta={"center"}>
              All rights reserved | Headline Entrepreneurs | 2025
            </Text>
          </Stack>
        </Container>
      </div>
    </>
  );
}
