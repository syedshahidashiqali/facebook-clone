import axios from "axios";
const url = "https://social-app-backend.vercel.app/api/v1";

export const loginCall = async(userCredential, dispatch) => {
     dispatch({type: "LOGIN_START"});
     try{
        const res = await axios.post(`${url}/auth/login`, userCredential);
        dispatch({type: "LOGIN_SUCCESS", payload: res.data})
     } catch(err){
         dispatch({type: "LOGIN_FAILURE"});
     }
};