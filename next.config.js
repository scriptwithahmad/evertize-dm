/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "i.ibb.co",
      "i.pinimg.com",
      "img.freepik.com",
      "encrypted-tbn0.gstatic.com",
    ],
  },
  env: {
    DB_URI:
      "mongodb+srv://ahmed:ahmed@edify.9anuaq1.mongodb.net/evertize?retryWrites=true&w=majority",
      NEAXTAUTH_SECRET: "MarketingWebsite",
  },
};

module.exports = nextConfig;
