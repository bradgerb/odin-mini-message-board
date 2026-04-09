const { Router } = require("express");
const { getMessages, postMessages } = require('../controllers/indexController');
const db = require('../db/queries');

const indexRouter = Router();

indexRouter.get('/', getMessages);
indexRouter.post('/new', postMessages);

module.exports = indexRouter;