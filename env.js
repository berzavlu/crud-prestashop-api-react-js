module.exports = {
  development: {
    NODE_ENV: 'development',
    PORT: 3000,
    DOMAIN_API: 'http://localhost.com/api/',
    WEBSERVICE_KEY: 'L774Y4FASS9M2WVHEATFK27YJNN9HRGZ',
    ASSETS_FOLDER: '/assets/',
  },
  production: {
    NODE_ENV: 'production',
    PORT: 8080,
    DOMAIN_API: 'https://tusitioweb.com/api/',
    WEBSERVICE_KEY: 'Y994Y4FASD9E2WFGEARFK47YJNN9HRPO',
    ASSETS_FOLDER: '/assets/',
  },
}
