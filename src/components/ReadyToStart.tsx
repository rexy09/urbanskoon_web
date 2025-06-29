import { Container, Space, Center, Group, Button, Text } from "@mantine/core";

function ReadyToStart() {
  return (
    <Container size="xl">
      <div
        style={{
          backgroundColor: "#FC6111",
        //   maxHeight: "400px",
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
  );
}

export default ReadyToStart;
