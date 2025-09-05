import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://zareczynymarzen.pl"), // Pamiętaj, aby podmienić na prawdziwą domenę!

    title: "Zaręczyny Marzeń",

    description: "Zorganizuj z nami idealne zaręczyny. Zaplanujemy wyjątkowy, niezapomniany moment bez stresu.",

    openGraph: {
        title: "Zaręczyny Marzeń",
        description: "Zaplanujemy wyjątkowe, niezapomniane zaręczyny bez stresu.",
        url: "https://zareczynymarzen.pl",
        siteName: "Zaręczyny Marzeń",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Zdjęcie pary podczas romantycznych zaręczyn.",
            },
        ],
        locale: "pl_PL",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Zaręczyny Marzeń",
        description: "Zaplanujemy wyjątkowe, niezapomniane zaręczyny bez stresu.",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pl">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        </body>

        {/* Tag Google Ads z ID na stałe w kodzie */}
        <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=AW-17526203888"
        />
        <Script id="google-ads-init" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17526203888');
        `}
        </Script>
        </html>
    );
}