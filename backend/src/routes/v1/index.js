const express = require('express');
const categoryRoute = require('./category.route');
const gameItemRoute = require('./gameItem.route');
const imageRoute = require('./image.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/categories',
    route: categoryRoute,
  },
  {
    path: '/game-items',
    route: gameItemRoute,
  },
  {
    path: '/images',
    route: imageRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
