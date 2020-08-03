import {ADD,ADDSUB,SUB} from './actionType'

export function Add() {
    return {
        type: ADD
    }
}
export function Sub() {
    return {
        type: SUB
    }
}
export function Add2(number) {
    return {
        type: ADDSUB,
        value: number
    }
}
export function addAsync(number) {
    return  (dispatch) => {
        setTimeout(()=>{
          dispatch(Add2(number))
        }, 3000)
    }
}