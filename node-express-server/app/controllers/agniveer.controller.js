const db = require("../models");
const Agniveer = db.agniveer;
const BookoutDetail = db.BookoutDetail;

// Create and Save a new Agniveer
exports.addAgniveer = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  Agniveer.findOne({id:req.body.id}).then(
    data=>{
      if(data){
        res.status(400).send({ message: "Content duplicate!" });
        return;
      }
      else {
      // Create a Agniveer
        const agniveer = new Agniveer({
          id: req.body.id,
          name: req.body.name,
          trade: req.body.trade,
          unit: req.body.unit,
          recommendation: req.body.recommendation ? req.body.recommendation : false,
          bookout: req.body.bookout? req.body.bookout : false,
          bookedIn: req.body.bookedIn? req.body.bookedIn : false,
          postIn: req.body.postIn,
          late:req.body.late ? req.body.late : false,
          bookoutDetails: req.body.bookoutDetails ? req.body.bookoutDetails : null,
          imgUrl: req.body.imgUrl
        });

      // Save Agniveer in the database
      agniveer
        .save(agniveer)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Agniveer."
          });
        });
      }
    })
};

// Retrieve all Agniveer from the database.
exports.getAgniveerList = (req, res) => {

  Agniveer.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Agniveers."
      });
    });
};

// Find a single Agniveer with an id
exports.getAgniveerById = (req, res) => {
  const id = req.params.id;

  Agniveer.find({id:id})
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Agniveer with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Agniveer with id=" + id });
    });
};

// Update a Agniveer by the id in the request
exports.updateAgniveer = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Agniveer.findOneAndUpdate({id:id}, req.body)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Agniveer with id=${id}. Maybe Agniveer was not found!`
        });
      } else res.send({ message: "Agniveer was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Agniveer with id=" + id
      });
    });
};

// Delete a Agniveer with the specified id in the request
exports.deleteAgniveer = (req, res) => {
  const id = req.params.id;

  Agniveer.findOneAndRemove({id:id})
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Agniveer with id=${id}. Maybe Agniveer was not found!`
        });
      } else {
        res.send({
          message: "Agniveer was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Agniveer with id=" + id
      });
    });
};
