module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      id: Number,
      name: String,
      trade: String,
      unit: String,
      recommendation: Boolean,
      bookout: Boolean,
      bookedIn: Boolean,
      postIn: String,
      late:Boolean,
      bookoutDetails: [{
        bookoutDate:String,
        bookinDate:String
      }],
      imgUrl: String
    }
  );

  schema.method("toJSON", function() {
    const { __v, id, ...object } = this.toObject();
    object.id = id;
    return object;
  });

  const Agniveer = mongoose.model("agniveer", schema);
  return Agniveer;

};
