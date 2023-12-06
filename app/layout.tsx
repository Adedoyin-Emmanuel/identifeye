import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IdentifEye",
  description: "IdentifEye",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="mytheme">
      <body className="">{children}</body>
    </html>
  );
}
