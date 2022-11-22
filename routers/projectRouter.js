const express = require("express");
const projectController = require("../controller/projectController");

const router = express.Router();

router
    .route("/")
    .get(projectController.getAllProject)
    .post(projectController.createProject);

router
    .route("/:id")
    .get(projectController.getProjectById)
    .patch(projectController.updateProject)
    .delete(projectController.deleteProject);

module.exports = router;
