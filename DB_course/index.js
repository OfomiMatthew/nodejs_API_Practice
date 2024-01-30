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
  name: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    required: true,
    min: 20,
    max: 100,
  },
},{timestamps:true});

// create a model - object that gives a functionality that helps you to work on the collections
// model is a connection between your program and collection

const userModel = mongoose.model("users", userSchema);

// inserting data

let user = {
  name: "Thea",
  age: 45,
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

// fetching data
// userModel
//   .find().sort({age:-1})
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// delete operation
// userModel
//   .deleteOne({ age: 100 })
//   .then((info) => {
//     console.log(info);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// update operation
// userModel
//   .updateOne({ name: "Oliver" }, { age: 44 })
//   .then((info) => {
//     console.log(info);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
