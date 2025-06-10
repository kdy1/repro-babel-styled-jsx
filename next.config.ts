import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledJsx: {
      useLightningcss: true,
    }
  }
};

export default nextConfig;
