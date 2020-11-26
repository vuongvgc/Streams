import { SIGN_IN, SIGN_OUT } from './types';
import createStream from '../apis/streams'
export const signIn = (userID) => {
    return {
        type: SIGN_IN,
        payload: userID
    }
}
export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}
export const createStreams = (formValue) => {
    return async dispatch => {
        createStream.post('/streams', formValue);
    }
}
