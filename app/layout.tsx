import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "DramaHub",
    description: "A platform where I track the dramas I watch and share my thoughts on them.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Theme>
                    <div className="min-h-screen bg-background">
                        <Navbar />
                        <div className="">
                            {children}
                        </div>
                        <footer className="border-t border-border py-8 mt-12">
                            <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
                                <p>Copyright © {new Date().getFullYear()} DramaHUB. All rights reserved.</p>
                                <p>Most of the information comes from IMDb and MyDramaList</p>
                            </div>
                        </footer>
                    </div>
                </Theme>
            </body>
        </html>
    );
}
