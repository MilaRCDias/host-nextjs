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
  compiler: {styledComponents: true},
  transpilePackages: ['@medlify/platform.shell'],
  webpack: (config, options) => {
    const location = options.isServer ? 'ssr' : 'chunks';

    config.plugins.push(
      new NextFederationPlugin({
        name: 'remoteNx',
        remotes: {
          //remoteNx: `remoteNx@https://mellifluous-entremet-234503.netlify.app/_next/static/${location}/remoteEntry.js`,
          remoteNx: `remoteNx@http://localhost:5005/_next/static/${location}/remoteEntry.js`,
          /*     RemoteRCT:
            'RemoteRCT@https://whimsical-taiyaki-0a9494.netlify.app/remoteEntry.js', */
        },
        filename: 'static/chunks/remoteEntry.js',
        shared: {
          'styled-components': {singleton: true}, '@medlify/platform.shell':{singleton:true}
        },
        extraOptions: {
          automaticAsyncBoundary: true,
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
