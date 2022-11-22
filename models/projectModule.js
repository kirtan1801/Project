const mongoose = require("mongoose");
const techArray = new mongoose.Schema({ techName: String });

const mileStoneArray = new mongoose.Schema({
    mileStoneName: {
        type: String,
    },
    mileStoneType: {
        type: String,
    },
    time: {
        type: Date,
        default: Date.now(),
    }, // need to check
});

const projectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Project must have a name"],
            unique: true,
            trim: true,
            maxlength: [
                40,
                "Project name must less then or equal to 40 characters",
            ],
        },
        technologies: {
            type: [techArray],
            default: undefined,
        },
        mileStones: {
            type: [mileStoneArray],
        },
        totalTime: {
            type: Date,
        },
        bufferTime: {
            type: Date,
        },
        cost1: {
            type: Number,
        },
        cost2: {
            type: Number,
        },
        isGST: {
            type: Boolean,
        },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
