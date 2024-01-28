// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const TerserPlugin = require('terser-webpack-plugin')
const DeepScopePlugin = require('webpack-deep-scope-plugin').default;

module.exports = {
    // chainWebpack(config) {
    //     config.plugin('scope')
    //       .use(DeepScopePlugin, [/styles\.b8185833\.js/]); 
    //   }
        // chainWebpack(config) {
        //   config.optimization.minimize({
        //     minimizer: [
        //       '...', // any other minimizers
        //       {
        //         apply: (compiler) => {
        //           // terser plugin logic
        //         } 
        //       }
        //     ] 
        //   })
        // }
    //   ,
  chainWebpack(config) {
    config.optimization
      .minimizer('terser')
      .use(TerserPlugin, [{
        terserOptions: {
          exclude: [/styles\.b8185833\.js/]  
        }
 } ])},
 plugins: [
    {
      use: '@gridsome/plugin-critical',
      options: {
        paths: ['/'],
        width: 1300,
        height: 900
      }
    }
  ]
  } 
//   module.exports = {
   
//   }
