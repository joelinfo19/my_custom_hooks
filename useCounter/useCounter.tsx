import {useState} from "react";
// this is a counter
export const useCounter=(estado:number)=>{
    const [state,setState]=useState<number>(estado);
    const increment=(factor:number)=>{
        setState(state+factor);
    }
    const decrement=(factor:number)=>{
        setState(state-factor);
    }
    const reset=()=>{
        setState(estado)
    }
    return {state,increment,decrement,reset}



}
