import {useEffect, useRef, useState} from "react";


export const useFetch=(url:string)=>{
    const [state,setState]=useState({data:null,loading:true,error:null});


    const isMounted=useRef(true);
    useEffect(()=>{
        return ()=>{
            isMounted.current=false;
        }
    },[])
    useEffect(()=>{
        setState({data:null,loading:true,error:null})
        //fetch te devuelve una promesa en la qu epuedes usar then primero
        //convertimos a las respuesta en un json para poder sacar la data en json
        fetch(url)
            .then(resp=>resp.json())
            .then(data=>{
                if(isMounted.current){
                    setState({
                        loading:false,
                        error:null,
                        data
                    })
                }else{
                    console.log("TUDO BEN");
                }


            })
    },[url])
    return state;


}
