import Reducers from "./reducers/index";
import { applyMiddleware, createStore} from "redux"
import thunk from "redux-thunk"

let store = createStore(Reducers , applyMiddleware((thunk)))

export default store