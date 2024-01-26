'use client'
import React, { useEffect, useState } from "react";
import style from './Pokemon.module.css'
import Image from "next/image";
export default function Pokemon(){
    const [pokemon,setPokemon]=useState('/vercel.svg');
    const [pokename,setPokeName]=useState('Esperando nombre...')
    const url="https://pokeapi.co/api/v2/pokemon/";
    const url1='https://pokeapi.co/api/v2/pokemon/';
    const parte='pikachu';
    const quefue=url1+parte;
           
    useEffect(()=>{
        fetch(quefue)
        .then(res=>res.json())
        .then(data=>{setPokemon(data.sprites.front_default)
            ,setPokeName(data.species.name)
            ;
        })
    },[]);
    return(
        <div>
            <h1>{pokename}</h1>
            <Image src={pokemon} width={250} height={250}/>
        </div>
    )
}