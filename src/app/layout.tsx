import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shashwat Patel",
  description: "A site for me to tell you about myself",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`relative bg-untrained w-full h-screen antialiased`}>
        <div className="relative top-12 left-8">
          <h1 className="text-6xl font-bold text-neet">Shashwat Patel</h1>
        </div>
        {children}
      </body>
    </html>
  );
}
