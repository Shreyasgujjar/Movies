import axios from "axios";
import { POPULAR_MOVIE_URL } from "../config/config";
import { GET_MOVIES } from "../redux/actions";

export const getMovies = () => {
    return async dispatch => {
        try {
            const res = await axios.get(`${POPULAR_MOVIE_URL}`);
            if (res.data) {
                dispatch({
                    type: GET_MOVIES,
                    payload: res.data,
                });
            } else {
                console.log('Unable to fetch');
            }
        } catch (error) {
            console.log(error);
        }
    }
}