const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  
  pwa: {
    registerType: 'autoUpdate',
    includeAssets: ['favicon.ico','icons/*'],
    name: 'TicketService',
    themeColor: '#000000',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    icons: [
      {
        src: '/icons/pwa-72x72.png',
        sizes: '72x72',
        type: 'image/png'
      },
      {
        src: '/icons/pwa-96x96.png',
        sizes: '96x96',
        type: 'image/png'
      },
      {
        src: '/icons/pwa-144x144.png',
        sizes: '144x144',
        type: 'image/png'
      },
      {
        src: '/icons/pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/icons/pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      },
    ]
  }
})

