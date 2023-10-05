module.exports = app => {
    const administrators = require("../controllers/administrator.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all Administrators
    router.get("/", administrators.validateLogin);
    router.post("/", administrators.addAdmin);

    app.use("/api/admin", router);
  };
  