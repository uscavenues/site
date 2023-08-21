import Head from "next/head";
import { Sora } from "next/font/google";
import "../styles/globals.css";
import StyledComponentsRegistry from "./registry";

const sora = Sora({
  weight: "variable",
  subsets: ["latin"],
  variable: "--sora-font",
});

export const metadata = {
  title: "USC Avenues Consulting Group",
  description:
    "USC's first-ever consulting group focusing on pre-professional industries and beyond through project-building",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={sora.variable} lang="en">
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </Head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
