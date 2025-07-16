import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Yogotry",
  description: "Try Yoga!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <title>Yogotry</title>
      <link
        rel="stylesheet"
        as="style"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
      />
    </head>
      <body>
        {children}
      </body>
    </html>
  );
}
