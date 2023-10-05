module.exports = app => {
    const officers = require("../controllers/officer.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Officer
    router.post("/", officers.addOffr);
  
    // Retrieve all Officers
    router.get("/", officers.getOffrList);
  
    // validate officer credentials
    router.get("/:id", officers.validateLogin);

    // Update a Officer with id
    router.put("/:id", officers.updateOffr);
  
    // Delete a Officer with id
    router.delete("/:id", officers.deleteOffrById);
  
    app.use("/api/officers", router);
  };
  