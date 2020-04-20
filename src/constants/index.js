const { REACT_APP_API_ENV } = process.env

export const URLS = {
  development: ''
}

export const setEnvironment = environment => {
  switch (environment) {
    case 'production':
      return URLS.production
    case 'staging':
      return URLS.staging
    case 'development':
      return URLS.development
    default:
      return URLS.development
  }
}
let _ROOT_URL = setEnvironment(REACT_APP_API_ENV)

export const ROOT_URL = _ROOT_URL
