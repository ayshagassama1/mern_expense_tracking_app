import axios from "axios";
import { EXPENSE_CREATE_FAIL, EXPENSE_CREATE_REQUEST, EXPENSE_CREATE_SUCCESS,EXPENSE_LIST_FAIL,  EXPENSE_LIST_REQUEST, EXPENSE_LIST_SUCCESS, EXPENSE_UPDATE_FAIL,  EXPENSE_UPDATE_REQUEST, EXPENSE_UPDATE_SUCCESS, EXPENSE_DELETE_FAIL,  EXPENSE_DELETE_REQUEST, EXPENSE_DELETE_SUCCESS} from "../constances/expenseConstance";


export const listExpense = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: EXPENSE_LIST_REQUEST,
        });

        const {
            userLogin: {userInfo },
        } = getState();

        let token = "Bearer"+ userInfo.token;
        console.log("paer"+token);
        
        const config = {
              headers: {
                "content-type": "application/json",
                "Authorization": token,

            }
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

        

        let token = "Bearer"+ userInfo.token;
        console.log("paer"+token);
        
        const config = {
              headers: {
                "content-type": "application/json",
                "Authorization": token,

            }
        };
        console.log("legui"+" "+config.headers['Authorization']);

        const  { data} = await axios.post(
            "/api/expenses/create",
            { category, montant },
             config
        );

        console.log(data);

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

export const  deleteExpenseAction = (id) => async (dispatch, getState) => {
    try {
        dispatch({
             type: EXPENSE_DELETE_REQUEST,
        });
        
        const {
            userLogin: { userInfo },
        } = getState();

        

        let token = "Bearer"+ userInfo.token;
        console.log("paer"+token);
        
        const config = {
              headers: {
                "content-type": "application/json",
                "Authorization": token,

            }
        };
        console.log("legui"+" "+config.headers['Authorization']);

        const  { data} = await axios.delete(
            `/api/expenses/${id}`,
             config
        );

        console.log(data);

        dispatch({
             type: EXPENSE_DELETE_SUCCESS,
              payload: data,
            });

        //localStorage.setItem("expenseInfo", JSON.stringify(data));
    } catch (error) {
        const message =
        error.response && error.response.data.message
        ? error.response.data.message
        :error.message;
        dispatch({
            type: EXPENSE_DELETE_FAIL,
            payload: message,
         });
    }
};

export const  updateExpenseAction = (id,category, montant) => async (dispatch, getState) => {
    try {
        dispatch({
             type: EXPENSE_UPDATE_REQUEST,
        });
        
        const {
            userLogin: { userInfo },
        } = getState();

        

        let token = "Bearer"+ userInfo.token;
        console.log("paer"+token);
        
        const config = {
              headers: {
                "content-type": "application/json",
                "Authorization": token,

            }
        };
        console.log("legui"+" "+config.headers['Authorization']);

        const  { data} = await axios.post(
            `/api/expenses/${id}`,
            { category, montant },
             config
        );

        console.log(data);

        dispatch({
             type: EXPENSE_UPDATE_SUCCESS,
              payload: data,
            });

        //localStorage.setItem("expenseInfo", JSON.stringify(data));
    } catch (error) {
        const message =
        error.response && error.response.data.message
        ? error.response.data.message
        :error.message;
        dispatch({
            type: EXPENSE_UPDATE_FAIL,
            payload: message,
         });
    }
};