import "./globals.css";

export const metadata = {
  title: "AENAR IKUL",
  description: "The Official Archive of Worlds & Stories",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}