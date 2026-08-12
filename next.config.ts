import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Aleena-s-Birthday",
  assetPrefix: "/Aleena-s-Birthday/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
