// const CustomNotFoundError = require("../errors/CustomNotFoundError");

const getNew = async (req, res) => {
  res.render('new');
};

module.exports = { getNew };
