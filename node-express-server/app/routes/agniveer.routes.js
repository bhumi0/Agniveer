module.exports = app => {
  const agniveers = require("../controllers/agniveer.controller.js");

  var router = require("express").Router();

  // Create a new Agniveer
  router.post("/", agniveers.addAgniveer);

  // Retrieve all Agniveers
  router.get("/", agniveers.getAgniveerList);

  // Retrieve a single Agniveer with id
  router.get("/:id", agniveers.getAgniveerById);

  // Update a Agniveer with id
  router.put("/:id", agniveers.updateAgniveer);

  // Delete a Agniveer with id
  router.delete("/:id", agniveers.deleteAgniveer);

  app.use("/api/agniveer", router);
};
