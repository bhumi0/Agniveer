const db = require("../models");
const Officer = db.officer;

// Create and Save a new Officer
exports.addOffr = (req, res) => {
  //validations
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  Officer.findOne({id:req.body.id}).then(
    data=>{
      if(data){
        res.status(400).send({ message: "Content duplicate!" });
        return;
      }
      else {
        
    // Create a Officer
    const officer = new Officer({
      id: req.body.id,
      name: req.body.name,
      branch: req.body.branch,
      unit: req.body.unit,
      password: req.body.password,
      type: req.body.type,
      imgUrl: req.body.imgUrl
    });

    officer.setPassword(req.body.password);

    // Save Officer in the database
    officer
      .save(officer)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Officer."
        });
      });
      }
    })
  };

// Retrieve all Officer from the database.
exports.getOffrList = (req, res) => {
  Officer.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Officers."
      });
    });
};

exports.validateLogin = (req,res) => {
  const id = req.params.id;
  const password = req.query.password;
  Officer.findOne({ id : id }, function(err, officer) { 
    if (officer === null) { 
        return res.send(null);
    } 
    else { 
        if (officer.validPassword(password)) { 
            return res.send(officer); 
        }
        else { 
            return res.send(null);
        } 
    } 
}); 
};

// Update a Officer by the id in the request
exports.updateOffr = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }
  const id = req.params.id;
  Officer.findOneAndRemove({id:id}).then(data => {
    if (!data) {
      res.status(404).send({
        message: `Cannot be updated. Officer was not found!`
      });
    } else {
      const officer = new Officer({
        id: req.body.id,
        name: req.body.name,
        branch: req.body.branch,
        unit: req.body.unit,
        password: req.body.password,
        type: req.body.type,
        imgUrl: req.body.imgUrl
      });
  
      officer.setPassword(req.body.password);
  
      // Save Officer in the database
      officer
        .save(officer)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while updating the Officer."
          });
        });
        }
      })
    };

// Delete a Officer with the specified id in the request
exports.deleteOffrById = (req, res) => {
  const id = req.params.id;

  Officer.findOneAndRemove({id:id})
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Officer with id=${id}. Maybe Officer was not found!`
        });
      } else {
        res.send({
          message: "Officer was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Officer with id=" + id
      });
    });
};
