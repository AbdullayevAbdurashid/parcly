import "./globals.css";
import { Providers } from "./providers";
import { fonts } from "@/lib/fonts";
import MobileLayout from "@/components/Layouts";
export default function RootLayout({ children, noMobile }) {
  return (
    <html lang="en" className={fonts.rubik.variable}>
      <body>
        <Providers>
          <MobileLayout>{children}</MobileLayout>
        </Providers>
      </body>
    </html>
  );
}
