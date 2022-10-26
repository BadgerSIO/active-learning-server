const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require("./data/courses.json");
const coursesDetail = require("./data/coursesWithDetail.json");

app.get("/", (req, res) => {
  res.send(courses);
  console.log("server running");
});

app.listen(port, () => {
  console.log("Active learning server is running on port ", port);
});
