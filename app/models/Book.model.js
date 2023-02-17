module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      title: {type: String, required: true},
      description: String,
      published: Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const book = mongoose.model("Book", schema);
  return book;
};
