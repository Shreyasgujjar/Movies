import { GET_MOVIES } from "../redux/actions";

const initState = {
    movies: []
}

function moviesReducer(state = initState, action) {
    switch (action.type) {
        case GET_MOVIES:
            return {...state, movies: action.payload }
        default:
            return state
    }
}

export default moviesReducer;