const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

    day:{
        type: Date,
        default: Date.now
    },

    exercise: [{
        type: {
            type: String,
            trim: true,
        },
        name: {
            type: String,
            trim: true,
        },
        duration: Number,
        weight: {
            type: Number,
            default: 0
        },
        reps: {
            type: Number,
            default: 0
        },
        sets: {
            type: Number,
            default: 0
        }

    }],

    totalDuration: { 
        type: Number,
    }
});


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;