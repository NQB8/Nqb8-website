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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NQB8",
  url: "https://nqb8.tech",
  logo: "https://nqb8.tech/images/nqb8-icon-logo.png",
  description:
    "We build fast, reliable web apps for startups and SMEs—designed to launch quickly, scale smoothly, and convert users into customers.",
  email: "hello@nqb8.tech",
  foundingDate: "2025",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@nqb8.tech",
    contactType: "sales",
  },
  offers: {
    "@type": "Offer",
    itemOffered: [
      {
        "@type": "Service",
        name: "Custom Development",
        description:
          "SaaS platforms, admin dashboards, internal tools, and marketing websites.",
      },
      {
        "@type": "Service",
        name: "UI/UX Design",
        description:
          "Wireframes, prototypes, and polished interfaces designed around your users' needs.",
      },
      {
        "@type": "Service",
        name: "Product Strategy",
        description:
          "MVP planning, feature prioritization, and roadmapping.",
      },
      {
        "@type": "Service",
        name: "Brand Experience",
        description:
          "Websites and digital branding that communicate who you are clearly.",
      },
    ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <style>{`
html {
  font-family: ${figtree.style.fontFamily};
  --font-sans: ${figtree.variable};
  --font-mono: ${firaCode.variable};
  --font-instrument-serif: ${instrumentSerif.variable};
}
        `}</style>
      </head>
      <body className={`${figtree.variable} ${firaCode.variable} ${instrumentSerif.variable}`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-black focus:px-4 focus:py-2 focus:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          Skip to content
        </a>
        <main id="main-content">{children}</main>
      </body>
    </html>
  )
}
