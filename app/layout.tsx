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
  title: "NQB8 - Software Development for Growing Businesses",
  description: "We build fast, reliable web apps for startups and SMEs—designed to launch quickly, scale smoothly, and convert users into customers.",
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
