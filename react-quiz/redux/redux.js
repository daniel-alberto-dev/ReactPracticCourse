const redux = require('redux')

const initialState = {
    counter: 0
}

// reducer
const reducer = (state = initialState, action) => {
 
    if (action.type === 'ADD') {
        return {
            counter: state.counter + 1
        }
    }
    
    if (action.type === 'SUB') {
        return {
            counter: state.counter - 1
        }
    }
    
    if (action.type === 'ADD10') {
        return {
            counter: state.counter + action.value
        }
    }

    return state
}

// store
const store = redux.createStore(reducer)

store.subscribe(() => {
    console.log('state store' , store.getState());
})

// action

const AddCounter = {
    type:'ADD'
}

store.dispatch(AddCounter)
store.dispatch({type:'SUB'})
store.dispatch({type:'ADD10', value: 10})