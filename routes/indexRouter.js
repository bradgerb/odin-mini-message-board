const { Router } = require("express");
const { getMessages } = require('../controllers/indexController');
const db = require('../db');

const indexRouter = Router();

indexRouter.get('/', getMessages);
indexRouter.post('/new', 
    (req, res)=> {
        let messageText = req.body.message;
        let messageUser = req.body.author;

        db.messages.push({ text: messageText, user: messageUser, added: new Date() });

        res.redirect("/")
    }
);

module.exports = indexRouter;