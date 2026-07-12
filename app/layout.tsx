import "./globals.css";

export const metadata = {
  title: "ANAS | Official Library",
  description: "Stories, Worlds, Art and Music by Anas.",
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