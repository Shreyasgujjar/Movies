import { LOGIN, LOGOUT } from "../redux/actions";

const initState = {
    loginState: false
}

function loginReducer(state = initState, action) {
    switch (action.type) {
        case LOGIN:
            return {...state, loginState: true }
        case LOGOUT:
            return {...state, loginState: false }
        default:
            return state
    }
}

export default loginReducer;