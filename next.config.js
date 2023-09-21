/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DB_URI: "mongodb+srv://ahmed:ahmed@edify.9anuaq1.mongodb.net/evertize?retryWrites=true&w=majority",
    NEAXTAUTH_SECRET: "MarketingWebsite"
  }
}

module.exports = nextConfig
