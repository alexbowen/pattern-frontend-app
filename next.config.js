const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thumbnailer.mixcloud.com',
        port: '',
        pathname: '/unsafe/',
      },
      {
        protocol: 'https',
        hostname: 'patternradio.com',
        port: '',
        pathname: '/unsafe/',
      },
    ],
  },
}
