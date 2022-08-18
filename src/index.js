import getLogger from '@nitra/bunyan/trace'
import checkEnv from '@nitra/check-env'
checkEnv(['X_NITRA_CF_KEY'])

/**
 * Check request for Nitra security rules
 *
 * @param {object} req - ApolloServer or Express Request for check
 * @return {boolean} if check passed
 */
export const cfSecurity = req => {
  const log = getLogger(req)

  if (typeof req.headers === 'undefined') {
    log.info('Request without headers')
    return false
  }

  if (typeof req.headers['x-nitra-cf-key'] === 'undefined') {
    log.info('Nitra key not exist in request')
    return false
  }

  if (req.headers['x-nitra-cf-key'] === 0) {
    log.info('Empty Nitra key in headers request')
    return false
  }

  if (req.headers['x-nitra-cf-key'] !== process.env.X_NITRA_CF_KEY) {
    log.info('Not equal Nitra key')
    return false
  }

  return true
}
