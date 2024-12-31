import { useEffect, useState } from "react";


export default function useLocalStorage(key,intialValue){
    //may be the key is already present in the local storage or we are creating a new key for the first time
    const [storedValue,setStroredValue] = useState(()=>{
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : intialValue;
            //if the key is already present in the local storage then return the value of the key
            //else returning the initial value
        } catch  {
            console.log('Error reading local storage key',key);
            return intialValue;
        }
        

    });

    //here we are writing setState in the button component 

    useEffect(()=>{
        try {
            window.localStorage.setItem(key,JSON.stringify(storedValue));
        } catch  {
            console.log('Error writing to local storage key',key);
        }
    },[key,storedValue]);

    return [storedValue,setStroredValue];

    
}
