import {ADDSUB} from '../actions/actionType'


const initialState = {
    counter2: 200
}

export default function counter2(state = initialState, action) {

    switch(action.type) {
        case ADDSUB:
            return { 
                counter2: state.counter2 + action.value
            }
      
        default: 
        return state   
    }
} 