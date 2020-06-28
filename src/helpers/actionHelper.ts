import {
    Payload,
} from '../interfaces';

const createAction = (type:string) => (payload : Payload) => ({ type, payload });



export default createAction;
