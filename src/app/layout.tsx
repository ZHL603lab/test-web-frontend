import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/(asset)/globals.css";
import NavBar from "@/app/(components)/NavBar";
import Footer from "@/app/(components)/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "综合楼开发小组 - 刷题网站",
  description: "由综合楼开发小组开发的刷题网站",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <div className="bg-white">
            <header className="fixed bg-white shadow-md inset-x-0 top-0 z-50">
              <NavBar />
            </header>
            <main className="py-24">
              {children}
            </main>
            <footer>
              <Footer />
            </footer>
          </div>
        </body>
      </html>
    </>
  );
}
