
import { counter as counterTypes } from '../constants/actionTypes';


export const incrementarContador = () => async(dispatch) => {
    console.log('Entrando a inrementar dispatch');
    dispatch({
        type: counterTypes.INCREMENTAR
    })
}

export const decrementarContador = () => async(dispatch) => {
    console.log('Entrando a inrementar dispatch');
     dispatch({
        type: counterTypes.DECREMENTAR
    })
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    incrementarContador,
    decrementarContador
}