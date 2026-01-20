import createMDX from "@next/mdx"

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

const withMDX = createMDX({
  // Add markdown plugins here if needed
})

export default withMDX(nextConfig)
