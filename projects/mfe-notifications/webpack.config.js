const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [
    '@shared'
  ]);

module.exports = {
  output: {
    uniqueName: "mfeNotifications",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },

        // For remotes (please adjust)
        name: "mfeNotifications",
        filename: "remoteEntry.js",
        exposes: {
            './Module': './projects/mfe-notifications/src/app/notifications/notifications.module.ts',
        },        
        
        // For hosts (please adjust)
        // remotes: {
        //     "shell": "http://localhost:4200/remoteEntry.js",
        //     "mfeCart": "http://localhost:4201/remoteEntry.js",
        //     "mfeProfile": "http://localhost:4202/remoteEntry.js",
        //     "mfeHeader": "http://localhost:4203/remoteEntry.js",

        // },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

          ...sharedMappings.getDescriptors()
        })
        
    }),
    sharedMappings.getPlugin()
  ],
};
