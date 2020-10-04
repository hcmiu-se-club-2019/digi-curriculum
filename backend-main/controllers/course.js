const Table = require("../sequelize");
const Serializer = require('sequelize-to-json');
const fetch = require('node-fetch');

module.exports = {
  getAllCourse: async (req,res) => {
    try{
      const courses = await Table.Course.findAll({
        include: {
          model: Table.CourseLevel,
          attributes: ['level'],
        }
      });
      if (!courses.length) return res.status(200).json({error: false, message: "Don't have any courses"})
      const coursesArr = await JSON.parse(JSON.stringify(courses));
      // return res.json(coursesArr)
      for(let i=0;i<coursesArr.length;i++){
        const courseObj = coursesArr[i];
        const refactoredCourse = Object.keys(courseObj).reduce((newObj,key) => {
          switch(key){
            case "CourseLevel":
              newObj["level"] = courseObj[key].level;
              break;
            default:
              newObj[key] = courseObj[key]
          }
          return newObj
        },{})
        coursesArr[i] = refactoredCourse;
      }
      return res.status(200).json(coursesArr);
    }catch(error){
      console.log(error);
      res.status(500).json({
        error: true,
        message: error,
      })
    }
  },
  createCourse: async (req,res) => {
    try{
      const course = await Table.Course.findByPk(req.body.id);

      // Check course have already existed
      if (course){
        return res.status(200).json({
          error: false,
          message: `CourseID-${req.body.id} have already existed`,
        })
      }else{
        const newCourse = await Table.Course.create(req.body);
        return res.status(200).json({
          createdCourse: newCourse,
        });
      } 
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error,
      });
    }
  },
  getCourseById: async (req,res) => {
    try{
      const {id} = req.params;
      const course = await Table.Course.findByPk(id,{
        include: {
          model: Table.CourseLevel,
          attributes: ['level']
        }
      });
      if (!course) return res.status(200).json({error: false, message: `CourseID-${id} hasn't been existed`})
      // Refactor Object -> Response
      const courseObj = await (JSON.parse(JSON.stringify(course)))
      const refactoredCourse = Object.keys(courseObj).reduce((newObj,key) => {
        switch(key){
          case "CourseLevel":
            newObj["level"] = courseObj[key].level;
            break;
          default:
            newObj[key] = courseObj[key]
        }
        return newObj
      },{})
      return res.status(200).json({course: refactoredCourse});
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error,
      })
    }
    
  },
  updateCourse: async (req,res) => {
    try{
      const {id} = req.params;
      const course = await Table.Course.findByPk(id);
      if ( !course ) return res.status(200).json({error: false,message: `CourseID-${id} hasn't existed`})
      const updatedCourse = await Table.Course.update(req.body,{where: {id}});
      return res.status(200).json({isUpdated: updatedCourse[0]});
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error,
      });
    }
  },
  deleteCourse: async (req,res) => {
    try{
      const {id} = req.params;
      const course = await Table.Course.findByPk(id);
      console.log(course)
      if (course){
        // Remove all dependency
        
        // Then Delete Course
        const deletedCourse = await Table.Course.destroy({where: {id}})
        return res.status(200).json({isDeleted: deletedCourse})
      }else{
        return res.status(200).json({
          error: false,
          message:"Course have already deleted"
        });
      }
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error
      })
    }
  },
  getInstructors: async (req,res) => {
    try{
      const {id} = req.params;
      const course = await Table.Course.findByPk(id);
      if (course){
        const instructors = await course.getInstructors();

        // Refactor response
        const instructorsArr = await JSON.parse(JSON.stringify(instructors))
        for(let i=0;i<instructorsArr.length;i++){
          let instructorObj = instructorsArr[i]
          instructorObj = Object.keys(instructorObj).reduce( (newInstructor,key) => {
            if (key !== "CourseInstructor") newInstructor[key] = instructorObj[key]
            return newInstructor;
          },{})
          instructorsArr[i] = instructorObj
        }
        return res.status(200).json({ instructors: instructorsArr });
      }else{
        res.status(500).json({
          error: false,
          message: `${id} don't match any CourseID`
        })
      }
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error
      })
    }
  },
  getTopics: async (req,res) => {
    try{
      const {id} = req.params;
      const course = await Table.Course.findByPk(id);
      if (course){
        const {view} = req.query;
        if (view === "general"){
          const topics = await course.getTopics({order:[['id','DESC']]});
          return res.status(200).json({topics});
        }else if (view === "detail"){
          const topicsWithDetail = await Table.Topic.findAll({
            where: {
              "course_id": id
            },
            include: [
              {
                model: Table.TopicDetail,
                attributes: ['id', 'week','topic_detail'],
              },
              {
                model: Table.TopicType,
                attributes: ['type'],
              }
            ],
            order: [
              ["id","DESC"]
            ]
          })
          return res.status(200).json({topics: topicsWithDetail});
        }else{
          return res.status(200).json({
            error: false,
            message: "Query is invalid"
          })
        }
      }else{
        return res.status(200).json({
          error: false,
          message: `${id} don't match any CourseID`
        })
      }
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error,
      })
    }
  },
  updateTopic: async (req,res) => {
    try{
      const {id} = req.params;
      const course = await Table.Course.findByPk(id);
      if (course){
        const {target} = req.query;
        const {topicId} = req.params;
        if (target === "general"){
          const updatedTopic = await Table.Topic.update(req.body,{
            where: {
              id: topicId
            }
          })
          return res.status(200).json({isUpdated: updatedTopic[0]});
        }else if(target === "detail"){
          const updatedTopicDetail = await Table.TopicDetail.update(req.body,{
            where: {
              id: topicId
            }
          })
          return res.status(200).json({isUpdated: updatedTopicDetail[0]});
        }else{
          return res.status(200).json({
            error: false,
            message: "Invalid Query"
          })
        }
      }else{
        return res.status(200).json({
          error: false,
          message: `${id} don't match any CourseID`
        })
      }
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error,
      })
    }
  },
  deleteTopic: async (req,res) => {
    try{
      const {id} = req.params;
      const course = await Table.Course.findByPk(id);
      if (course){
        const {target} = req.query;
        const {topicId} = req.params;
        if (target === "general"){

          // Get topic
          const topic = await Table.Topic.findByPk(topicId);
          if (topic){

            // Remove all topic details
            const topicDetails = await topic.getTopicDetails();
            topic.removeTopicDetails(topicDetails)

            // Delete Topic
            const deletedTopic = await Table.Topic.destroy({where: {id: topicId}})
            return res.status(200).json({
              isDeleted: deletedTopic,
            })
          }else{
            return res.status(200).json({
              error: false,
              message: "Topic has already deleted"
            })
          }
        }else if( target === "detail" ){

          //Get Topic Detail
          const topicDetail = await Table.TopicDetail.findByPk(topicId);
          if (topicDetail){

            // Delete Topic Detail
            const deletedTopicDetail = await Table.TopicDetail.destroy({where: {id: topicId}});
            return res.status(200).json({isDeleted: deletedTopicDetail});
          }else{
            return res.status(200).json({
              error: false,
              message: "Topic Detail has already deleted"
            })
          }
        }else{
          return res.status(200).json({
            error: false,
            message: "Invalid Query"
          })
        }
      }else{
        return res.status(200).json({
          error: false,
          message: `${id} don't match any CourseID`
        })
      }
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error,
      })
    }
  },
  createTopic: async (req,res) => {
    try{
      const {id} = req.params;
      const course = await Table.Course.findByPk(id);
      if (course){
        const newTopic = await course.createTopic(req.body);
        return res.status(200).json({createdTopic: newTopic})
      }else{
        return res.status(200).json({
          error: false,
          message: `Course with id: ${id} hasn't already been existed`
        })
      }
    }catch(error){
      console.log(error);
      res.status(500).json({
        error: true,
        message: error,
      })
    }
  },
  createTopicDetail: async (req,res) => {
    try{
      const {topicId} = req.params;
      const topic = await Table.Topic.findByPk(topicId);
      if (topic){
        const topic = await Table.Topic.findByPk(topicId);
        const newTopicDetail = await topic.createTopicDetail(req.body);
        return res.status(200).json({createdTopicDetail: newTopicDetail});
      }else{
        return res.status(200).json({
          error: false,
          message: `Topic with id: ${topicId} hasn't already existed`
        })
      }
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error
      })
    }
  },
  assignBook: async (req,res) => {
    try{
      const {id} = req.params;
      const {bookId} = req.query;
      if (!bookId) return res.status(200).json({error: false,message: "Lack of ID of Book in query"})
      let {type = 'reference'} = req.query;
      console.log(type);

      // Valid type of book
      const validType = ['reference','textbook']

      // Check input type is invalid type --> set default type = reference
      if (validType.indexOf(type) === -1) type = 'reference'
        
      const course = await Table.Course.findByPk(id);
      const book = await Table.Book.findByPk(bookId);
      if (!book) return res.status(200).json({error: false, message: "Book hasn't existed"});
      if (!course) return res.status(200).json({error: false, message: "Course hasn't existed"});
      const hasBook = await course.hasBooks(book);
      if (hasBook) return res.status(200).json({error: false,message: `${book.title} is assigned with Course-${id}`});
      const assignedBook = await Table.CourseBook.create({
        type,
        book_id: bookId,
        course_id: id,
      })
      return res.status(200).json({assignedBook})
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error,
      })
    }
  },
  getBooks: async (req,res) => {
    try{
      const {id} = req.params;
      const course = await Table.Course.findByPk(id);
      if (course){
        const books = await course.getBooks();
        return res.status(200).json({books})
      }else{
        return res.status(200).json({
          error: false,
          message: "Course hasn't existed"
        })
      }
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error
      })
    }
  },
  deleteBook: async (req,res) => {
    try{
      const {id,bookId} = req.params;
      const course = await Table.Course.findByPk(id);
      const book = await Table.Book.findByPk(bookId);
      if (!course) return res.status(200).json({error: false, message: `Course-${id} don't exist`});
      if (!book) return res.status(200).json({error: false, message: `Book-${book.title} don't exist`});
      const hasBook = await course.hasBook(book);
      if (hasBook){
        // Remove book
        const deletedBook = await course.removeBooks(book);
        return res.status(200).json({isDeleted: deletedBook})
      }else{
        return res.status(200).json({
          error: false,
          message: `BookID-${bookId} hasn't assigned with Course-${id}`
        })
        
      }
    }catch(error){
      console.log(error);
      return res.status(200).json({})
    }
  },
  getLearningOutcomes: async (req,res) => {
    try{
      const {id} = req.params;
      const course = await Table.Course.findByPk(id);
      if (course){
        const learningOutcomes = await course.getLearningOutcomes();
        return res.status(200).json({learningOutcomes})
      }else{
        return res.status(200).json({
          error: false,
          message: "Course hasn't existed"
        })
      }
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error
      })
    }
  },
  createLearningOutcome: async (req,res) => {

    // Create for delete link ( has case asign existed link )
    try{
      const {id} = req.params;
      const course = await Table.Course.findByPk(id);

      if (course){

        // If created ID is given in body
        // Check if loID is existed -> assign CourseID - loID
        // Else create new loID for CourseID
        if (req.body.id){
          const hasLO = await Table.LearningOutcome.findOne({
            where: {
              id: req.body.id,
            }
          });
          if (hasLO){
            const assignedLO = await Table.LearningOutcome.update({
              course_id: id,
            },{
              where: {
                id: hasLO.id
              }
            });
            return res.status(200).json({
              status: "update",
              isUpdate: assignedLO[0]
            })
          }else{
            const newLO = await course.createLearningOutcome(req.body);
            return res.status(200).json({
              status: "new",
              createdLearningOutcome: newLO
            });
          }
        }else{
          
          // If created ID isn't given in body
          // It means: loID fields has default value ( which is autoIncrement in Table Learning Outcome )
          // Finnally, we create new Learning Outcome with new loId
          const newLO = await Table.LearningOutcome.create(req.body)
          return res.status(200).json({
            status: "new",
            createdLearningOutcome: newLO
          });
        }
      }else{
        return res.status(200).json({
          error: false,
          message: "Course hasn't existed"
        })
      }
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error
      })
    }
  },
  deleteLearningOutcome: async (req,res) => {

    // Delete record
    try{
      const {id,loId} = req.params;
      const course = await Table.Course.findByPk(id);
      if(course){
        const lo = await Table.LearningOutcome.findByPk(loId);
        if (lo){
          const hasLO = await course.hasLearningOutcome(lo);
          if (hasLO){
            const deletedLO = await Table.LearningOutcome.findOne({
              where:{
                lo: loId,
                course_id: id
              }
            })
            return res.status(200).json({isDeleted: deletedLO})
          }else{
            return res.status(200).json({
              error: false,
              message: `CourseID-${id} don't have Learnin Outcome: ${lo.description}`
            })
          }
        }else{
          return res.status(200).json({
            error: false,
            message: `Learning Outcome with ID-${loId} hasn't been existed`
          })
        }
      }else{
        return res.status(200).json({
          error: false,
          message: "Course hasn't existed"
        })
      }
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error,
      })
    }
  },
  updateLearningOutcome: async (req,res) => {
    try{
      const {id,loId} = req.params;
      const course = await Table.Course.findByPk(id);
      if( course ){
        const lo = await Table.LearningOutcome.findByPk(loId);
        const hasLO = await course.hasLearningOutcome(lo);
        if (hasLO){
          const updatedLO = await Table.LearningOutcome.update(req.body,{
            where: {
              id: loId
            }
          })
          return res.status(200).json({isUpdated: updatedLO[0]});
        }else{
          return res.status(200).json({
            error: false,
            message: `Learning Outcome-${loId} hasn't assigned with Course-${id}`
          })
        }
      }else{
        return res.status(200).json({
          error: true,
          message: `CourseID-${id} hasn't existed`
        })
      }
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error
      })
    }
  },
  getAssessments: async (req,res) => {
    try{
      const {id} = req.params;
      const course = await Table.Course.findByPk(id);
      if( course ){
        const assessments = await Table.Course.findByPk(id,{
          include: {
            model: Table.Assessment,
            attributes: ['id','type'],
          }
        })
        return res.status(200).json(assessments)
      }else{
        return res.status(200).json({
          error: false,
          message: `CourseID-${id} hasn't existed`
        })
      }
    }catch(error){
      console.log(error);
      return res.status(200).json({
        error: true,
        message: error
      })
    }
  },
  asignAssessment: async (req,res) => {
    try{
      const {id} = req.params;
      const {assessmentId,percentage} = req.query;
      if (!assessmentId || !percentage) return res.status(200).json({error: false,message: "Invalid Query"});
      const course = await Table.Course.findByPk(id);
      if (course){
        const assessment = await Table.Assessment.findByPk(assessmentId);
        const hasAssessment = await course.hasAssessment(assessment);
        if (hasAssessment){
          return res.status(200).json({error: false,message: "Assessment has been assigned"})
        }else{
          const assignedAssessment = await Table.CourseAssessment.create({
            percentage,
            course_id: id,
            assessment_id: assessmentId,
          });
          return res.status(200).json({assignedAssessment})
        }
      }else{
        res.status(200).json({
          error: false,
          message: `CourseID-${id} hasn't existed`
        })
      }
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error,
      })
    }
  },
  deleteAssessment: async (req,res) => {
    try{
      const {id,assessmentId} = req.params;
      const course = await Table.Course.findByPk(id);
      if(course){
        const assessment = await Table.Assessment.findByPk(assessmentId);
        const hasAssessment = await course.hasAssessment(assessment);
        if(hasAssessment){
          await course.removeAssessment(assessment);
          return res.status(200).json({isDeleted: 1})
        }else{
          return res.status(200).json({error: false, message: `Assessment-${assessment.type} hasn't assigned with CourseID-${id}`})
        }
      }else{
        return res.status(200).json({error: false,message: `CourseID-${id} hasn't existed`})
      }
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error
      })
    }
  },
  updateAssessment: async (req,res) => {
    try{
      const {id,assessmentId} = req.params;
      const course = await Table.Course.findByPk(id);
      if(course){
        const assessment = await Table.Assessment.findByPk(assessmentId);
        const hasAssessment = await course.hasAssessment(assessment);
        if (hasAssessment){
          const updatedAssessment = await Table.CourseAssessment.update(req.body,{
            where: {
              course_id: id,
              assessment_id: assessmentId,
            }
          })
          return res.status(200).json({isUpdated: updatedAssessment[0]})
        }else{
          return res.status(200).json({error: false, message: `Assessment-${assessment.type} hasn't been assigned in Course-${id}`})
        }
      }else{
        return res.status(200).json({error: false, message: `CourseID-${id} hasn't existed`})
      }
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error,
      })
    }
  },
  createAssessmentTool: async (req,res) => {
    try{
      const {id} = req.params
      const {loId,assessmentId} = req.body;
      const course = await Table.Course.findByPk(id);
      const lo = await Table.LearningOutcome.findByPk(loId);
      const assessment = await Table.Assessment.findByPk(assessmentId);
      if (course){
        const hasLO = await course.hasLearningOutcome(lo);
        const hasAssessment = await course.hasAssessment(assessment);
        if (hasLO && hasAssessment){
          const newAssessmentTool = await Table.AssessmentTool.create({
            course_id: id,
            loutcome_id: loId,
            assessment_id: assessmentId
          });
          return res.status(200).json({createdAssessmentTool: newAssessmentTool})
        }else{
          return res.status(200).json({
            error: false,
            message: `Course don't have LearningOutcome-"${lo.description}" or "Assessment-${assessment.type}" `
          })
        }
      }else{
        return res.status(200).json({
          error: false,
          message: `CourseId-${id} hasn't existed`
        })
      }
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error,
      })
    }
  },
  deleteAssessmentTool: async (req,res) => {
    try{
      const {id,assessmentToolId} = req.params;
      const course = await Table.Course.findByPk(id);
      if(course){
        const assessmentTool = await Table.AssessmentTool.findByPk(assessmentToolId);
        if (assessmentTool){
          const {assessment_id,loutcome_id} = assessmentTool;
          const assessment = await Table.Assessment.findByPk(assessment_id);
          const lo = await Table.LearningOutcome.findByPk(loutcome_id);
          const hasLO = await course.hasLearningOutcome(lo);
          const hasAssessment = await course.hasAssessment(assessment);
          if ( hasLO && hasAssessment ){
            const isDeleted = await Table.AssessmentTool.destroy({
              where:{
                id: assessmentToolId,
              }
            })
            return res.status(200).json({isDeleted})
          }else{
            return res.status(200).json({error: false,message: `Course hasn't already assigned with LearningOutcomeID-${loutcome_id} or AssessmentID-${assessment_id} `})
          }
        }else{
          return res.status(200).json({error: false,message: `AssesssmentToolID-${assessmentToolId} don't existed`})
        }
      }else{
        return res.status(200).json({
          error: false,
          message: `CourseID-${id} hasn't existed`
        })
      }
    }catch(error){
      console.log(error);
      return res.status(200).json({
        error: true,
        message: error,
      })
    }
  },
  getAssessmentTools: async (req,res) => {
    try{
      const {id} = req.params;
      const course = await Table.Course.findByPk(id);
      if (course){
        const assessmentTools = await Table.Assessment.findAll({
          include: {
            model: Table.AssessmentTool,
            attributes: ['loutcome_id','id'],
            where: {
              "course_id": id
            },
            include: {
              attributes: ['description'],
              model: Table.LearningOutcome
            }
          }
        })
        return res.status(200).json({assessmentTools});
      }else{
        return res.status(200).json({error: false,message: `CourseID-${id} hasn't existed`})
      }
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error,
      })
    }
  },
  getRelatedCourses: async (req,res) => {
    try{
      const {id} = req.params;
      const course = await Table.Course.findByPk(id);
      if(course){
        // const relatedCourse = await Table.CourseCourse.findAll({
        //   where:{
        //     course_id1: id
        //   },
        //   include: Table.CourseRelationship
        // })
        const relatedCourse = await Table.Course.findOne({
          include: {
            model: Table.Course,
            through: {
              model: Table.CourseCourse,
              // include
            },
            as: 'related_courses',
            attributes: [['id','related_course_id'],'name']
          },
          attributes: [['id','course_id'],'name'],
          where: {id}
        })

        // Resolve problems cannot include in through table
        const relationshipArray = await Table.CourseRelationship.findAll({});
        const relationshipMap = relationshipArray.reduce( (obj,current) => {
          const newObj = {...obj,[current.id]: current.relationship}
          return newObj;
        },{})

        // Need to convert Sequelize Model -> String JSON -> JavaScript Object
        const parsedRelatedCourses = await JSON.parse(JSON.stringify(relatedCourse));

        // Add field relationship by using relationshipMap
        parsedRelatedCourses["related_courses"].forEach( (course) => {
          course["CourseCourse"]["relationship"] = relationshipMap[course["CourseCourse"]["relationship_id"]]
        } )
        return res.status(200).json({courseRelateCourses: parsedRelatedCourses})
      }else{
        return res.status(200).json({error: false,message: `CourseID-${id} hasn't existed`})
      }
    }catch(error){
      console.log(error);
      return res.status(200).json({
        error: true,
        message: error,
      })
    }
  },
  relateCourse: async (req,res) => {
    try{
      const {courseId,relatedCourseId} = req.params;
      const course = await Table.Course.findByPk(courseId);
      const relatedCourse = await Table.Course.findByPk(relatedCourseId);
      if (!course) return res.status(200).json({error: false,message: `CourseID-${courseId} hasn't existed`});
      if (!relatedCourse) return res.status(200).json({error: false, message: `Related CourseID-${relatedCourseId} hasn't existed`})
      const {relationshipId = 4} = req.query;
      const isRelated = await Table.CourseCourse.findAll({
        where: {
          course_id1: courseId,
          course_id2: relatedCourseId,
        },
      })

      // Check available related relationship
      // const reducedRelationshipIds = relationshipIds.reduce( (newRelationshipIds,current) => {
      //   newRelationshipIds.push(current["relationship_id"]);
      //   return newRelationshipIds;
      // },[])
      // const isRelated = reducedRelationshipIds.includes(parseInt(relationshipId))

      if (!isRelated.length){
        const relatedCourse = await Table.CourseCourse.create({
          course_id1: courseId,
          course_id2: relatedCourseId,
          relationship_id: relationshipId,
        })
        return res.status(200).json({relatedCourse})
      }else{
        return res.status(200).json({error: false,message: `${courseId}-${relatedCourseId} already has relationship`})
      }
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error
      })
    }
  },
  deleteRelationship: async (req,res) => {
    try{
      const {courseId,relatedCourseId} = req.params;
      const course = await Table.Course.findByPk(courseId);
      const relatedCourse = await Table.Course.findByPk(relatedCourseId);
      if ( !course ) return res.status(200).json({error: false, message: `CourseID-${courseId} hasn't existed`})
      if ( !relatedCourse ) return res.status(200).json({error: false, message: `Related CourseID-${relatedCourseId} hasn't existed`});
      const isRelated = await Table.CourseCourse.findOne({
        where:{
          course_id1: courseId,
          course_id2: relatedCourseId
        }
      })
      if (isRelated){
        const isDeleted = await Table.CourseCourse.destroy({
          where: {
            course_id1: courseId,
            course_id2: relatedCourseId,
          }
        })
        return res.status(200).json({isDeleted})
      }else{
        return res.status(200).json({error: false,message: `${courseId}-${relatedCourseId} don't have any relationship`})
      }
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error
      })
    }
  },
  updateRelationship: async (req,res) => {
    try{
      const {courseId,relatedCourseId} = req.params;
      const {relationshipId} = req.body;
      const course = await Table.Course.findByPk(courseId)
      const relatedCourse = await Table.Course.findByPk(relatedCourseId);
      if ( !course ) return res.status(200).json({error: false, message: `CourseID-${courseId} hasn't existed`})
      if ( !relatedCourse ) return res.status(200).json({error: false, message: `Related CourseID-${relatedCourseId} hasn't existed`});

      const isRelated = await Table.CourseCourse.findAll({
        where: {
          course_id1: courseId,
          course_id2: relatedCourseId
        }
      })
      // If 2 course don't have relationship -> create new relationship
      if (!isRelated.length){
        const newRelationship = await Table.CourseCourse.create({
          course_id1: courseId,
          course_id2: relatedCourseId,
          relationship_id: relationshipId,
        })
        return res.status(200).json({
          status: "create",
          createdRelationship: newRelationship,
        })
      }else{
        // Else, update relationship between two course
        const updatedRelationship = await Table.CourseCourse.update({
          relationship_id: relationshipId
        },{
          where:{
            course_id1: courseId,
            course_id2: relatedCourseId
          }
        })
        return res.status(200).json({
          status: "update",
          isUpdated: updatedRelationship[0]
        })
      }
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error,
      })
    }
  },
  getDetails: async (req,res) => {
    try{
      const {id} = req.params
      const host = 'http://localhost:3000'

      // For course information
      const courseInformationResponse = await fetch(`${host}/courses/${id}`);
      const {course} = await courseInformationResponse.json()

      // For course topic
      // const courseTopicsResponse = await fetch(`${host}/courses/${id}/topics?view=general`)
      // const {topics} = await courseTopicsResponse.json()

      // For course topics detail
      const courseTopicsDetailReponse = await fetch(`${host}/courses/${id}/topics?view=detail`)
      const {topics=[]} = await courseTopicsDetailReponse.json()

      // For course book
      const courseBooksResponse = await fetch(`${host}/courses/${id}/books`)
      const {books=[]} = await courseBooksResponse.json()

      // For course learningOutcome
      const courseLearningOutcomesResponse = await fetch(`${host}/courses/${id}/los`);
      const { learningOutcomes=[] } = await courseLearningOutcomesResponse.json()

      // For course assessment
      const courseAssessmentsResponse = await fetch(`${host}/courses/${id}/assessments`);
      const { Assessments=[] } = await courseAssessmentsResponse.json()

      // For course assessment tool
      const courseAssessmentToolsResponse = await fetch(`${host}/courses/${id}/assessmentTools`);
      const { assessmentTools=[] } = await courseAssessmentToolsResponse.json()

      // For related courses
      const relatedCoursesResponse = await fetch(`${host}/courses/${id}/relatedCourses`);
      const {courseRelateCourses=[]} = await relatedCoursesResponse.json()
      return res.status(200).json({
        learningOutcomes,
        books,
        topics,
        courseRelateCourses,
        tools: assessmentTools,
        assessments: Assessments,
        information: course,
        // courseTopics: topics,
      })
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error,
      })

    }
  },
  getAvailabelPrograms: async (req,res) => {
    try{
      const {id} = req.params;
      const course = await Table.Course.findByPk(id);
      if (course){
        const programs = await course.getPrograms();
        return res.status(200).json({ programs })
      }else{
        return res.status(200).json({error: false,message: `CourseID-${id} hasn't existed`});
      }
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error
      })
    }
  }
}
