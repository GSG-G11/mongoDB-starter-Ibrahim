const Donor = require("../models/donors");

const getDonor = () => Donor.find();
const createDonor = ({ name, bloodGroup, contactNumber, bloodBank }) =>
  Donor.create({ name, bloodGroup, contactNumber, bloodBank });

module.exports = { getDonor, createDonor };
