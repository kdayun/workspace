import {createAction, handleActions} from 'redux-actions';
import { produce } from '../../node_modules/immer/dist/immer';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

export const changeFiled = createAction(
    CHANGE_FIELD, 
    ({form, key, value}) => ({
        form, key, value
    }),
);

export const initializeForm = createAction(INITIALIZE_FORM, form => form);

const initialState = {
    register: {
        username:'', 
        password:'',
        passwordConfirm:'',
    },
    login:{
        username:'',
        password:'',
    }
};

const auth = handleActions(
    {
        [CHANGE_FIELD]: (state, {payload : {form, key, value}}) => 
            produce(state, draft => {
                draft[form][key] = value;
            }), 
        [INITIALIZE_FORM] : (state, {payload: form}) => ({
            ...state, [form]: initialState[form],
        }),
    }, initialState
);

export default auth;
