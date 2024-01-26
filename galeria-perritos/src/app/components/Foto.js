"use client"
import React from "react";
import style from './Foto.module.css'
import Image from "next/image";
import { useState, useEffect } from "react";
export default function Foto(){
    const [perrito,setPerrito]=useState('/vercel.svg');
    const [habilidad,setHabilidad]=useState("esperando habilidad");
    const [estado,setEstado]=useState("esperando")
    const url="https://pokeapi.co/api/v2/pokemon/aerodactyl";

    
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>{setPerrito(data.sprites.front_default),setEstado(data.species.name)})   
    },[]);
    setHabilidad(data.abilities[0].ability.name);
    
    return(
        <div className={style["contenedor"]}>
            <h1>{estado}</h1>
            <Image src={perrito} width={250} height={250}/>
            <h1>{habilidad}</h1>
        </div>
    )
}