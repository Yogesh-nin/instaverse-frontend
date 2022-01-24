import * as api from '../api'
import { AUTH } from '../constants/actionTypes';

export const signin = (formData, history) => async (dispatch) =>{
    try {
        // login the user
        const { data } = await api.signIn()
        dispatch({type: AUTH, data})
        history.push('/')
    } catch (error) {
        console.log(error)
    }
}

export const signup = (formData, history) => async (dispatch) =>{
    try {
        // sign up the user
        const { data } = await api.signUp()
        dispatch({type: AUTH, data})

        history.push('/')
    } catch (error) {
        console.log(error)
    }
}