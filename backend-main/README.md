## Backend - Digit Curriculum
### Documentation
https://app.swaggerhub.com/apis-docs/iu-se-club/DigitCurriculum/1.0   
[source](./swagger.yaml)
### Usage
1. First, we need to create database
   + Example: We create database with name _syllabus_mirror_ 
       + Step 1: Connect to mysql database: `mysql -u <username> -p <password>` 
       + Step 2: Create database with name _syllabus_mirror_: `create database syllabus_mirror;`
2. Second, we config DB_USER, DB_NAME, DB_HOST, DB_PASSWORD in _.env_ file
3. Next, run command: `npm install` to install all package
4. Run app with command `npm start`
5. Run all query in file _all.sql_ to fullfill data into database
6. Using swagger for API Documentation
 
### Todo List
- [x] Create Models
- [x] Simple Servers
- [x] Synchronize New Database & Old Database ( insert data )
- [x] CRUD Controller: 
    - [x] Course
    - [x] Program
    - [x] Department
    - [x] Pathway
    - [x] Instructor
    - [x] Book
- [x] Advanced Controller
    - [x] Course: 
        - [x] Get instructor asigned with this course
        - [x] Get courses of particular department
    - [x] Instructors-Department: Get all instructor in particular deparment
    - [x] Course Details:
        - [x] Get all details of this course: _learning outcome_,_assessment tool_, _topic + topic detail + topic type_, _book_, _related course_
        - [x] Update/Get Controller: 
            - [x] Learning Outcome
            - [x] Assessment
            - [x] Assessment Tool
            - [x] CRUD Topic + Topic Details
            - [x] Book
            - [x] Related Course
    - [x] Course - Program - Pathways:
        - [x] Get all programs assigned with this course
        - [x] CRUD Syllabus by Pathway (default pathwayId=1)
        - [x] CRUD between program - course ( create -> assign )
- [x] Using dotenv
- [x] Update README.md
- [ ] Documentaion Guildlines (SwaggerHub)
   - [x] CRUD Controller: 
       - [x] Course
       - [x] Program
       - [x] Department
       - [x] Pathway
       - [x] Instructor
       - [x] Book
   - [x] Advanced Controller
       - [x] Course: 
           - [x] Get instructor asigned with this course
           - [x] Get courses of particular department
       - [x] Instructors-Department: Get all instructor in particular deparment
       - [x] Course Details:
           - [x] Get all details of this course: _learning outcome_,_assessment tool_, _topic + topic detail + topic type_, _book_, _related course_
           - [x] Update/Get Controller: 
               - [x] Learning Outcome
               - [x] Assessment
               - [x] Assessment Tool
               - [x] CRUD Topic + Topic Details
               - [x] Book
               - [x] Related Course
       - [x] Course - Program - Pathways:
           - [x] Get all programs assigned with this course
           - [x] CRUD Syllabus by Pathway (default pathwayId=1)
           - [x] CRUD between program - course ( create -> assign )
- [ ] add remove all dependency in delete function
- [ ] Test Documentation API
- [ ] Refactor Code
- [ ] Create User Authentication ( using passport.js )
- [ ] API Security: json web token (jwt)
- [ ] Add validators: express-validators
- [ ] Refactor response JSON
- [ ] Server Side Rendering (SSR)

- Two way when create/assign:
    - Way 1: separate create/asign: TopicDetail
    - Way 2: check if existed --> asign else create: LearningOutcome
