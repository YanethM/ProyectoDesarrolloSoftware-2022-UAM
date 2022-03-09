const express = require('express');
const moviesRouter = require('./movies.router');
const fakersRouter = require('./fakers.router');
const departamentsRouter = require('./departaments.router');


function routerApi(my_app) {
  const router = express.Router();
  /* Parte estática del endpoint: http://localhost:3000/api/v1 */
  my_app.use('/api/v1', router);
  /* Parte estática más la dinamica del endpoint: http://localhost:3000/api/v1/movies */
  router.use('/movies', moviesRouter);
  /* Parte estática más la dinamica del endpoint: http://localhost:3000/api/v1/fakers */
  router.use('/fakers', fakersRouter);
  /* Endpoint: http://localhost:3000/api/v1/departaments */
  router.use('/departaments', departamentsRouter);

}

module.exports = routerApi;
