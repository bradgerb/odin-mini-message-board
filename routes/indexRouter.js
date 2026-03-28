const { Router } = require("express");
const { getMessages } = require('../controllers/indexController');

const indexRouter = Router();

console.log('test router');

indexRouter.get('/', getMessages);

module.exports = indexRouter;