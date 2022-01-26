import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducer";
import {
	expenseCreateReducer,
	expenseListReducer,
	expenseDeleteReducer,
	expenseUpdateReducer,
} from "./reducers/expenseReducer";

const reducer = combineReducers({
	//this will contain our reducers
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	expenseList: expenseListReducer,
	expenseCreate: expenseCreateReducer,
	expenseDelete: expenseDeleteReducer,
	expenseUpdate: expenseUpdateReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
	? JSON.parse(localStorage.getItem("userInfo"))
	: null;

const initialState = {
	userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
