# Install
1. Install mysql 
   `npm install mysql`
2. Run file syllabus.sql to create local database
3. Go to file index.js to modify configuration database connection 
```javascript
    mysql.createConnection({
        host: {your host},
        user: {your mysql user name},
        password: {your password of this user name}
        database: {your database}
})
```
4. Run server on port ( default: 3000 ) 
   `node index.js`

# Simple API and Usage
+ Get curriculum
`GET /curiculum/:programId/:pathway`
```javascript
{
    "curriculum": [
        {
            "id": "CH011",
            "name": "Chemistry for Engineer",
            "semester": 1,
            "year": 2
        },
        {
            "id": "CH012",
            "name": "Chemistry Laboratory",
            "semester": 1,
            "year": 2
        },
        ...
    ]
}
```
## Department
+ Get all of deparment
`GET /departments`

```javascript
{
    "departments": [
        {
            "id": 1,
            "name": "School of Computer Science and Engineering"
        },
        {
            "id": 2,
            "name": "School of Electrical Engineering"
        },
        ...
    ]
}
```

## Program
- By departmet: Get all programs in specific department
`GET programs/department/:departmentID`
```javascript
{
    "programs": [
        {
            "program_id": 3,
            "name": "ITNE",
            "discipline": "Information Technology"
        },
        {
            "program_id": 6,
            "name": "ITCE",
            "discipline": "Information Technology"
        },
        ...
    ]
}
```
- By majors: Get all programs which major is had
`GET programs/major/:majorID`
```javascript
{
    "programs": [
        {
            "id": 3,
            "name": "ITNE",
            "discipline": "Information Technology"
        },
        {
            "id": 6,
            "name": "ITCE",
            "discipline": "Information Technology"
        },
        ...
    ]
}

```
## Courses

+ Get all course from department
`GET courses/department/:departmentID`
+ Get all course from program
`GET course/program/:programID`
+ Get all course from specific major ( unfinished )
`GET course/major/:majorID`
```javascript
{
    "courses": [
        {
            "id": "EE050",
            "name": "Introduction to Computer for Engineers",
            "name_vn": "Giới thiệu máy tính cho kỹ sư",
            "credit_lab": 0,
            "credit_theory": 3
        },
        {
            "id": "EE051",
            "name": "Principles of Electrical Engineering I",
            "name_vn": "Nguyên lý mạch điện 1",
            "credit_lab": 0,
            "credit_theory": 3
        },
        ...
    ]
}
```
## Others
### Majors
+ Get all major in specific department
`GET majors/deparment/:departmentID`
```javascript
{
    "majors": [
        {
            "id": 1,
            "name": "Computer Engineering",
            "department_id": 1
        },
        {
            "id": 2,
            "name": "Networking",
            "department_id": 1
        },
        {
            "id": 3,
            "name": "Information Technology",
            "department_id": 1
        }
    ]
}
```
n
