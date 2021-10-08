import React from 'react'
import { getHeroesPublisher } from '../Selectores/getHeroesPublisher'
 
export const ListaHeroes = ({publisher}) => {

    
    const encontrarPublisher = getHeroesPublisher(publisher)

    return (
        <ul>
            {
                encontrarPublisher.map(devolver => (
                    <li key={devolver.id}> 
                        {devolver.superhero}
                    </li>
                ))
            }
        </ul>
    )
}
