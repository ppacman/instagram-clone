/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  styledComponents:
    Boolean |
    {
      displayName: Boolean | undefined,
      ssr: Boolean | undefined
    }
}
module.exports = {
  experimental: {
    forceSwcTransforms: true,
  },
}