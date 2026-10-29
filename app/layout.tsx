import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vk-dev.eu"),
  title: "VK Dev — WordPress websites for small businesses",
  description:
    "I design and build fast, easy-to-manage WordPress websites for small businesses and freelancers. Get a clear quote within 24 hours.",
  icons: { icon: "/icon.png" },
  openGraph: {
    title: "VK Dev — WordPress websites for small businesses",
    description:
      "Fast, clean, easy-to-manage WordPress websites built for your business.",
    url: "https://vk-dev.eu",
    siteName: "VK Dev",
    type: "website",
  },
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
