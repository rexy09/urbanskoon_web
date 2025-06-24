import { Anchor, Container, Group, Space, Text } from "@mantine/core";
import Image from "next/image";

function FooterLinks() {
    return (
        <footer className={"bg-black py-[100px]"}>
            <Container size="lg">
                <div className="flex flex-col lg:flex-row justify-between items-start">

                    <div>
                        <Group>
                            <Image
                                src="/mokko.svg"
                                alt="Logo"
                                width={54}
                                height={54}
                                style={{ width: "auto", height: "54px" }}
                            />
                            <Text
                                c="white"
                                fw={700}
                                fz={"32px"}
                                style={{
                                    fontFamily: "DM Sans",
                                }}
                            >
                                Mokko
                            </Text>
                        </Group>
                        <Space h={"70px"} />

                        <Text
                            size="16px"
                            fw={300}
                            maw={330}
                            c="white"
                            style={{ fontFamily: "satoshi" }}
                        >
                            Expert engineering consulting and advisory services for energy, oil
                            & gas, and infrastructure projects. Delivering innovative solutions
                            with precision and excellence.
                        </Text>
                        <Space h={"70px"} />


                    </div>
                    <div
                        className="flex flex-col gap-[20px] lg:gap-[100px] lg:flex-row flex-wrap justify-between items-start"
                    >
                        <div className="w-[200px]">
                            <Text fw={500} fz={21} c="white">
                                Quick Links
                            </Text>
                            {[
                                { label: "About Us", href: "/about" },
                                { label: "Services", href: "/services" },
                                { label: "Sectors", href: "/sectors" },
                                { label: "Projects", href: "/projects" },
                                { label: "Insights", href: "/insights" },
                            ].map((link) => (
                                <Text key={link.label} c="white" fw={400} fz={16} mt={10}>
                                    <Anchor href={link.href} c="white" underline="hover">
                                        {link.label}
                                    </Anchor>
                                </Text>
                            ))}
                        </div>
                        <div className="w-[200px]">
                            <Text fw={500} fz={21} c="white">
                                Contact Info
                            </Text>
                            {[
                                { label: "Lagos, Nigeria", color: "white" },
                                { label: "+234 (0) 123 456 7890", color: "#FC6111" },
                                { label: "info@mokko.ng", color: "#FC6111" },
                                { label: "Company profile", color: "white" },
                                { label: "Contact Us", color: "white" },
                            ].map((item) => (
                                <Text key={item.label} c={item.color} fw={400} fz={16} mt={10}>
                                    {item.label}
                                </Text>
                            ))}
                        </div>
                    </div>
                </div>
                <Space h={"20px"} />
                <Text
                    size="16px"
                    fw={300}
                    c="white"
                    style={{ fontFamily: "satoshi" }}
                >
                    © 2024 MOKKO Engineering Consulting. All rights reserved.
                </Text>
            </Container>
        </footer>
    );
}

export default FooterLinks;
