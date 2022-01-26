import {
	EXPENSE_CREATE_FAIL,
	EXPENSE_CREATE_REQUEST,
	EXPENSE_CREATE_SUCCESS,
	EXPENSE_LIST_FAIL,
	EXPENSE_LIST_REQUEST,
	EXPENSE_LIST_SUCCESS,
	EXPENSE_UPDATE_FAIL,
	EXPENSE_UPDATE_REQUEST,
	EXPENSE_UPDATE_SUCCESS,
	EXPENSE_DELETE_FAIL,
	EXPENSE_DELETE_REQUEST,
	EXPENSE_DELETE_SUCCESS,
} from "../constances/expenseConstance";

export const expenseCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case EXPENSE_CREATE_REQUEST:
			return { loading: true };
		case EXPENSE_CREATE_SUCCESS:
			return { loading: false, sucess: true, expenseInfo: action.payload };
		case EXPENSE_CREATE_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const expenseListReducer = (state = { expenses: [] }, action) => {
	switch (action.type) {
		case EXPENSE_LIST_REQUEST:
			return { loading: true };
		case EXPENSE_LIST_SUCCESS:
			return { loading: false, expenses: action.payload };
		case EXPENSE_LIST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const expenseUpdateReducer = (state = {}, action) => {
	switch (action.type) {
		case EXPENSE_UPDATE_REQUEST:
			return { loading: true };
		case EXPENSE_UPDATE_SUCCESS:
			return { loading: false, sucess: true };
		case EXPENSE_UPDATE_FAIL:
			return { loading: false, error: action.payload, sucess: false };
		default:
			return state;
	}
};

export const expenseDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case EXPENSE_DELETE_REQUEST:
			return { loading: true };
		case EXPENSE_DELETE_SUCCESS:
			return { loading: false, sucess: true };
		case EXPENSE_DELETE_FAIL:
			return { loading: false, error: action.payload, sucess: false };
		default:
			return state;
	}
};
