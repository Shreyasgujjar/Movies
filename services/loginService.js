import { LOGIN } from '../redux/actions';
import axios from "axios";
import { LOGIN_URL } from '../config/config';
import { Alert } from 'react-native';

export const login = (loginInput) => {
    return async dispatch => {
        try {
            const res = await axios.post(LOGIN_URL, loginInput);
            console.log(res)
            if(res.data){
                dispatch({type: LOGIN})
            } else {
                Alert.alert('Login failed', 'Username or Password is wrong')
                console.log("There was an error logging in");
            }
        } catch(error) {
            console.log(error)
        }
    }
}