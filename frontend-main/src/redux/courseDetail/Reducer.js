import { combineReducers } from "redux";

const CourseName = (state = '', action) => {
    return state;
}

const CourseID = (state = '', action) => {
    return state;
}

const NumberofCredits = (state = '', action) => {
    return state;
}

const CourseDescription = (state = '', action) => {
    return state;
}

const AssessmentTable = (state = [{id: 'sampleID', type: 'sampleAssessmentType',
        CourseAssessment: {
            percentage: 'sampleAssessmentPercentage'}
        }], action) => {
    switch (action.type){
        case "SET_ASSESSMENT": return action.payload;
        case "ADD_ROW_ASSESSMENT": 
            return [...state, action.payload]; 
        case "DELETE_ROW_ASSESSMENT": 
            return([...state.slice(0, action.payload) 
                    ,...state.slice(action.payload + 1)]);
        default: return state;
    }
} 

const ObjectivesTable = (state = [{id: 'sampleObjectivesID', topic: 'sampleObjectivesTopics'}], action) => {
    switch (action.type){
        case "SET_OBJECTIVES": return action.payload;
        case "ADD_ROW_OBJECTIVES": 
            return [...state, action.payload]; 
        case "DELETE_ROW_OBJECTIVES": 
            return([...state.slice(0, action.payload) 
                    ,...state.slice(action.payload + 1)]);
        default: return state;
    } 
}

const OutcomeTable = (state = [{id: 'sampleName', description: 'sampleOutcome'}], action) => {
    switch (action.type){
        case "SET_OUTCOME": return action.payload;
        case "ADD_ROW_OUTCOME": 
            return [...state, action.payload]; 
        case "DELETE_ROW_OUTCOME": 
            return([...state.slice(0, action.payload) 
                    ,...state.slice(action.payload + 1)]);
        default: return state;
    } 
}

const TextbookTable = (state = [{id: '0', title: 'sampleTextbook'}], action) => {
    switch (action.type){
        case "SET_TEXTBOOK": return action.payload;
        case "ADD_ROW_TEXTBOOK": 
            return [...state, action.payload]; 
        case "DELETE_ROW_TEXTBOOK": 
            return([...state.slice(0, action.payload) 
                    ,...state.slice(action.payload + 1)]);
        default: return state;
    } 
}

const RelatedCourseTable = (state = 
    [
        {
            related_course_id: '0', 
            name: 'sampleCourseName', 
            CourseCourse: {
                relationship: 'Prerequisite'
            }
        }], action) => {
    switch (action.type){
        case "SET_RELATED_COURSE": return action.payload;
        case "ADD_ROW_RELATED_COURSE": 
            console.log(action.payload);
            return [...state, action.payload]; 
        case "DELETE_ROW_RELATED_COURSE": 
            return([...state.slice(0, action.payload) 
                    ,...state.slice(action.payload + 1)]);
        default: return state;
    } 
}

const courseDetailReducer = combineReducers({
    CourseName,
    CourseID,
    NumberofCredits,
    CourseDescription,
    AssessmentTable,
    ObjectivesTable,
    OutcomeTable,
    TextbookTable,
    RelatedCourseTable
})
export default courseDetailReducer