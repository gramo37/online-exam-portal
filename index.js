const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const connectToDatabase = require("./db");
dotenv.config({ path: path.join(process.cwd(), "config/config.env") })
var cookieParser = require('cookie-parser');
const cors = require("cors")

process.on("uncaughtException", (err) => {
    console.log("\n\nUnhandled Rejection\n\n", err);
    process.exit(1);
})

connectToDatabase();

app.use(cookieParser());
app.use(express.json());
app.use(cors())

// Frontend
app.use(express.static(path.join(__dirname, "frontend/build")));
app.use(express.static("public"));

// Routes
app.use("/api/v1/", require("./routes/userRoute"))
app.use("/api/v1/", require("./routes/questionRoute"))
app.use("/api/v1/", require("./routes/teacherRoute"))
app.use("/api/v1/", require("./routes/examRoute"))
// Demo Route
app.use("/api/v1/", require("./routes/createOrderRoute"))

app.get('*', function (req, res) {
    res.status(404).sendFile(path.join(__dirname, 'public/error.html'));
});

const server = app.listen(process.env.PORT, () => {
    console.log(`Connected to Port ${process.env.PORT}`);
});

process.on("unhandledRejection", (err) => {
    console.log("\n\nUnhandled Rejection\n\n", err);
    server.close(() => {
        process.exit(1)
    })
})



