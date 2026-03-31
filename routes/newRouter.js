const { Router } = require("express");
const { getNew } = require('../controllers/newController');

const newRouter = Router();

newRouter.get('/', getNew);
newRouter.post('/test', getNew);

module.exports = newRouter;