// app/providers.tsx
"use client";
import { theme } from "@/lib/theme";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
