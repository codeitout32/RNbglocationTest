/* eslint-disable linebreak-style */
/* eslint-disable prettier/prettier */
const path = require("path");

const aliasPathsToResolve = [
  { name: "common", path: path.resolve(__dirname, "../common") },
];

module.exports = {
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: [path.resolve(__dirname, "../common")],
      use: [defaultLoaders.babel],
    });

    // /** Resolve aliases */
    aliasPathsToResolve.forEach((module) => {
      config.resolve.alias[module.name] = module.path;
    });
    return config;
  },
  images: {
    domains: [
      "3.139.241.130",
      "picsum.photos",
      "solshorts.herokuapp.com",
      "shmgr.solshorts.io",
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
    strictNullChecks: false,
  },
  compiler: {
    removeConsole: true,
  },
};
