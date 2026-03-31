const db = require("../db");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

const getDetails = async (req, res) => {

    const { detailID } = req.params;

    if (!detailID) {
        throw new CustomNotFoundError("Message details not found");
    }

  res.render('details', {detailID: detailID});
};

module.exports = { getDetails };