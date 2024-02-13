"use client";
import "./globals.css";
import { Providers } from "./providers";
import { fonts } from "@/lib/fonts";
import MobileLayout from "@/components/Layouts/MobileLayout";
import DesktopLayout from "@/components/Layouts/DesktopLayout";
import { useMediaQuery } from "@chakra-ui/react";

export default function RootLayout({ children, noMobile }) {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)", {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });

  return (
    <html lang="en" className={fonts.rubik.variable}>
      <body>
        <Providers>
          {isLargerThan1280 ? (
            <DesktopLayout>{children}</DesktopLayout>
          ) : (
            <MobileLayout>{children}</MobileLayout>
          )}
        </Providers>
      </body>
    </html>
  );
}
