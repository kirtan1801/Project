const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const Project = require("../models/projectModule");

exports.getAllProject = catchAsync(async (req, res, next) => {
    //Need to apply filter
    //
    const projectList = await Project.find();
    res.status(200).json({
        status: "success",
        data: {
            projectList,
        },
    });
});

exports.createProject = catchAsync(async (req, res, next) => {
    const project = await Project.create(req.body);
    console.log(req);
    res.status(201).json({
        status: "success",
        data: {
            project,
        },
    });
});

exports.getProjectById = catchAsync(async (req, res, next) => {
    const project = await Project.findById(req.params.id);
    if (!project) {
        return next(new AppError("No project found with the given id", 404));
    }
    res.status(200).json({
        status: "success",
        data: {
            project,
        },
    });
});

exports.updateProject = catchAsync(async (req, res, next) => {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    if (!project) {
        return next(new AppError("No project found with the given id", 404));
    }
    res.status(200).json({
        status: "success",
        data: {
            project,
        },
    });
});

exports.deleteProject = catchAsync(async (req, res, next) => {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
        return next(new AppError("No project found with the given id", 404));
    }
    res.status(204).json({
        status: "success",
        data: null,
    });
});
