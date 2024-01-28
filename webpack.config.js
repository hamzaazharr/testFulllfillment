// const TerserPlugin = require('terser-webpack-plugin');

// module.exports = {
//     optimization: {
//       minimize: false,
//       minimizer: [
//         new TerserPlugin({
//           cache: true,
//           cacheKeys: (defaultCacheKeys, file) => {
//             defaultCacheKeys.myCacheKey = 'myCacheKeyValue';
   
//             return defaultCacheKeys;
//           },
//         }),
//       ],
//     },
//   };