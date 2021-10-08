import React from 'react'
import { ListaHeroes } from '../Heroes/ListaHeroes'

export const MarvelScreen = () => {
    return (
        <div>
            <h1>Pantalla de Marvel</h1>
            <hr />
            <ListaHeroes  publisher="Marvel Comics" />
        </div>
    )
}
