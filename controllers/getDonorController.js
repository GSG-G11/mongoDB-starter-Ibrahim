const { getDonor } = require("../database/queries/donorQuery");

const getDonorController = (req, res) => {
  getDonor()
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
};

module.exports = getDonorController;
