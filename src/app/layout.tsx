import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "A La Mama",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${font.className} antialiased flex flex-col w-screen h-screen`}
            >
                <NavBar />
                <div className="flex flex-col h-full max-h-full overflow-y-auto">
                    <main className="flex-grow">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
