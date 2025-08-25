import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const syne = Inter({
    subsets: ["latin"],
    display: "block",
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://pjreyes.vercel.app"),
    title: "prince jeruh reyes portfolio",
    description: "prince jeruh reyes portfolio",
    generator: "Next.js",
    applicationName: "prince jeruh reyes portfolio",
    keywords: [
        "prince jeruh reyes portfolio",
    ],
    colorScheme: "dark",
    openGraph: {
        title: "prince jeruh reyes portfolio",
        description: "prince jeruh reyes portfolio",
        siteName: "prince jeruh reyes portfolio",
        images: [
            {
                url: "./public/avatar.jpg",
                width: 1200,
                height: 630,
                alt: "prince jeruh reyes portfolio",
            },
        ],
        locale: "en-US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "prince jeruh reyes portfolio",
        description: "prince jeruh reyes portfolio",
        creator: "prince jeruh reyes",
        creatorId: "",
        images: ["./public/metadata.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body
                className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
            >
                {children}
            </body>
        </html>
    );
}
