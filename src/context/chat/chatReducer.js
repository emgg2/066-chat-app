
import { types } from "../../types/types";


export const chatReducer = (state, action) => {

    // Un reducer es una función pura que no debe tener interacción del exterior 
    // todo debe procesarse en base al state y el action 
    //Siempre tiene que devolver un state, no podemos mutar el state, debemos crear uno nuevo 
    // Tampoco debemos disparar acciones secundarias dentro del reducer 
    // Siempre tiene que ser una función síncrona que regrese siempre un nuevo state

    
// const initialState = {
//     uid: '',
//     activeChat: null, // user UID I want to send a message
//     users:      [],
//     messages:   [] // chat selected

// }

    
    switch ( action.type ) {

        case types.LoadedUsers:
            return {
                ...state,
                users: [ ...action.payload ]
            }
        case types.ActivateChat:
            
        if( state.ActivateChat === action.payload ) return state;

            return {
                ...state,
                activeChat: action.payload,
                messages:[]

            }

        default: 
            return state;
    }
}

