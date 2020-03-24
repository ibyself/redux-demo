import {ADDPERSON} from '../action_types'
let initState=[{name:'sun',age:'22'}]
export default function (preState=initState, ation) {
    const {type,data} = ation
    let newState
    switch (type) {
        case ADDPERSON:
            newState = [...preState,data]
            return newState
        default:
            return preState
    }
}