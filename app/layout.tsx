import "./globals.scss";

export const metadata = {
  title: "Vipan Kumar | Frontend Portfolio",
  description:
    "Frontend Portfolio",
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