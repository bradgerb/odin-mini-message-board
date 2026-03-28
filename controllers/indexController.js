const db = require('../db');
const CustomNotFoundError = require("../errors/CustomNotFoundError");

const getMessages = async (req, res) => {

  const messages = await db.getMessages();

  if (!messages) {
    throw new CustomNotFoundError("Messages not found");
  }

  res.render('index', {messages: messages});
};

module.exports = { getMessages };
