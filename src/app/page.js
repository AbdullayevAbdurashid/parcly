"use client";
import Hero from "@/components/Hero";
import { Container, Flex } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
export default function Home() {
  return (
    <Container maxW={{ base: "100vw", xl: "70vw" }}>
      <Flex direction={"column"} gap={10} w={"100%"}>
        <Hero />
      </Flex>
    </Container>
  );
}
