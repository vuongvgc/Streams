import { 
    SIGN_IN,
    SIGN_OUT, 
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM ,
    EDIT_STREAM,
    DELETE_STREAM
} from '../actions/types';
const streamReducer = (state={}, action) => {
    const {payload, type } = action.payload
    switch(type) {
        case FETCH_STREAM:
            return {...state, [payload.id]: payload};
        case EDIT_STREAM:
            return {...state, [payload.id]: payload};
        case CREATE_STREAM:
            return {...state,  [payload.id]: payload};
        case DELETE_STREAM:
            return {...state, [payload]: undefined }
        default:
            return state
    }
}
export default  streamReducer;