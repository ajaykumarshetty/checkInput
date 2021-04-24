import { ADD_LIST_DATA, ADD_DATA_ERROR } from "../constant"

const intitalState = {
    listData: [],
    isError: false,
    error: ""
}

const listDataReducer = (state = intitalState, action) => {
    console.log(action, "ssss")
    switch (action.type) {
        case ADD_LIST_DATA:
            return {
                ...state,
                listData: [...state.listData, action.payload]
            }
        case ADD_DATA_ERROR:
            return {
                ...state,
                isError: action.isError,
                error: action.payload
            }
        default:
            return state

    }
}

export default listDataReducer