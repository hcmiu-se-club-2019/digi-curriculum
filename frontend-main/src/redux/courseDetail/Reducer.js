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

const AssessmentTable = (state = [{type: 'sampleAssessmentType', percentage: 'sampleAssessmentPercentage'}], action) => {
    switch (action.type){
        case "ADD_ROW_ASSESSMENT": 
            return [...state, action.payload]; 
        case "DELETE_ROW_ASSESSMENT": 
            return([...state.slice(0, action.payload) 
                    ,...state.slice(action.payload + 1)]);
        default: return state;
    }
} 

const ObjectivesTable = (state = [{ID: 'sampleObjectivesID', topic: 'sampleObjectivesTopics'}], action) => {
    switch (action.type){
        case "ADD_ROW_OBJECTIVES": 
            return [...state, action.payload]; 
        case "DELETE_ROW_OBJECTIVES": 
            return([...state.slice(0, action.payload) 
                    ,...state.slice(action.payload + 1)]);
        default: return state;
    } 
}

const OutcomeTable = (state = [{name: 'sampleName', outcome: 'sampleOutcome'}], action) => {
    switch (action.type){
        case "ADD_ROW_OUTCOME": 
            return [...state, action.payload]; 
        case "DELETE_ROW_OUTCOME": 
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
    OutcomeTable
})
export default courseDetailReducer