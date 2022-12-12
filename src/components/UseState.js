import { dividerClasses } from "@mui/material";
import React,{ useState } from "react";

export default function useState()
{
    const[info,setName]=useState({name:"Sanjay",age:19,friend_name:"Surya"});
    const changeInfo=()=>{setName((prevstate)=>{return{...prevstate,friend_name: "Vicky"}})};

    return(
        <div>
            <h1>{info.name} age:{info.age} and friend_name:{info.friend_name}</h1>
            <button type="button" onClick={changeInfo}>Click me</button>
        </div>
    )

}



