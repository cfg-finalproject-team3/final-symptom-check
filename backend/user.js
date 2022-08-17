const mongoose = require("mongoose");
const user = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  tests_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "test",
  },
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("User", user);
