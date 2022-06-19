/** @type {import('next').NextConfig} */
// const nextConfig = {
  // reactStrictMode: true,
// }

// module.exports = nextConfig
module.exports = {
  experimental: {
    outputStandalone: true,
  reactStrictMode: true,

  },
}



// module.exports = {
//   /* ... */
//   webpack(config) {
//     config.plugins = config.plugins.filter(plugin => {
//       return plugin.constructor.name !== 'ReactFreshWebpackPlugin';
//     });

//     return config;
//   },
// };