// Assessment Plan actions
export const AddRowAssessment = (type, percentage) => {
    return {
        type: "ADD_ROW_ASSESSMENT",
        payload: {type, percentage}
    }
}

export const DeleteRowAssessment = (index) => {
    return {
        type: "DELETE_ROW_ASSESSMENT",
        payload: index
    }
}

// Course Objectives actions

export const AddRowObjectives = (ID, topic) => {
    return {
        type: "ADD_ROW_OBJECTIVES",
        payload: {ID, topic}
    }
}

export const DeleteRowObjectives = (index) => {
    return {
        type: "DELETE_ROW_OBJECTIVES",
        payload: index
    }
}

// Course Outcome actions
export const AddRowOutcome = (name, outcome) => {
    return {
        type: "ADD_ROW_OUTCOME",
        payload: {name, outcome}
    }
}

export const DeleteRowOutcome = (index) => {
    return {
        type: "DELETE_ROW_OUTCOME",
        payload: index
    }
}
