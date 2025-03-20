import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shashwat Patel",
  description: "A site for me to tell you about myself",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <div className="w-full max-w-3xl mx-auto">
          <div className="m-4 text-white text-center">
            <p>
              <span className="text-3xl">Shashwat Patel</span>
              <br />
            </p>
            <div className="flex flex-row justify-center gap-8">
              <Link href={"/"}>Home</Link>
              <Link href={"/about"}>About myself</Link>
              <Link href={"/blog"}>Blog</Link>
            </div>
          </div>
          <main className="">{children}</main>
        </div>
      </body>
    </html>
  );
}
