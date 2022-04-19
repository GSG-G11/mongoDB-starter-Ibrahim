const { createBloodBank } = require("../database/queries/bloodBankQuery");

const createBloodBankController = (req, res) => {
  const { name, city, contactNumber, listOfDonors } = req.body;

  createBloodBank({ name, city, contactNumber, listOfDonors }).then(() =>
    res.json({ message: "Bank Added!" }).catch((err) => console.log(err))
  );
};

module.exports = createBloodBankController;
