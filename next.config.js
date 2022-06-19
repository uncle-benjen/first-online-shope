// /** @type {import('next').NextConfig} */
// const nextConfig = {
  // reactStrictMode: true,
// }

// module.exports = nextConfig
module.exports = {
  experimental: {
    outputStandalone: true,
    reactStrictMode: true,
    swcFileReading: false
  },
  images: {
    // loader: 'akamai',
    // path: '',
    // disableStaticImages: false,
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