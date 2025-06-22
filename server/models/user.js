import mongoose from "mongoose";

const userSchema = mongoose.Schema({
      name: { type : String},
      role: { type : String},
      age: { type : Number},
});

export const userModal = mongoose.model("register",userSchema); 