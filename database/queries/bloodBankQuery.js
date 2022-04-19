const bloodBank = require("../models/bloodBank");

const getbloodBank = () => bloodBank.find();

const createBloodBank = ({ name, city, contactNumber, listOfDonors }) => {
  {
    name, city, contactNumber, listOfDonors;
  }
};

module.exports = {
  getbloodBank,
  createBloodBank,
};
