import { Group, Paper, Text } from "@mantine/core";

interface ServiceCardProps {
    title: string;
    services: string[];
    price: string | number;
    icon?: string; // image src
    backgroundImage: string; // image url
    buttonText?: string;
}

function ServiceCard({
    title,
    services,
    price,
    icon,
    backgroundImage,
    buttonText = "I Need This",
}: ServiceCardProps) {
    return (
        <div
            style={{
                position: "relative",
                borderRadius: "2rem",
                border: "2px solid #444",
                padding: "2rem",
                overflow: "hidden",
            }}
            // className={`bg-[url(${backgroundImage})] bg-cover bg-no-repeat bg-center relative`}
            className={`${backgroundImage} bg-cover bg-no-repeat bg-center relative`}
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
                <Text
                    style={{
                        fontSize: "2.5rem",
                        fontWeight: "700",
                        margin: "0 0 10px 0",
                        color: "white",
                    }}
                >
                    {title}
                </Text>
                <Group justify="space-between" align="end">
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "5px",
                        }}
                    >
                        {services.map((service, index) => (
                            <div
                                key={index}
                                style={{
                                    fontSize: "1.25rem",
                                    fontWeight: "600",
                                    color: "white",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <span
                                    style={{
                                        marginRight: "0.75rem",
                                        fontSize: "1.5rem",
                                        fontWeight: "600",
                                    }}
                                >
                                    {index + 1}.
                                </span>
                                {service}
                            </div>
                        ))}
                    </div>

                    <Paper
                        p={"lg"}
                        style={{
                            backgroundColor: "rgba(255, 255, 255)",
                            color: "#333",
                            textAlign: "center",
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
                            {buttonText}
                        </Text>

                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "1rem",
                            }}
                        >
                            <img src={icon ?? "/icons/01.svg"} className="w-10 h-10" alt="Service Icon" />

                            <Text
                            fz={"34"}
                            fw={700}
                            c={"dark"}
                               
                            >
                                {price}
                            </Text>
                        </div>
                    </Paper>
                </Group>
            </div>
        </div>
    );
}

export default ServiceCard;