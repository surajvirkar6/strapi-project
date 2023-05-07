'use strict';

/**
 * home-feed service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-feed.home-feed');
