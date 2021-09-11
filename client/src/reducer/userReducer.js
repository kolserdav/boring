import { SET_USER } from "../utils/reducerConsts"
import { LOGOUT } from "../utils/reducerConsts"

import jwt_decode from 'jwt-decode'

const initialState = {
    token: '',
    isAuth: false,
    role: 'GUEST'
}

export default function userReducer(state = initialState, action) {

    switch (action.type) {
        case SET_USER:
            if(!action.payload){
                return {
                    ...state,
                    token: action.payload,
                    isAuth: true,
                }
            }
            else {
                return {
                    ...state,
                    token: action.payload,
                    isAuth: true,
                    role: jwt_decode(action.payload)
                }
            }
        default:
            return state
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                token: '',
                isAuth: false,
                role: 'GUEST'
            };

        default:
            return state;

    }
}

export const setUser = user => ({ type: SET_USER, payload: user })
export const logout = () => ({ type: LOGOUT })