const fetch = require('node-fetch');

const getCourse = async function(req, res) {
    
    try {
        const {id} = req.params
        const host = 'http://localhost:3000'
        const courseDetails = await fetch(`${host}/courses/${id}/details`)
        const course = await courseDetails.json(); 
        return res.status(200).json({
            course
        })
    }
    catch(error){
        return res.status(500).json({
            error: true,
            message: error,
          })
    }

}

const updateCourse = async function (req, res) {
    try{
        const {id} = req.params
        const host = 'http://localhost:3000'
        
        const fetchingCourse = await fetch(`${host}/courses/${id}/details`)
        const courseDetails = await fetchingCourse.json();
        const courseDB = courseDetails;
        
        // Get UI data
        const courseUser = req.body;
        const assessments = courseUser.assessments
        const books = courseUser.books
        const courseRelateCourse = courseUser.courseRelateCourses
        const information = courseUser.information
        const learningOutcomes = courseUser.learningOutcomes
        const tools = courseUser.tools
        const topics = courseUser.topics


        // addNewBooks(books, courseDB.books, host, id);
        // deleteBooks(books, courseDB.books, host, id);
        // addNewAssessmentsPlan(assessments, courseDB.assessments, host, id);
        // deleteAssessmentsPlan(assessments, courseDB.assessments, host, id);
        // addNewTopic(topics, courseDB.topics, host, id)
        // deleteTopic(topics, courseDB.topics, host, id)
        addNewRelatedCourse(courseRelateCourse, courseDB.courseRelateCourses.related_courses, host, id)
        deleteRelatedCourse(courseRelateCourse, courseDB.courseRelateCourses.related_courses, host, id)
        return res.status(200).json('Update Course succeeded');

    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            err: true,
            message: error,
          })   
    }
}


const addNewBooks = async function(books, dbBooks, host, id) {
    for (let i = 0; i < books.length; i++)
    {
        let book = books[i];
        if (typeof book.id === "undefined")
            try{
                const body = {
                    id: null,
                    title: book.title,
                    ISBN: "test",
                    author: "test",
                    type: "book",
                    version: "test",
                    year: 0
                }
                const response = await fetch(`${host}/books`, {
                    method: 'post',
                    body: JSON.stringify(body),
                    headers: {'Content-Type': 'application/json' },
                    
                })
                const newBook = await response.json();
                console.log(newBook);
                response = await fetch(`${host}/courses/${id}/assignBook?bookId=${newBook.createdBook.id}`)
                const AssignedBook = await response.json();
                console.log(AssignedBook);
            }
            catch(error){
                console.log(error);
            }
            
    }
}
const deleteBooks = async function(books, dbBooks, host, id) {
    // console.log(books);
    for (let i = 0; i < dbBooks.length; i++)
    {
        const dbBook = dbBooks[i];
        let bookFound = false;
        for (let j = 0; j < books.length; j++)
        {
            const userBook = books[j];
            if (dbBook.id === userBook.id) bookFound = true;
        }

        if (!bookFound)
        {
            console.log(dbBook);
            try{
                let response = await fetch(`${host}/courses/${id}/books/${dbBook.id}`,{
                    method: 'DELETE'
                });
                const deletedCourseBook = await response.json();
                console.log(deletedCourseBook);


                response = await fetch(`${host}/books/${dbBook.id}`, {
                    method: 'delete',
                })
                const deletedBook = await response.json();
                console.log(deleteBook);
            }
            catch(error){
                console.log(error);
            }
        }
            
    }
}

const addNewAssessmentsPlan = async function(APs, dbAPs, host, id) {
    for (let i = 0; i < APs.length; i++)
    {
        let AP = APs[i];
        if (typeof AP.id === "undefined")
        {
            try{
                const body = {
                    id: null,
                    type: AP.type
                }
                const response = await fetch(`${host}/assessment`, {
                    method: 'post',
                    body: JSON.stringify(body),
                    headers: {'Content-Type': 'application/json' },
                    
                })
                const newAP = await response.json();
                console.log(newAP);
                response = await fetch(`${host}/courses/${id}/assignAssessment?assessmentId=${newAP.createdAssessment.id}&percentage=${AP.CourseAssessment.percentage}`);
                const AssignedAssessment = await response.json();
                console.log(AssignedAssessment);
            }
            catch(error){
                console.log(error);
            }
        }
    }

}

