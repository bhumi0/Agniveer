const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.agniveer = require("./agniveer.model.js")(mongoose);
db.officer = require("./officer.model.js")(mongoose);
db.administrator = require("./administrator.model.js")(mongoose);

module.exports = db;
