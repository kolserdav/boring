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
            return {
                ...state,
                token: action.payload,
                isAuth: true,
                role: jwt_decode(action.payload)
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
            }
    }
}

export const setUser = user => ({ type: SET_USER, payload: user })
export const logout = () => ({ type: LOGOUT })