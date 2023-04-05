const NextFederationPlugin = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  webpack: (config, options) => {
    const location = options.isServer ? 'ssr' : 'chunks';

    config.plugins.push(
      new NextFederationPlugin({
        name: 'remoteNx',
        remotes: {
          remoteNx: `remoteNx@https://mellifluous-entremet-234503.netlify.app/_next/static/${location}/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
      })
    );

    return config;
  },
};

module.exports = nextConfig;
