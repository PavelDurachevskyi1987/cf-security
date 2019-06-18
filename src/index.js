/**
 * CF Securoty module
 * @module @nitra/cf-security
 */

const checkEnv = require('@47ng/check-env').default
checkEnv({ required: ['X_NITRA_CF_KEY'] })

/**
 * Represents a book.
 *
 * @param {string} cfKey - The value for check
 * @return {boolean} if value equal env
 */
exports.cfSecurity = function (cfKey) {
  return cfKey === process.env['X_NITRA_CF_KEY']
}
