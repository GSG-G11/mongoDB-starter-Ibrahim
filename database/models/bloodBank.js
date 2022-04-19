const { Schema, model } = require("mongoose");

const bloodBankSchema = new Schema({
  name: { type: "string", required: true },
  city: { type: "string", required: true },
  constactNumber: { type: "number", required: true },
  listOfDonors: [{ type: Schema.Types.ObjectId, ref: "donors" }],
});

const BloodBank = model("BloodBank", bloodBankSchema);

module.exports = BloodBank;
