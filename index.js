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
  const filteredCourses = coursesDetail.filter(
    (course) => course.category == cat
  );
  res.send(filteredCourses);
});
app.get("/details/:id", (req, res) => {
  let cID = req.params.id;
  const reqCourse = coursesDetail.find((course) => course.id === cID);
  res.send(reqCourse);
});
app.get("/checkout/:courseID", (req, res) => {
  let findcourse = req.params.courseID;
  const requestedCourse = coursesDetail.find(
    (course) => course.id === findcourse
  );
  res.send(requestedCourse);
});

app.listen(port, () => {
  console.log("Active learning server is running on port ", port);
});
