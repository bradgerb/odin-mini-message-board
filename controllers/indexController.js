// const db = require('../db');
const db = require ('../db/queries');
const CustomNotFoundError = require("../errors/CustomNotFoundError");

const getMessages = async (req, res) => {

  const messages = await db.getAllMessages();
  console.log(messages);

  if (!messages) {
    throw new CustomNotFoundError("Messages not found");
  }

  res.render('index', {messages: messages});
};

const postMessages = async (req, res) => {
  let messageText = req.body.message;
  let messageUser = req.body.author;

  db.insertMessage(messageText, messageUser, new Date());

  res.redirect("/")
};

module.exports = { getMessages, postMessages };
