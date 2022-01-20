const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
//const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  firstName:{
    type: String,
    required:true
  },
  lastName: {
    type: String, 
    required: true
  },
  email: {
     type: String, 
     required: true, 
     unique: true 
    },
  password: { 
    type: String, 
    required: true 
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
  
  
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);

};

userSchema.pre("save", async function (next) {
  if(!this.isModified("password")){
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
})



module.exports = mongoose.model("User",userSchema);
//const User = mongoose.model("User", userSchema);
//mongoose.model.exports = User;

/*const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName:{type: String, required:true},
    lastName: {type: String, required: true},
    email:{ type: String, required: true},
});

module.exports = mongoose.model("User",userSchema);*/