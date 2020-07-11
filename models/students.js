export default (mongoose) => {
  const Schema = mongoose.Schema({
    name: { type: String, required: true },
    subject: { type: String, required: true },
    type: { type: String, required: true },
    value: {
      type: String,
      required: true,
    },
    lastModified: { type: Date, default: Date.now },
  });
  const Students = mongoose.model("Students", Schema, "Students");
  return Students;
};
