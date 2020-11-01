const db = require("../models");

module.exports = function(app) {
    app.get("/api.workouts", (req, res) => {
        db.Workout.find({}).then(dbWorkout => {
            dbWorkout.forEach(workout => { 
                var total = 0;
                workout.exercises.forEach(e => {
                    total += e.duration;
                });
                workout.totalDuration = total;

            });
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
    });

    app.put("/api/workouts/:id", (req,res) => {
        dbWorkout.findOneUpdate({ _id: req.params.id },)
    })
}