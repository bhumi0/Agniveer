const db = require("../models");
const Administrator = db.administrator;

exports.addAdmin = (req, res) => {
    //validations
    if (!req.body) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
    Administrator.findOne({id:req.body.id}).then(
      data=>{
        if(data){
          res.status(400).send({ message: "Content duplicate!" });
          return;
        }
        else {
          
      // Create a Administrator
      const administrator = new Administrator({
        id: req.body.id,
        name: req.body.name,
        branch: req.body.branch,
        unit: req.body.unit,
        password: req.body.password,
        type: req.body.type,
        imgUrl: req.body.imgUrl
      });
  
      administrator.setPassword(req.body.password);
  
      // Save Administrator in the database
      administrator
        .save(administrator)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Administrator."
          });
        });
        }
      })
    };
  
// Validate officer credential

exports.validateLogin = (req,res) => {
    const id = req.query.id;
  const password = req.query.password;
  Administrator.findOne({ id : id }, function(err, administrator) { 
    if (administrator === null) { 
        return res.send(null);
    } 
    else { 
        if (administrator.validPassword(password)) { 
            return res.send(administrator);
        }
        else { 
            return res.send(null);
        } 
    } 
}); 
};