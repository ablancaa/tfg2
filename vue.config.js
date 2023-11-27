const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  // ...other vue-cli plugin options...
  pwa: {
    name: 'TicketService',
    themeColor: '#000000',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
   // workboxPluginMode: 'InjectManifest',
   // workboxOptions: {
      // swSrc is required in InjectManifest mode.
     // swSrc: 'dev/sw.js',
      // ...other Workbox options...
   // }
  }
}
