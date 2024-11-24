import type { NextConfig } from "next";

const nextConfig = {
  webpack(config: NextConfig) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  },

  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },

  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
};

module.exports = nextConfig;
