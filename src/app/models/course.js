const mongoose = require("mongoose");
const Course = mongoose.Schema;
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const course = new Course(
  {
    _id: { type: Number },
    name: { type: String, maxLength: 255 },
    desciptions: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    slug: { type: String, slug: "name", unique: true },
    videoID: { type: String, maxLength: 255 },
    level: { type: String, maxLength: 255 },
  },
  {
    _id: false,
    timestamps: true,
  }
);

mongoose.plugin(slug);
// course.plugin(mongooseDelete)
course.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

course.plugin(AutoIncrement);

module.exports = mongoose.model("Courses", course);
