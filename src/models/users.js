const { Schema, model } = require("mongoose");

const usersSchema = new Schema(
  {
    Nickname: {
      type: String,
      required: true
    },
    Email: {
      type: String,
      required: true
    },
    Password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);
module.exports = model("Users", usersSchema);