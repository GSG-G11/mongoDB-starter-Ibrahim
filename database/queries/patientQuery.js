const Patient = require("../models/patients");

const getPatientAll = ({ name, bloodGroup }) =>
  Patient.find({ name, bloodGroup });

const createPatient = ({ name, bloodGroup }) =>
  Patient.create({ name, bloodGroup });

module.exports = {
    getPatientAll,
    createPatient,
};
