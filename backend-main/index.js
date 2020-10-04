require("dotenv").config()
const express = require("express");
const bodyParser = require("body-parser");
const app = express()
const PORT = process.env.PORT || 3000;
const router = require("express").Router()
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use("/",router)

// Router here!
const courseRoutes = require("./routes/course");
const programRoutes = require("./routes/program");
const departmentRoutes = require("./routes/department");
const pathwayRotues = require("./routes/pathway");
const instructorRoutes = require("./routes/instructor");
const bookRoutes = require('./routes/book');
const syllabusRoutes = require('./routes/syllabus')

// Route
router.use('/courses',courseRoutes);
router.use('/programs',programRoutes);
router.use('/departments',departmentRoutes);
router.use('/pathways',pathwayRotues);
router.use('/instructors',instructorRoutes);
router.use('/books',bookRoutes);
router.use('/syllabus',syllabusRoutes);


app.listen(PORT,() => console.log(`App is running on ${PORT}`));
