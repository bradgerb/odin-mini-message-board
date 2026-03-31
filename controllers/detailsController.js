const db = require("../db");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

const getDetails = async (req, res) => {

    const { detailID } = req.params;
    const messages = await db.getMessages();

    if (!detailID) {
        throw new CustomNotFoundError("Message details not found");
    }

    if (!messages) {
        throw new CustomNotFoundError("Messages not found");
    }

  res.render('details', {detailID: detailID, messages: messages});
};

module.exports = { getDetails };