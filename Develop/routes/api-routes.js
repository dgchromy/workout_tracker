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
        dbWorkout.findOneUpdate({ _id: req.params.id },{
            $insc: { totalDuration: req.body.duration},
            $push: { exercises: req.body }
        }, { new: true}). then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
    });


    // adding new workout
    app.post("/api/workouts", ({ body }, res) => {
     
        db.Workout.create(body).then((dbWorkout => {
            res.json(dbWorkout);
        })).catch(err => {
            res.json(err);
        });
    });

app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).then(dbWorkout => {
        console.log("ALL workouts")
        console.log(dbWorkout);
      res.json(dbWorkout);  
    }).catch(err => {
        res.json(err);
    });

});


}