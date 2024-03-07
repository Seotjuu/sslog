/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";
const nextConfig = {
  assetPrefix: !debug ? '/sslog/' : '',
};

export default nextConfig;