const deleteAssessmentsPlan = async function(APs, dbAPs, host, id) {
    // console.log(books);
    for (let i = 0; i < dbAPs.length; i++)
    {
        const dbAP = dbAPs[i];
        let APFound = false;
        for (let j = 0; j < APs.length; j++)
        {
            const userAP = APs[j];
            if (dbAP.id === userAP.id) APFound = true;
        }

        if (!APFound)
        {
            console.log(dbAP);
            try{
                let response = await fetch(`${host}/courses/${id}/assessments/${dbAP.id}`,{
                    method: 'DELETE'
                });
                const deletedCourseAP = await response.json();
                console.log(deletedCourseAP);


                response = await fetch(`${host}/assessment/${dbAP.id}`, {
                    method: 'DELETE',
                })
                const deletedAP = await response.json();
                console.log(deletedAP);
            }
            catch(error){
                console.log(error);
            }
        }
    }
}

const addNewTopic = async function(topics, dbTopics, host, id) {
    for (let i = 0; i < topics.length; i++)
    {
        let topic = topics[i];
        if (typeof topic.id === "undefined")
        {
            try{
                const body = {
                    course_id: id,
                    learning_activities: "",
                    name: topic.name,
                    topic_type_id: 0
                }
                const response = await fetch(`${host}/courses/${id}/topics`, {
                    method: 'post',
                    body: JSON.stringify(body),
                    headers: {'Content-Type': 'application/json' },
                    
                })
                const newTopic = await response.json();
                console.log(newTopic);
            }
            catch(error){
                console.log(error);
            }
        }
    }
}

const deleteTopic = async function(topics, dbTopics, host, id) {
    // console.log(books);
    for (let i = 0; i < dbTopics.length; i++)
    {
        const dbTopic = dbTopics[i];
        let TopicFound = false;
        for (let j = 0; j < topics.length; j++)
        {
            const userTopic = topics[j];
            if (dbTopic.id === userTopic.id) TopicFound = true;
        }

        if (!TopicFound)
        {
            console.log(dbTopic);
            try{
                let response = await fetch(`${host}/courses/${id}/topics/${dbTopic.id}?target=general`,{
                    method: 'DELETE'
                });
                const deletedCourseAP = await response.json();
                console.log(deletedCourseAP);

            }
            catch(error){
                console.log(error);
            }
        }
    }
}

const addNewRelatedCourse = async function(RCs, dbRCs, host, id) {
    for (let i = 0; i < RCs.length; i++)
    {
        let RC = RCs[i];
        if (typeof RC.related_course_id === "undefined")
        {
            try{
                let relationship_id = 0
                if (RC.CourseCourse.relationship == "prerequisites")
                    relationship_id = 1
                else relationship_id = 2

                const response = await fetch(`${host}/courses/${id}/relate/${RC.related_course_id}?relationshipId=${relationship_id}`)
                const newTopic = await response.json();
                console.log(newTopic);
            }
            catch(error){
                console.log(error);
            }
        }
    }
}
const deleteRelatedCourse = async function(RCs, dbRCs, host, id) {
    for (let i = 0; i < dbRCs.length; i++)
    {
        const dbRC = dbRCs[i];
        let RCFound = false;
        for (let j = 0; j < RCs.length; j++)
        {
            const userRC = RCs[j];
            if (dbRC.related_course_id === userRC.related_course_id) RCFound = true;
        }

        if (!RCFound)
        {
            try{
                const url = `${host}/courses/${id}/relationship/${dbRC.related_course_id}`
                let response = await fetch(url,{
                    method: 'DELETE'
                });
                const deletedCourseRC = await response.json();
                console.log(deletedCourseRC);

            }
            catch(error){
                console.log(error);
            }
        }
    }
}


module.exports = {
    getCourse,
    updateCourse

}

