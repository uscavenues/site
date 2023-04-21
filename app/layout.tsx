import { Poppins, Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({ subsets: ["latin"], variable: "--raleway-font" });
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--poppins-font",
});

export const metadata = {
  title: "USC Avenues Consulting Group",
  // TODO: replace with official description
  description: "blah",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={raleway.variable + " " + poppins.variable} lang="en">
      <body>{children}</body>
    </html>
  );
}
