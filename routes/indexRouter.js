const { Router } = require("express");
const { getMessages } = require('../controllers/indexController');

const indexRouter = Router();

indexRouter.get('/', getMessages);
indexRouter.post('/new', getMessages);

module.exports = indexRouter;