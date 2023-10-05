const mongoose = require("mongoose");
var bcrypt = require('bcrypt-nodejs');
const { off } = require("./routes");

const agniveerUser = new mongoose.Schema({
  id:{
    type: Number
  },
  name: {
    type: String
  },
  trade: {
    type: String
  },
  unit:{
    type: String
  },
  recommendation: {
    type: Boolean
  },
  bookout: {
    type: Boolean
  },
  bookedIn: {
    type: Boolean
  },
  postIn: {
    type: Date
  },
  imgUrl: {
    type:String
  },
  bookoutDetails: [
    {
      bookinDate:{
        type: Date
      },
      bookoutDate: {
        type: Date
      }
    }
  ]
});

const offr = new mongoose.Schema({
  id:{
    type: Number
  },
  name: {
    type: String
  },
  type: {
    type: String
  },
  unit:{
    type: String
  },
  branch: {
    type: Boolean
  },
  imgUrl: {
    type: String
  },
  password: {
    type: String
  }
});

offr.methods.generateHash = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

offr.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

const agniveer = mongoose.model('agniveer', agniveerUser);
const officer = mongoose.model('officer',offr);

module.exports = agniveer;
module.exports = officer;