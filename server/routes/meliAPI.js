const express = require('express');
const MeliService = require('../services/meliService');

function MeliApi(app) {
  const router = express.Router();
  app.use('/api', router);
  const meliService = new MeliService();

  router.get('/items', async (req, res, next) => {
    const { q } = req.query;

    try {
      const items = await meliService.search(q);
      res.status(200).json(items);
    } catch (err) {
      next(err);
    }
  });

  router.get('/items/:id?', async (req, res, next) => {
    const { id } = req.params;

    try {
      const item = await meliService.getItem(id);
      res.status(200).json(item);
    } catch (err) {
      next(err);
    }
  });
}

module.exports = MeliApi;
