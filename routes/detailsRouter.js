const { Router } = require("express");
const { getDetails } = require('../controllers/detailsController');

const detailsRouter = Router();

detailsRouter.get('/:detailID', getDetails);

module.exports = detailsRouter;