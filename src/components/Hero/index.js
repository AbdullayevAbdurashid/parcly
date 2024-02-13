"use client";
import React from "react";
import {
  Container,
  Stack,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Flex,
  Heading,
  chakra,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Image } from "@chakra-ui/next-js";
const images = [
  {
    url: "/images/hero/image-1.png",
    heading: "Get parcels as easy as before",
    caption: "The innovative way of sending parcel",
  },
  {
    url: "/images/hero/image-2.png",
    heading: "Get parcels as easy as before",
    caption: "The innovative way of sending parcel",
  },
];

export default function Hero() {
  return (
    <Box
      w={{ base: "100vw", xl: "auto" }}
      bg={"linear-gradient(to right, #332C3D, #1565c0)"}
      borderRadius={{ base: "none", xl: "xl" }}
    >
      <Stack
        align={"center"}
        spacing={{ base: 4, xl: 5 }}
        p={{ base: 4, xl: 14 }}
        direction={{ base: "column", xl: "row" }}
      >
        <Slider images={images} />
        <ParcelForm />
      </Stack>
    </Box>
  );
}

function Slider({ images }) {
  const [sliderRef] = useKeenSlider();

  return (
    <Box w={{ base: "100%", xl: "50%" }} mr={{ base: 0, md: 8 }}>
      <Flex ref={sliderRef} className="keen-slider">
        {images.map((image, index) => (
          <Box
            gap={10}
            key={index}
            className={`keen-slider__slide number-slide${index + 1}`}
          >
            <Image
              display={{ base: "none", md: "block" }}
              height={400}
              quality={100}
              width={600}
              priority={true}
              src={image.url}
              alt={`Image ${index + 1}`}
            />
            <Box mt={4} textAlign={{ base: "center", md: "start" }}>
              <Heading color={"white"}>{image.heading}</Heading>
              <Text fontSize={"xl"} color={"white"}>
                {image.caption}
              </Text>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

function ParcelForm() {
  const initialValues = {
    senderName: "",
    recipientName: "",
    parcelContent: "",
  };

  const handleSubmit = (values, actions) => {
    // Handle form submission, e.g., save to local storage
    console.log("Form values:", values);
    actions.setSubmitting(false);
  };

  return (
    <Box flex={4}>
      <Box height={"500px"} bg={"white"} p={10} borderRadius={"xl"}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <Field name="senderName">
                {({ field }) => (
                  <FormControl>
                    <FormLabel htmlFor="senderName">Sender Name</FormLabel>
                    <Input
                      {...field}
                      id="senderName"
                      placeholder="Enter sender name"
                    />
                  </FormControl>
                )}
              </Field>
              <Field name="recipientName">
                {({ field }) => (
                  <FormControl>
                    <FormLabel htmlFor="recipientName">
                      Recipient Name
                    </FormLabel>
                    <Input
                      {...field}
                      id="recipientName"
                      placeholder="Enter recipient name"
                    />
                  </FormControl>
                )}
              </Field>
              <Field name="parcelContent">
                {({ field }) => (
                  <FormControl>
                    <FormLabel htmlFor="parcelContent">
                      Parcel Content
                    </FormLabel>
                    <Input
                      {...field}
                      id="parcelContent"
                      placeholder="Enter parcel content"
                    />
                  </FormControl>
                )}
              </Field>
              <Button
                mt={4}
                background={"primary.500"}
                color="white"
                isLoading={isSubmitting}
                type="submit"
                disabled={isSubmitting}
              >
                Send Parcel
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}
