
import ReactLenis from "lenis/react";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
      <body
        className=""
      >
        {children}
      </body>
      </ReactLenis>
    </html>
  );
}
