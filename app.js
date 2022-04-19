const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes");

const app = express();
//import routes from router file

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/blood", router);
mongoose.connect(
  "mongodb://localhost:27017/mongo-walk",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) console.log(err);
    app.listen(3000);
  }
);

app.listen(3000, () => {
  console.log(`Is listing on PORT `);
});
