const { Router } = require("express");
const { getDetails } = require('../controllers/detailsController');

const detailsRouter = Router();

detailsRouter.get('/', getDetails);

module.exports = detailsRouter;