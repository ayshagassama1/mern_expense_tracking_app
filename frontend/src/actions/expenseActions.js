import axios from "axios";
import { EXPENSE_CREATE_FAIL, EXPENSE_CREATE_REQUEST, EXPENSE_CREATE_SUCCESS,EXPENSE_LIST_FAIL,  EXPENSE_LIST_REQUEST, EXPENSE_LIST_SUCCESS} from "../constances/expenseConstance";


export const listExpense = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: EXPENSE_LIST_REQUEST,
        });

        const {
            userLogin: {userInfo },
        } = getState();

        const config = {
            Headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },

        };

        const  { data } = await axios.get(`/api/expenses`, config);

        dispatch({
            type: EXPENSE_LIST_SUCCESS,
            payload: data,
    });
} catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: EXPENSE_LIST_FAIL,
      payload: message,
    });
  }
};

export const  createExpenseAction = (category, montant) => async (dispatch, getState) => {
    try {
        dispatch({
             type: EXPENSE_CREATE_REQUEST,
        });
        
        const {
            userLogin: { userInfo },
        } = getState();
        
        const config = {
            Headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,

            },
        };

        const  { data} = await axios.post(
            "/api/expenses/create",
            { category, montant },
            config
        );

        dispatch({
             type: EXPENSE_CREATE_SUCCESS,
              payload: data,
            });

        //localStorage.setItem("expenseInfo", JSON.stringify(data));
    } catch (error) {
        const message =
        error.response && error.response.data.message
        ? error.response.data.message
        :error.message;
        dispatch({
            type: EXPENSE_CREATE_FAIL,
            payload: message,
         });
    }
};
