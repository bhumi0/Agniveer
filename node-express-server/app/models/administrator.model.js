var crypto = require('crypto'); 

module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        id: Number,
        name: String,
        branch: String,
        unit: String,
        type: String,
        imgUrl: String,
        hash:String,
        salt:String
     }
    );
  
    // Method to set salt and hash the password for a user 
    schema.methods.setPassword = function(password) { 
     
      // Creating a unique salt for a particular user 
         this.salt = crypto.randomBytes(16).toString('hex'); 
       
         // Hashing user's salt and password with 1000 iterations, 
          
         this.hash = crypto.pbkdf2Sync(password, this.salt,  
         1000, 64, `sha512`).toString(`hex`); 
     }; 
       
     // Method to check the entered password is correct or not 
      schema.methods.validPassword = function(password) { 
         var hash = crypto.pbkdf2Sync(password,  
         this.salt, 1000, 64, `sha512`).toString(`hex`); 
         return this.hash === hash; 
     }; 

    schema.method("toJSON", function() {
      const { __v, id, ...object } = this.toObject();
      object.id = id;
      return object;
    });
  
    const Administrator = mongoose.model("administrator", schema);
    return Administrator;
  };
  