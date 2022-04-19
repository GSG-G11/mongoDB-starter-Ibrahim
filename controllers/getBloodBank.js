const { getbloodBank } = require("../controllers/BloodBank");

const getBloodBankController = (req, res) => {
  getbloodBank()
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
};
module.exports = getBloodBankController;
