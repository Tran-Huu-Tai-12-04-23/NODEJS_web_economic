const Course = require("../models/course");
const utilMongoose = require("../../util/mongoose");

class CourseControllers {
  //[get] / detail/ courseDetail
  showCourseDetail(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("detail/courseDetail", {
          course: utilMongoose.mongooseToObject(course),
        });
      })
      .catch(next);
  }
  //[get] / create
  create(req, res, next) {
    res.render("course/createCourse");
  }
  //[post]//storeCourse
  store(req, res, next) {
    const formData = new Course(req.body);
    formData.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;
    formData
      .save()
      .then(() => res.redirect("/course/me"))
      .catch(() => {});
  }
  //[get] / course/ me
  me(req, res, next) {
    const allCourseFind = Course.find({});
    allCourseFind.sort({
      [res.locals._sort.column]: res.locals._sort.type,
    });
    Promise.all([Course.countDocumentsDeleted(), allCourseFind])
      .then(([deletedCount, course]) => {
        res.render("me/courseMe", {
          course: utilMongoose.multyToObject(course),
          deletedCount,
        });
      })
      .catch(next);
  }
  //[get] / course/ edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) => {
        res.render("me/courseEdit", {
          course: utilMongoose.mongooseToObject(course),
        });
      })
      .catch(next);
  }
  // [put] / course / :id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/course/me"))
      .catch(next);
  }
  // [delete] / :id / course
  forceDelete(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
  // [patch](delete soft) / course/ me
  deleteSoft(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
  //[get] course/ me / trash
  trash(req, res, next) {
    Course.findDeleted({})
      .then((course) =>
        res.render("detail/trash", {
          course: utilMongoose.multyToObject(course),
        })
      )
      .catch(next);
  }
  //[patch] course/ :id/ restore
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
  //[post : delete all ] : /course/me
  postActionUserWant(req, res, next) {
    var userWantAction = req.body.action_user_want;
    switch (userWantAction) {
      case "delete":
        Course.delete({ _id: { $in: req.body.checkbox_delete_all_sub } })
          .then(() => res.redirect("back"))
          .catch(next);
        break;
      case "restore":
        Course.restore({ _id: { $in: req.body.checkbox_delete_all_sub } })
          .then(() => res.redirect("back"))
          .catch(next);
        break;
      default:
        res.json("Messages : erro ");
        break;
    }
  }
}

module.exports = new CourseControllers();
