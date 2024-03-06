/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";
const nextConfig = {
  output: "export",
  assetPrefix: !debug ? '/sslog/' : '',
  images: {
    unoptimized: true, // 이미지 정상적으로 불러올 수 있도록함
  },
  trailingSlash: true,
};

export default nextConfig;
