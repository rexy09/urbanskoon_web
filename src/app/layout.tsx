import { createTheme, mantineHtmlProps, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mokko",
  description: "Engineering Excellence for Energy Infrastructure",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = createTheme({
    fontFamily: "Inter",
    // breakpoints: {
    //   xs: '30em',
    //   sm: '48em',
    //   md: '64em',
    //   lg: '74em',
    //   xl: '90em',
    // },
  });
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet" />
      </head>
      <body>
        <MantineProvider theme={theme}>
          {/* <HeaderMenu /> */}
          {children}
          {/* <FooterLinks /> */}
        </MantineProvider>
      </body>
    </html>
  );
}
