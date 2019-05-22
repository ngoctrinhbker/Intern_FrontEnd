


import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';


function useFormInput(initialvalue){
    const [value, setValue]= useState(initialvalue);
    function handleValueChange(e){
        setValue(e.target.value)
    }
    return {
        value,
        onChange: handleValueChange
        }

    }

function useTitle(title){
    useEffect(()=>{
        document.title=title;
    })
}
    

function useWindowWidth(props){
const [width, setWidth]=useState(window.innerWidth);
useEffect(()=>{
    const handleResize = ()=> setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return ()=>{
        window.removeEventListener("resize", handleResize);
    }
})}


export default function() {

    return 
        const name =useFormInput('name')
        const sur =useFormInput('surname')
        const width = useWindowWidth()
        useTitle(name.value + " " + sur.value
        

}
