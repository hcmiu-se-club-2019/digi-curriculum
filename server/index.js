const express = require("express");
const app = express();
const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "newuser",
    password: "",
    database: "syllabus",
});

connection.connect((err) => console.log(err));
let query;
app.get("/curriculum/:programID/:pathwayID", (req, res) => {
    const programID = req.param("programID");
    const pathwayID = req.param("pathwayID");
    query = `select c.id,c.name,cp.semester,cp.year from course as c, course_pathway as cp where c.id=cp.course_id and cp.program_id=${programID} and cp.pathway_id=${pathwayID};`;
    connection.query(query,(err,result) => {
        if (err)
            console.log(err)
        res.json({
            curriculum: result
        })
    })
});

app.get("/departments", (req, res) => {
    // Query database
    query = `select d.id,d.name from department as d;`
    connection.query(query,(err,result) =>{
        res.json({
            departments: result
        })
    })
});

app.get("/programs/department/:departmentID", (req, res) => {
    // Query database
    const departmentID = req.param("departmentID");
    query = `select p.id,p.name,p.discipline from major as m,major_program as mp,program as p where m.department_id=${departmentID} and m.id=mp.major_id and mp.program_id=p.id  group by p.id;`
    connection.query(query,(err,result) => {
        if (err)
            console.log(err);
        res.json({
            programs: result
        });
    })
});

app.get("/programs/major/:majorID", (req, res) => {
    const majorID = req.param("majorID");
    // Query database base on majorID
    query =`select mp.program_id,p.name,p.discipline from major_program as mp, program as p where mp.major_id=${majorID} and mp.program_id=p.id;`
    connection.query(query,(err, result)=> {
        if ( err )
            console.log(err)
        res.json({
            programs: result
        })
    })
});

app.get("/courses/department/:departmentID", (req, res) => {
    const departmentID = req.param("departmentID");
    query = `select c.id,c.name, c.name_vn, c.credit_lab, c.credit_theory from course_department as cd, course as c where cd.department_id=${departmentID} and cd.course_id=c.id;`
    connection.query(query,(err,result) => {
        if (err)
            console.log(err)
        res.json({
            courses: result
        })
    })
});
app.get("/courses/program/:programID", (req, res) => {
    const programID = req.param("programID");
    query = `select c.id,c.name,c.name_vn from course_program as cp, course as c where c.id=cp.course_id and cp.program_id=${programID};`
    connection.query(query, (err,result) => {
        if (err)
            console.log(err);
        res.json({
            courses: result
        })
    })
});

app.get("/courses/major/:majorID", (req, res) => {
    const programID = req.param("programID");
    // Query database
    res.json({
        courses,
    });
});
app.get("/majors/department/:departmentID", (req, res) => {
    const departmentID = req.param("departmentID");
    query = `select * from major as m where m.department_id=${departmentID};`
    connection.query(query, (err,result) => {
        if (err)
            console.log(err)
        res.json({
            majors: result
        })
    })
});
app.listen(3000, () => {
    console.log("App run on port 3000");
});
