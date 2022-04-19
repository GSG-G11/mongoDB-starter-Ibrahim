const express = require("express");

const {
  getBloodBankController,
  getDonorController,
  getPatientContoller,
  createBloodBankController,
  createPatientController,
  createDonorContorller,
} = require("../controllers");

const router = express.Router();

router.get("/donors", getDonorController);
router.post("/donors", createDonorContorller);

router.get("/bloodBanks", getBloodBankController);
router.post("/bloodBanks", createBloodBankController);

router.get("/patient", getPatientContoller);
router.post("/patient", createPatientController);


module.exports = router