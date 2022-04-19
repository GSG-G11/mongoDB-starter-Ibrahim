const { Schema, model } = require("mongoose");

const donorSchema = new Schema({
  name: { type: "string", required },
  bloodGroup: { type: "string", required: true },
  contactNumber: { type: "number", required: true },
  bloodBank: [{ type: Schema.Types.ObjectId, ref: "bloodBank" }],
});

const Donor = model("Donor", donorSchema);

module.exports = Donor;
