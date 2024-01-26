'use client';
import React from "react";
import style from './Dogs.module.css'
import { useEffect, useState } from "react";
import Image from "next/image";
export default function Dogs(){
    const [dog,setDog] = useState("/vercel.svg")    
    const url = "https://dog.ceo/api/breed/poodle/toy/images/random";
    
    useEffect(()=>{        
        fetch(url)
        .then(res => res.json())
        .then(data=> {setDog(data.message)})
    },[])
    
    return(
        <div className={style["contenedor-image"]}>
            <h1>Dogs</h1>
            <Image src={dog} alt="dog" width={500} height={500}/>
        </div>
    )
}