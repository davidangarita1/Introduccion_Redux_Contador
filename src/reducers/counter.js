import { counter as counterActions } from "../constants/actionTypes";

const INITIAL_STATE = {
    count: 0 
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
    console.log('Entramos...');
    switch(action.type){
        case counterActions.INCREMENTAR:{
            console.log('Incrementar');
            return { ...state, count: state.count + 10 }
        }
        case counterActions.DECREMENTAR:{
            return { ...state, count: state.count - 10 }
        }
        default:
            return state;
    }
}