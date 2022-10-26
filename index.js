const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require("./data/courses.json");
const coursesDetail = require("./data/coursesWithDetail.json");

app.get("/", (req, res) => {
  res.send(courses);
});
app.get("/courses", (req, res) => {
  res.send(coursesDetail);
});
app.get("/courses/:value", (req, res) => {
  let cat = req.params.value;
  console.log(cat);
  const filteredCourses = coursesDetail.filter(
    (course) => course.category == cat
  );
  res.send(filteredCourses);
});

app.listen(port, () => {
  console.log("Active learning server is running on port ", port);
});
