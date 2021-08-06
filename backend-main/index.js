require("dotenv").config()
const express = require("express");
const bodyParser = require("body-parser");
const app = express()
const PORT = process.env.PORT || 3000;
const router = require("express").Router()
const cors = require("cors")
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(cors());
app.use("/",router)

// connect to mysql 
const mysql = require("mysql2");
var mysqlConnection = mysql.createConnection({
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME 
});

mysqlConnection.connect((err) => {
    if (!err){
        console.log("connection success");
    }
    else console.log("connection failed");
})

// Router here!
const courseRoutes = require("./routes/course");
const programRoutes = require("./routes/program");
const departmentRoutes = require("./routes/department");
const pathwayRotues = require("./routes/pathway");
const instructorRoutes = require("./routes/instructor");
const bookRoutes = require('./routes/book');
const syllabusRoutes = require('./routes/syllabus');
const assessmentRoutes = require('./routes/assessment');

// Route
router.use('/courses',courseRoutes);
router.use('/programs',programRoutes);
router.use('/departments',departmentRoutes);
router.use('/pathways',pathwayRotues);
router.use('/instructors',instructorRoutes);
router.use('/books',bookRoutes);
router.use('/syllabus',syllabusRoutes);
router.use('/assessment', assessmentRoutes);


app.listen(PORT,() => console.log(`App is running on ${PORT}`));


