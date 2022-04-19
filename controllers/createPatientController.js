const { createPatient } = require("../database/queries/patientQuery");

const createPatientController = (req, res) => {
  const { name, bloodGroup } = req.body;
  createPatient({ name, bloodGroup })
  .then(() =>res.json({ message: "PatientAdded" })
  .catch(err => console.log(err))
  );
};

module.exports = createPatientController