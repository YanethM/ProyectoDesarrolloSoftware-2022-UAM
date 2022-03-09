const express = require('express');
const router = express.Router();

/* Creación de endpoints http://localhost:3000/ */
/* HTTP request: GET */
router.get('/', (req, res) => {
  res.json([
    {
      movieId: 1,
      movie: 'Spiderman',
      version: 3,
    },
    {
      movieId: 2,
      movie: 'X-Man',
      version: 2,
    },
    {
      movieId: 3,
      movie: 'Batman',
      version: 5,
    },
  ]);
});

/* Acceder a un recurso especifico
Endpoint: http://localhost:3000/api/v1/movies/103 */
router.get('/:idMovie', (req, res) => {
  const { idMovie } = req.params;
  res.json({
    idMovie,
    movie: 'Spiderman',
    version: 4,
    info: {
      duration: '120 min',
      sinopsis: 'lorem input',
    },
  });
});

module.exports = router;
