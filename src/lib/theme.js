/* theme.ts */
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: {
      50: "#ecfaf5",
      100: "#b1ecd7",
      200: "#65dab0",
      300: "#00bd79",
      400: "#00aa6c",
      500: "#008f5b",
      600: "#00794d",
      700: "#00613e",
      800: "#005235",
      900: "#003c26",
    },
  },
  fonts: {
    heading: "var(--font-rubik)",
    body: "var(--font-rubik)",
  },
});
