const { createDonor } = require("../database/queries/donorQuery");

const createDonorContorller = (req, res) => {
  const { name, bloodGroup, contactNumber, bloodBank } = req.body;
  createDonor({ name, bloodGroup, contactNumber, bloodBank }).then(() =>
    res.json({ message: "donor Added!" })
  );
};

module.exports = createDonorContorller
