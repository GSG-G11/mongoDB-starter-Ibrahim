const { Schema, model } = require("mongoose");

const patientSchema = {
  name: { type: "string", required },
  bloodGroup: { type: "string", required: true },
};

const Patient = model("Patient", patientSchema);

module.exports = Patient;
