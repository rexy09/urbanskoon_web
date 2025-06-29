"use client";
import ContactUsSection from "@/components/ContactUsSection";
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
  Textarea,
  TextInput,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
const offices = [
  {
    city: "Dar es Salaam",
    description: "East Africa Headquarters",
    address:
      "10th Floor, Tanzanite Tower,\nOhio Street, Dar es Salaam, Tanzania",
    phone: "+255 (22) 212-3100",
    email: "eastafrica@mokko-eng.com",
  },
  {
    city: "Nairobi",
    description: "East Africa Operations Hub",
    address:
      "10th Floor, Tanzanite Tower,\nOhio Street, Dar es Salaam, Tanzania",
    phone: "+255 (22) 212-3100",
    email: "eastafrica@mokko-eng.com",
  },
  {
    city: "Abuja",
    description: "Africa Regional Office – West & Central",
    address:
      "10th Floor, Tanzanite Tower,\nOhio Street, Dar es Salaam, Tanzania",
    phone: "+255 (22) 212-3100",
    email: "eastafrica@mokko-eng.com",
  },
  {
    city: "Dubai",
    description: "Middle East & Asia Operations",
    address:
      "10th Floor, Tanzanite Tower,\nOhio Street, Dar es Salaam, Tanzania",
    phone: "+255 (22) 212-3100",
    email: "eastafrica@mokko-eng.com",
  },
];
function AboutUs() {
  const matches = useMediaQuery("(min-width: 2560px)");

  return (
    <>
      <Container size={matches ? "60%" : "xl"} mt={matches ? "100px" : "50px"}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <Text c="#181D27" fw={700} fz={"36px"}>
              Get in touch
            </Text>

            <Text c="#535862" mt="md" fz={"20px"} fw={400} maw={448}>
              Ready to start your project? Fill out the form below and our team
              will contact you within 24 hours to discuss your requirements.
            </Text>
            <Space h="xl" />
            <TextInput
              withAsterisk
              label="Full Name"
              placeholder="Enter your full name"
            />
            <TextInput
              mt="md"
              withAsterisk
              type="email"
              autoComplete="email"
              label="Email Address"
              placeholder="Enter your email address"
            />
            <TextInput
              mt="md"
              label="Phone Number"
              placeholder="Enter your phone number"
            />
            <Textarea
              withAsterisk
              label="Message"
              placeholder="Type your message here"
              mt="md"
              minRows={4}
            />
            <Space h="md" />
            <Button color="#FC6111" fullWidth>
              Send message
            </Button>
            <Space h="xl" />
            <Text c="#535862" fz={"16px"} fw={400}>
              By submitting this form, you agree to our{" "}
              <a href="/privacy-policy" className="text-[#FC6111]">
                Privacy Policy
              </a>
              .
            </Text>
            <Space h="xl" />
          </div>
          <div>
            <Center>
              <Image
                src="/images/image_5.png"
                alt="Image"
                width={638}
                height={638}
                style={{ width: "auto", height: "638.13px" }}
              />
            </Center>
          </div>
        </div>
        <Space h={"100px"} />

        <div className="bg-[#FAFAFA] py-16 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16">
              {/* Left Section - Header (takes up about 1/3) */}
              <div className="lg:w-1/3 lg:pr-8">
                <p className="text-orange-500 font-semibold text-sm mb-3">
                  Our locations
                </p>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                  Global Offices
                </h2>
                <p className="text-gray-600 text-base leading-relaxed">
                  With offices strategically located around the world, we're
                  positioned to serve your projects wherever they are.
                </p>
              </div>

              {/* Right Section - Office Cards (takes up about 2/3) */}
              <div className="lg:w-2/3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {offices.map((office, index) => (
                    <div key={index} className="space-y-4">
                      {/* City Name */}
                      <h3 className="text-xl font-bold text-gray-900">
                        {office.city}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-sm">
                        {office.description}
                      </p>

                      {/* Address */}
                      <div>
                        <p className="text-gray-600 text-sm whitespace-pre-line">
                          {office.address}
                        </p>
                      </div>

                      {/* Contact Info */}
                      <div className="space-y-1">
                        <div>
                          <span className="text-gray-900 font-medium text-sm">
                            Phone:
                          </span>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">
                            {office.phone}
                          </p>
                        </div>

                        <div>
                          <span className="text-gray-900 font-medium text-sm">
                            Email:
                          </span>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">
                            {office.email}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Space h={"100px"} />

      <ContactUsSection />

      <Space h={"100px"} />
    </>
  );
}

export default AboutUs;
