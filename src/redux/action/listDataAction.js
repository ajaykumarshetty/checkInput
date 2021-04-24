import { ADD_LIST_DATA, ADD_DATA_ERROR } from "../constant"


function addListData(data) {
    return {
        type: ADD_LIST_DATA,
        payload: data
    }
}
function addDataError(eroor, isError) {
    return {
        type: ADD_DATA_ERROR,
        payload: eroor,
        isError: isError

    }
}

export const addData = (data, list) => {
    console.log(list)
    return function (dispatch) {
        if (list.includes(data)) {
            return alert("data is already is there")
        } else {
            dispatch(addListData(data))

        }
    }
}
