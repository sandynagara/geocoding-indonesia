/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: '/geocoder2',  
  //basePath:'/geocoder2',
  env: {
    SERVER: process.env.SERVER,
  },
  images: {
    domains: ["https://ppids-ugm.com"],
    path: "/geocoder2/_next/image",
  }
}

module.exports = nextConfig
