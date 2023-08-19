import { Sora } from "next/font/google";
import "../styles/globals.css";

const sora = Sora({
  weight: "variable",
  subsets: ["latin"],
  variable: "--sora-font",
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
    <html className={sora.variable} lang="en">
      <body>{children}</body>
    </html>
  );
}
