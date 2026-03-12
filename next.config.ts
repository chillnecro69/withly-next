import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/aida-public/**",
      },
    ],
  },

  turbopack: {
    rules: {
      "node_modules/.prisma/**/*.ts": {
        loaders: ["swc-loader"],
        as: "*.ts",
      },
    },
  },

  serverExternalPackages: ["@prisma/adapter-better-sqlite3", "better-sqlite3"],
};

export default nextConfig;