const express = require("express");
const router = express.Router();
const CourseControllers = require("../app/controllers/CourseControllers");
const NewController = require("../app/controllers/NewController");

router.get("/me/trash", CourseControllers.trash);
router.get("/:id/edit", CourseControllers.edit);
router.delete("/:id", CourseControllers.deleteSoft);
router.delete("/:id/forceDelete", CourseControllers.forceDelete);
router.patch("/:id/restore", CourseControllers.restore);
router.put("/:id/update", CourseControllers.update);
router.post("/me", CourseControllers.postActionUserWant);
router.get("/me", CourseControllers.me);
router.get("/create", CourseControllers.create);
router.post("/store", CourseControllers.store);
router.get("/:slug", CourseControllers.showCourseDetail);
router.get("/", NewController.course);

module.exports = router;
