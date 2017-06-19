/* eslint-disable func-names */
const logger = require('boldr-utils/lib/logger');

module.exports = function handleErrors(task) {
  return async function(args, options) {
    try {
      await task(args, options);
    } catch (error) {
      logger.error(error.message);
    }
  };
}
