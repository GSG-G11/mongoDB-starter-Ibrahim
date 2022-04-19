const createBloodBankController = require("./createBloodBankController");
const createDonorContorller = require("./createDonorController");
const createPatientController = require("./createPatientController");
const getBloodBankController = require("./getBloodBank");
const getDonorController = require("./getDonorController");
const getPatientContoller = require("./getPatientController");

module.exports = {
  getBloodBankController,
  getDonorController,
  getPatientContoller,
  createBloodBankController,
  createPatientController,
  createDonorContorller,
};
