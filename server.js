//packages

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");


const PORT = process.env.PORT || 3800;

const app = express();
//logger
app.use(logger("dev"));
//parsers
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//static files 
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://dgchromy:Sunshine6992!@cluster0.y8qhk.mongodb.net/workoutDB?", { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
 });

require("./routes/api-routes.js")(app);

// index

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/exercise.html"));
});

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/stats.html"));
});

app.listen(PORT, () => {
    console.log (`running on port ${PORT}....`);
})

