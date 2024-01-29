const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://ofomimatthew7:jerryhope1994@cluster0.e4jquae.mongodb.net/thorabcodes_api_dev_demo"
  )
  .then(() => {
    console.log("connection successfully");
  })
  .catch(() => {
    console.log(err);
  });
