'use strict'

const Chance = require('chance')
const pkg = require('../../package.json')

/**
 * Globals variables.
 * @module globals
 */
const globals = {
  // App name
  NAME: pkg.name,
  // App description
  DESCRIPTION: pkg.description,
  // App version
  VERSION: pkg.version,
  // App env
  ENV: process.env.NODE_ENV || 'development',
  // Auth realm
  AUTH_REALM: process.env.APP_AUTH_REALM,
  // Database URI
  DATABASE_URI: process.env.APP_DATABASE_URI || 'mongodb://mongodb/keeper',
  // Search engine URI
  SEARCH_ENGINE_URI: process.env.APP_SEARCH_ENGINE_URI || 'elasticsearch://elasticsearch/keeper',
  // Stats server URI
  STATS_SERVER_URI: process.env.APP_STATS_SERVER_URI || false,
  // Secret use to encypt token
  TOKEN_SECRET: process.env.APP_TOKEN_SECRET || new Chance().hash({length: 16}),
  // Secret use to encypt token
  TOKEN_PUB_KEY: process.env.APP_TOKEN_PUB_KEY,
  // Allow login to auto create users
  ALLOW_AUTO_CREATE_USERS: process.env.APP_ALLOW_AUTO_CREATE_USERS !== false,
  // Allow admin to remove users
  ALLOW_REMOVE_USERS: process.env.APP_ALLOW_REMOVE_USERS !== false
}

module.exports = globals
