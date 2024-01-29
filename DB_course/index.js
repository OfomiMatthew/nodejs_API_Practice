const mongoose = require("mongoose");

// creating a connection
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

// creating a schema
const userSchema = mongoose.Schema({
  name: String,
  age: Number,
});

// create a model - object that gives a functionality that helps you to work on the collections
// model is a connection between your program and collection

const userModel = mongoose.model("users", userSchema);

// inserting data
let user = {
  name: "Ray",
  age: 25,
};

userModel
  .create(user)
  .then((data) => {
    console.log(data);
    console.log("data added");
  })
  .catch((err) => {
    console.log(err.message);
  });
