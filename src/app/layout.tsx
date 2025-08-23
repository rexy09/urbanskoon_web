import { createTheme, mantineHtmlProps, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UrbanSkoon - Quality Car Service You Can Trust",
  description: "Premium car care delivered with speed, precision, and attention to detail. Spotless vehicle wash guaranteed in 30 minutes or less.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = createTheme({
    fontFamily: "Clan Pro, sans-serif",
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
        <link href="https://fonts.cdnfonts.com/css/clan-pro" rel="stylesheet"/>

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
