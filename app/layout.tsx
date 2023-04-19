import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
