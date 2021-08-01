// Assessment Plan actions
export const AddRowAssessment = (ID, type, percentage) => {
    return {
        type: "ADD_ROW_ASSESSMENT",
        payload: {id: ID, type, CourseAssessment: 
            {percentage: percentage}
        }
    }
}

export const DeleteRowAssessment = (index) => {
    return {
        type: "DELETE_ROW_ASSESSMENT",
        payload: index
    }
}

export const SetAssessment = (state) => {
    return {
        type: "SET_ASSESSMENT",
        payload: state
    }
}

// Course Objectives actions

export const AddRowObjectives = (id, name) => {
    return {
        type: "ADD_ROW_OBJECTIVES",
        payload: {id, name}
    }
}

export const DeleteRowObjectives = (index) => {
    return {
        type: "DELETE_ROW_OBJECTIVES",
        payload: index
    }
}

export const SetObjectives = (state) => {
    return {
        type: "SET_OBJECTIVES",
        payload: state
    }
}

// Course Outcome actions
export const AddRowOutcome = (id, description) => {
    return {
        type: "ADD_ROW_OUTCOME",
        payload: {id, description}
    }
}

export const DeleteRowOutcome = (index) => {
    return {
        type: "DELETE_ROW_OUTCOME",
        payload: index
    }
}

export const SetOutcome = (state) => {
    return {
        type: "SET_OUTCOME",
        payload: state
    }
}

// Textbook Preferences actions

export const AddRowTextbook = (id, title) => {
    return {
        type: "ADD_ROW_TEXTBOOK",
        payload: {id, title}
    }
}

export const DeleteRowTextbook = (index) => {
    return {
        type: "DELETE_ROW_TEXTBOOK",
        payload: index
    }
}

export const SetTextbook = (state) => {
    return {
        type: "SET_TEXTBOOK",
        payload: state
    }
}

// RELATED COURSE ACTIONS

export const AddRowRelatedCourse = (related_course_id, name, relationship) => {
    console.log(relationship);
    return {
        type: "ADD_ROW_RELATED_COURSE",
        payload: {related_course_id, name, 
            CourseCourse: 
                {relationship: relationship}
            }
    }
}

export const DeleteRowRelatedCourse = (index) => {
    return {
        type: "DELETE_ROW_RELATED_COURSE",
        payload: index
    }
}

export const SetRelatedCourse = (state) => {
    return {
        type: "SET_RELATED_COURSE",
        payload: state
    }
}

