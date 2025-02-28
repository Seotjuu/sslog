/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";
const nextConfig = {
  output: "standalone",
  trailingSlash: true,
};

export default nextConfig;
