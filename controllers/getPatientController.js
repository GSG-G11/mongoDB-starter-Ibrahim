const { getPatientAll } = require("../database/queries/patientQuery");

const getPatientContoller = (req, res) => {
  getPatientAll()
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
};

module.exports = getPatientContoller
