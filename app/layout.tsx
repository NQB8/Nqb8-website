import type React from "react"
import type { Metadata } from "next"
import { Figtree } from "next/font/google"
import { Fira_Code } from "next/font/google"
import { Instrument_Serif } from "next/font/google"
import "./globals.css"

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
})

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://nqb8.tech"),
  title: {
    default: "NQB8 - Software Development for Growing Businesses",
    template: "%s | NQB8",
  },
  description:
    "We build fast, reliable web apps for startups and SMEs—designed to launch quickly, scale smoothly, and convert users into customers.",
  keywords: [
    "software development",
    "web development",
    "startup",
    "SME",
    "SaaS",
    "custom software",
    "React",
    "Next.js",
    "UI/UX design",
    "product strategy",
  ],
  authors: [{ name: "NQB8", url: "https://nqb8.tech" }],
  creator: "NQB8",
  publisher: "NQB8",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nqb8.tech",
    siteName: "NQB8",
    title: "NQB8 - Software Development for Growing Businesses",
    description:
      "We build fast, reliable web apps for startups and SMEs—designed to launch quickly, scale smoothly, and convert users into customers.",
    images: [
      {
        url: "/images/nqb8-icon-logo.png",
        width: 512,
        height: 512,
        alt: "NQB8 Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NQB8 - Software Development for Growing Businesses",
    description:
      "We build fast, reliable web apps for startups and SMEs—designed to launch quickly, scale smoothly, and convert users into customers.",
    images: ["/images/nqb8-icon-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-light-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" style={{ colorScheme: "dark" }}>
      <head>
        <meta name="theme-color" content="#0a0a0a" />
        <style>{`
html {
  font-family: ${figtree.style.fontFamily};
  --font-sans: ${figtree.variable};
  --font-mono: ${firaCode.variable};
  --font-instrument-serif: ${instrumentSerif.variable};
}
        `}</style>
      </head>
      <body className={`${figtree.variable} ${firaCode.variable} ${instrumentSerif.variable}`}>{children}</body>
    </html>
  )
}
