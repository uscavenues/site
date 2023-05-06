import { Poppins, Raleway, Cormorant_Garamond } from "next/font/google";
import "../styles/globals.css";

const raleway = Raleway({ subsets: ["latin"], variable: "--raleway-font" });
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--poppins-font",
});
const cormorant_garamond = Cormorant_Garamond({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--cor-garamond-font",
});

export const metadata = {
  title: "USC Avenues Consulting Group",
  description:
    "USC's First-Ever Consulting Group Focused on Pre-Professional Industries",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={
        raleway.variable +
        " " +
        poppins.variable +
        " " +
        cormorant_garamond.variable
      }
      lang="en"
    >
      <body>{children}</body>
    </html>
  );
}
